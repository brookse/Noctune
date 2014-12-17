#pragma strict

/*******************************************************************
*	GUIText's for game
*******************************************************************/
var score : GUIText;
var goodness : GUIText;
var numOfPerfect : GUIText;
var numOfGreat : GUIText;
var numOfOkay : GUIText;
var numOfMiss : GUIText;
var currentMultiplier : GUIText;

/*******************************************************************
*	Variables for current score
*******************************************************************/
static var currentScore = 0;
static var scoreString;

/*******************************************************************
*	Variables for how good the player is doing, amount correct
*******************************************************************/
static var howGood;
static var numCorrect;
static var numUnbelievable = 0;
static var numPerfect = 0;
static var numGreat = 0;
static var numOkay = 0;
static var numMiss = 0;

/*******************************************************************
*	Variables for multiplier
*******************************************************************/
static var multiplier = 1.0;
static var multText;

/*******************************************************************
*	Update all GUIText's in the game
*******************************************************************/
function OnGUI(){
	score.text = "" + currentScore;
	goodness.text = howGood;
	currentMultiplier.text = multiplier + "x";
	numOfPerfect.text = "" + numPerfect;
	numOfGreat.text = "" + numGreat;
	numOfOkay.text = "" + numOkay;
	numOfMiss.text = "" + numMiss;
}