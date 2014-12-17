#pragma strict

/*******************************************************************
*	This script does all the functionality of the credits screen.
*******************************************************************/

/*******************************************************************
*	Variables for credit text
*******************************************************************/
var credits : GUIText;

/*******************************************************************
*	Functionality of Credits Screen
*		Shows credit text
*		Returns back to Main Menu after 10 seconds
*******************************************************************/
function Start () {

	credits.text = "Developed by L. Brooks and A. Marchetti\n\nMenu music by Approaching Nirvana\n\nThank you for playing!";
	
	yield WaitForSeconds(10);
	Application.LoadLevel(0);
	
}