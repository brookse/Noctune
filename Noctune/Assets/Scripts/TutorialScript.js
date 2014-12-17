#pragma strict

/*******************************************************************
*	This script displays the tutorial, which is currently just text
*******************************************************************/

/*******************************************************************
*	Variables
*******************************************************************/
var tutorialText : GUIText;
var backToMain : GUIText;
var selectSprite : SpriteRenderer;
var selected : boolean;
var button : String;

/*******************************************************************
*	Displays tutorial text
*******************************************************************/
function Start () {
	tutorialText.text = "Press the left and right arrows to change the bottom bar to match the color of the note falling.\n\nLeft arrow makes the bar red, right arrow makes the bar blue.\n\nHit the notes to the beat of the song.\n\nHave fun!";
}

/*******************************************************************
*	Enables menu selected image and turns text color blue 
*		when the user mouses over a button
*******************************************************************/
function OnMouseEnter()
{
	backToMain.color = Color.blue;
	selectSprite.enabled = true;
	selected = true;
}

/*******************************************************************
*	Disables menu selected image and turns text color back to white 
*		when the user mouses out of a button
*******************************************************************/
function OnMouseExit()
{
	backToMain.color = Color.white;
	selectSprite.enabled = false;
	selected = false;
}

/*******************************************************************
*	Directs the user to back to the main menu
*******************************************************************/
function Update () {
	if (Input.GetMouseButtonUp(0) && selected) {
		if (button==("Go Back")) {
			Debug.Log("Back to Main");
			Application.LoadLevel(0);
		}
	}
}