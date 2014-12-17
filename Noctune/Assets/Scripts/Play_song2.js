#pragma strict

/*******************************************************************
*	This script plays the song Timber by Pitbull feat Ke$ha
*******************************************************************/

/*******************************************************************
*	Game objects accessed outside of script
*******************************************************************/
var note : GameObject;
var timeRemaining: GUIText;
var countdown : GUIText;

/*******************************************************************
*	Time of song variables
*******************************************************************/
static var min : int;
static var sec : int;

/*******************************************************************
*	Constants for color of bar on instantiation
*******************************************************************/
static final var red = "Red";
static final var blue = "Blue";
static final var blank = "Blank";

/*******************************************************************
*	Song to be played
*******************************************************************/
private var music : AudioClip;
static var bpm = 193;
var knock : AudioClip;
var hoot : AudioClip;

/*******************************************************************
*	Plays the song
*******************************************************************/
function Start () {

	// Reset all score values
	Button.multiplier = 1.0;
	Button.currentScore = 0;
	Button.newScore = 0;
	Button.lastScore = 0;
	Score.currentScore = 0;
	Score.numUnbelievable = 0;
	Score.numPerfect = 0;
	Score.numGreat = 0;
	Score.numOkay = 0;
	Score.numMiss = 0;
	Score.multiplier = 1.0;

	// Counts the player into the song
	music = GetComponent(AudioSource).clip;
	countdown.text = "3";
	audio.PlayOneShot(knock, 1);
	yield WaitForSeconds(.75);
	countdown.text = "2";
	audio.PlayOneShot(knock, 1);
	yield WaitForSeconds(.75);
	countdown.text = "1";
	audio.PlayOneShot(knock, 1);
	yield WaitForSeconds(.75);
	countdown.text = "GO!";
	audio.PlayOneShot(hoot, 1);
	yield WaitForSeconds(.75);
	countdown.enabled = false;

	// Begins the song
	songStart();
	return;
}

/*******************************************************************
*	Issues timed notes for song
*******************************************************************/
function songStart () {
	var time : float = music.length;
	var timeBetween : float = 60.0/bpm; //.3108
	var timeCountup : float = 0.0;
	yield WaitForSeconds(.78);
	audio.Play();
	
	// until 11, half time
	timeBetween*=8;
	while(timeCountup < 9){
		createNote(timeCountup);
		timeCountup += timeBetween;
	}
	// 31 seconds, current speed
	timeBetween/=4;
	while(timeCountup < 28){
		createNote(timeCountup);
		timeCountup += timeBetween;
	}
	// 46 seconds, fastest (drop)
	timeBetween/=2;
	while(timeCountup < 43){
		createNote(timeCountup);
		timeCountup += timeBetween;
	}
	// 52 seconds, half time
	timeBetween*=4;
	while(timeCountup < time-2){
		createNote(timeCountup);
		timeCountup += timeBetween;
	}
	
	// REMAINDER OF SONG, NOT DEMO
	// 68 sec, back to current speed
	// 1 min 50 sec, fastest (drop)
	// 2 min 4 sec, back to current speed
	
	yield WaitForSeconds(time);
	Application.LoadLevel(2);
	
	return;
}

/*******************************************************************
*	Instantiates a randomly colored note
*******************************************************************/
function createNote(time : float){
	var offset : float = 2.5;
	var note1 = Instantiate(note, transform.position + Vector3(0,offset+(4*time),0), Quaternion.Euler(0,0,0));
	var script1 : Note = note1.GetComponent(Note);
	
	var randNum : int = Random.Range(0,2);
	if(randNum == 1){
		script1.setColor(red);
	} else {
		script1.setColor(blue);
	}
}

/*******************************************************************
*	Updates the time remaining on the song
*******************************************************************/
function OnGUI() {
	var time : float = music.length - audio.time;
	min = time / 60;
	sec = time % 60;
	
	timeRemaining.text = min.ToString() + " minutes " + sec.ToString() + " seconds";
}