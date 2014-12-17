#pragma strict

/*******************************************************************
*	This script does the victory screen!
*******************************************************************/

/*******************************************************************
*	Variables
*******************************************************************/
var finalScore : GUIText;
var owl : SpriteRenderer;
static var time : float;
var hoot : AudioClip;

/*******************************************************************
*	Displays the final score the user earned from the song played
*		for 5 seconds, then redirects to main menu
*******************************************************************/
function Start () {

	finalScore.text = "" + Score.currentScore;
	owl.enabled = false;
	time = Random.Range(1,6);
	
	yield WaitForSeconds(5);
	Application.LoadLevel(0);
}

/*******************************************************************
*	Determines when to make the owl hoot
*******************************************************************/
function OnGUI(){

	// Counts down time since last frame change
	time -= Time.deltaTime;
	
	// Time runs out
	if(time <= 0){
		
		owl.enabled = !owl.enabled;
		
		// Makes the owl hoot
		if(owl.enabled == true){
			audio.PlayOneShot(hoot, 1);
		}
		
		// Waits 1.25 seconds
		if(owl.enabled){
			time = 1.25;
		} else {
			time = Random.Range(2,8);
		}
	}
}