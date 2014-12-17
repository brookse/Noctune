#pragma strict
/*******************************************************************
*	This script determines the score a user earns based on what
*		color is held down and how accurate they are to the beat.
*		It also maintains the multiplier and total score.
*******************************************************************/

/*******************************************************************
*	Variables for note color changes
*******************************************************************/
static var currentColor : String;
static var correctColors = new Array();

/*******************************************************************
*	Variables needed for multiplier
*******************************************************************/
static var multiplier = 1.0;
static var lastScore = 0;
static var currentScore : int;
static var newScore : float;

/*******************************************************************
*	Constants for score values 
*******************************************************************/
private final var unbelievableScore = 500;
private final var perfectScore = 100;
private final var greatScore = 50;
private final var okayScore = 25;
private final var missScore = 0;

/*******************************************************************
*	Figures out the score the user got per note that comes down.
*******************************************************************/
function Update () {

	// Verify the button pressed was space
	if(currentColor != Play_song.blank) {
		var correctColor : String = correctColors[0];
		var colorMatches : boolean = currentColor.Equals(correctColor);
		
		// Criteria for getting an Unbelievable, position and color
		// Note that this is virtually impossible
		if(transform.position.y == -4.16 && colorMatches){
			currentScore = unbelievableScore;
			calcScore();
			Score.currentScore += newScore;
			Score.howGood = "UNBELIEVABLE!";
			Score.numUnbelievable += 1;
			Destroy(gameObject);
			correctColors.Shift();
			
		// Criterion for getting a Perfect, position and color
		} else if(transform.position.y < -4.09 && transform.position.y > -4.23 && colorMatches){
			currentScore = perfectScore;
			calcScore();
			Score.currentScore += newScore;
			Score.howGood = "PERFECT!";
			Score.numPerfect += 1;
			Destroy(gameObject);
			correctColors.Shift();
			
		// Criterion for getting a Great, position and color
		} else if(((transform.position.y < -3.95 && transform.position.y >= -4.09) || (transform.position.y <= -4.23 && transform.position.y > -4.37)) && (colorMatches)){ 
			currentScore = greatScore;
			calcScore();
			Score.currentScore += newScore;
			Score.howGood = "Great!";
			Score.numGreat += 1;
			Destroy(gameObject);
			correctColors.Shift();
			
		// Criterion for getting an Okay, position and color
		} else if(((transform.position.y < -3.81 && transform.position.y >= -3.95) || (transform.position.y <= -4.37 && transform.position.y > -4.51)) && (colorMatches)){
			currentScore = okayScore;
			calcScore();
			Score.currentScore += newScore;
			Score.howGood = "Okay!";
			Score.numOkay += 1;
			Destroy(gameObject);
			correctColors.Shift();
			
		// Criterion for getting a Miss, position and color - will not register a miss before the spacebar object
		} else if(transform.position.y <= -4.51){
			currentScore = missScore;
			calcScore();
			Score.currentScore += newScore;
			Score.howGood = "Miss!";
			Score.numMiss += 1;
			Destroy(gameObject);
			correctColors.Shift();
			
		} 
	// Registers a miss when the note goes past the maximum allowance
	} else if(currentColor == Play_song.blank){
		if(transform.position.y <= -4.51){
			currentScore = missScore;
			calcScore();
			Score.currentScore += newScore;
			Score.howGood = "Miss!";
			Score.numMiss += 1;
			Destroy(gameObject);
			correctColors.Shift();
		}
	
	// Registers a miss when the note goes past the maximum allowance
	} else if(transform.position.y <= -4.5){
		currentScore = missScore;
		calcScore();
		Score.currentScore += newScore;
		Score.howGood = "Miss!";
		Score.numMiss += 1;
		Destroy(gameObject);
		correctColors.Shift();
	}
}

/*******************************************************************
*	Calculates the multiplier and new multiplied score
*		Will determine previous score and compare to current score
*		Replaces last score with current score
*		Calculates multiplier
*******************************************************************/
function calcScore() {
	// Determine mulitplier
	if((lastScore == unbelievableScore || lastScore == perfectScore || lastScore == greatScore) && (currentScore == unbelievableScore || currentScore == perfectScore || currentScore == greatScore)){
		multiplier += .2;
	} else if((lastScore == unbelievableScore || lastScore == perfectScore || lastScore == greatScore) && (currentScore == okayScore || currentScore == missScore)) {
		multiplier = 1.0;
	}
	lastScore = currentScore;
	// Fix rounding error in multiplier
	var multI : int = multiplier *100;
	var multD : double = multI/100.0;
	
	// Calculate new score
	Score.multiplier = multD;
	newScore = currentScore * multD;
}