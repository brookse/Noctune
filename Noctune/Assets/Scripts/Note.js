#pragma strict

/*******************************************************************
*	This script does instantiation of notes that the user will hit.
*******************************************************************/

/*******************************************************************
*	Variables for note
*******************************************************************/
static var color;
var redSprite : Sprite;
var blueSprite : Sprite;

/*******************************************************************
*	Moves the note down the screen
*******************************************************************/
function Update () {
	transform.position.z = 0;
	transform.Translate(Vector3(0,-4,0) * Time.deltaTime);
}

/*******************************************************************
*	Changes the color of the note, and logs the order of correct
*		color notes
*******************************************************************/
function setColor(colorOnStart) {

	if(colorOnStart == Play_song.red){
		GetComponent(SpriteRenderer).sprite = redSprite;
		Button.correctColors.Push(Play_song.red);
		Debug.Log("Note : " + Play_song.red);
		
	} else if(colorOnStart == Play_song.blue){
		GetComponent(SpriteRenderer).sprite = blueSprite;
		Button.correctColors.Push(Play_song.blue);
		Debug.Log("Note : " + Play_song.blue);
	}
}