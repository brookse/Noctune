#pragma strict

/*******************************************************************
*	This script makes the owl blink
*******************************************************************/

/*******************************************************************
*	Variables for owl blink
*******************************************************************/
var eyeClosed : SpriteRenderer;
private var time : float;

/*******************************************************************
*	Initially sets the owl to eyes open state and determines a 
*		random time for the eyes to remain open
*******************************************************************/
function Start () {
	eyeClosed.enabled = false;
	time = Random.Range(1,6);
}

/*******************************************************************
*	Determines when to make the owl blink
*******************************************************************/
function OnGUI(){

	// Counts down time since last frame change
	time -= Time.deltaTime;
	
	// Time runs out
	if(time <= 0){
	
		// Either opens or closes eyes depending on current state
		eyeClosed.enabled = !eyeClosed.enabled;
		
		// Closes eyes for .75 seconds
		if(eyeClosed.enabled){
			time = .75;
		
		// Opens eyes for random amount of time
		} else {
			time = Random.Range(2,8);
		}
	}
}