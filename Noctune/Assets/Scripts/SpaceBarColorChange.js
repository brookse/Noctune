#pragma strict

/*******************************************************************
*	This script changes the space bar based off of what key 
*		(left or right) the player has held down
*******************************************************************/

/*******************************************************************
*	Sprites of color change
*******************************************************************/
var blueBar : Sprite;
var redBar : Sprite;

/*******************************************************************
*	Changes the color of the space bar
*******************************************************************/
function OnGUI(){

	// check to see user's input
	if(Input.GetButton("left")){
		// if left is down, change to red
		GetComponent(SpriteRenderer).sprite = redBar;
		GetComponent(SpriteRenderer).enabled = true;
		Debug.Log("Space : " + Play_song.red);
		Button.currentColor = Play_song.red;
		
	// if right is down, change to blue
	} else if(Input.GetButton("right")){
		GetComponent(SpriteRenderer).sprite = blueBar;
		GetComponent(SpriteRenderer).enabled = true;
		Debug.Log("Space : " + Play_song.blue);
		Button.currentColor = Play_song.blue;
	
	// if nothing or both are down, just be gray
	} else if((!Input.GetButton("left")) || (!Input.GetButton("right"))){
		GetComponent(SpriteRenderer).enabled = false;
		Button.currentColor = Play_song.blank;
	}
}