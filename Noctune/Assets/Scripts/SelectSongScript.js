
/*******************************************************************
*	This script directs the user to different songs based off
*		of what song they selected
*******************************************************************/

/*******************************************************************
*	Variables to be accessed from outside of script
*******************************************************************/
public var optionText : GUIText;
public var selectSprite : SpriteRenderer;
public var button : String;

/*******************************************************************
*	Demo of audio clip
*******************************************************************/
var demo : AudioClip;

var selected : boolean;

/*******************************************************************
*	Enables menu selected image, turns text color blue, and plays
*		a demo of song when the user mouses over a button
*******************************************************************/
function OnMouseEnter()
{
	optionText.color = Color.blue;
	selectSprite.enabled = true;
	selected = true;
	audio.PlayOneShot(demo, 1);
}

/*******************************************************************
*	Disables menu selected image, turns text color back to white 
*		and stops demo when the user mouses out of a button
*******************************************************************/
function OnMouseExit()
{
	optionText.color = Color.white;
	selectSprite.enabled = false;
	selected = false;
	audio.Stop();
}

/*******************************************************************
*	Directs the user to different songs depending on what they
*		have selected by clicking.
*******************************************************************/
function Update() {
	if (Input.GetMouseButtonUp(0) && selected) {
		if (button==("Timber")) {
			Application.LoadLevel(1);
		} else if (button==("Help")){
			Application.LoadLevel(5);
		} else if (button == ("Main")){
			Application.LoadLevel(0);
		}
	}
}