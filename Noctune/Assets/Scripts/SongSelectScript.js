
/*******************************************************************
*	This script directs the user to different scenes based off
*		of what selection they make in the menu screen.
*******************************************************************/

/*******************************************************************
*	Variables
*******************************************************************/
public var optionText : GUIText;
public var selectSprite : SpriteRenderer;
public var button : String;
var selected : boolean;

/*******************************************************************
*	Enables menu selected image and turns text color blue 
*		when the user mouses over a button
*******************************************************************/
function OnMouseEnter()
{
	optionText.color = Color.blue;
	selectSprite.enabled = true;
	selected = true;
}

/*******************************************************************
*	Disables menu selected image and turns text color back to white 
*		when the user mouses out of a button
*******************************************************************/
function OnMouseExit()
{
	optionText.color = Color.white;
	selectSprite.enabled = false;
	selected = false;
}

/*******************************************************************
*	Directs the user to different scenes depending on what they
*		have selected by clicking.
*******************************************************************/
function Update() {
	if (Input.GetMouseButtonUp(0) && selected) {
		if (button==("Song Select")) {
			Application.LoadLevel(6);
		} else if (button==("Option Select")){
			Application.LoadLevel(4);
		} else if(button ==("Exit Select")){
			Application.Quit();
		} else if(button ==("Credits Select")){
			Application.LoadLevel(3);
		}
	}
}