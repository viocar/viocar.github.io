const dataSize = 376; //different from game to game. hardcoded for now.
const tlevels = 10; //total number of levels. this is hardcoded for now but can change from game to game
const sublen = 4 + (tlevels * 4); //length of a subheader entry, including the subheader itself
const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
const ar10 = "10pt Arial";
const ar16 = "16pt Arial";
const ar20 = "20pt Arial";
var pstable = 0; //variables so table loading only has to happen once
var estable = 0;
var errorid = 0;
var debug = 0;

window.onkeyup = function(e){
	var key = e.keyCode; 
	if (key == 13){ //run the code on enter
		errorid = 0;
		if (skill_id.value == "DEBUG_ON"){
			debug = 1;
			return;
		} else if (skill_id.value == "DEBUG_OFF"){
			debug = 0;
			return;
		}
		var s_id = parseInt(skill_id.value);
		var boxcheck = document.getElementById("enemybox").checked;
		if (s_id > 399){ //check for some errors
			if (boxcheck){
				errorid = 1;
			} else if (s_id > 421){
				errorid = 2;
			}
		} else { //check to see if a name was inpu	t instead. search the array for that name, and display that skill.
			var namearraytouse = pname;
			if (boxcheck){
				namearraytouse = ename;
			}
			var j = 0; //i in for...of loops is the value of the right side and not a number, so we need to track the loop iteration ourselves
			for (i of namearraytouse){
				if (skill_id.value.toString().toUpperCase() == i.toUpperCase()){ //the toUpperCase() method allows for case insensitive comparison
					s_id = parseInt(j);
					break;
				}
				j++;
			}
			if (isNaN(s_id)){ //if s_id still isn't a number at this point, throw an error
				errorid = 3; //the break in the for loop will break us all the way out of this if statement, so we can just have this here without any other 
			}
		}
		if (errorid == 0){ //proceed if we have no errors
			var skillTable = "https://viocar.github.io/tbl/playerskilltable.tbl"; //probably should be relative but ehhhh
			if (boxcheck){
				skillTable = "https://viocar.github.io/tbl/enemyskilltable.tbl";
			}
			if (pstable != 0 && !boxcheck){ // check if we previously loaded pstable/estable, and use that arraybuffer instead
				createSkillArray(pstable, s_id);
			} else if (estable != 0 && boxcheck){
				createSkillArray(estable, s_id);
			} else { //if it's our first time, load the files up
				var skillFileData = new XMLHttpRequest();
				skillFileData.open("GET", skillTable, true);
				skillFileData.responseType = "arraybuffer";
				skillFileData.onload = function(oEvent){ //when we have the files, store them for later use
					var sdBuffer = skillFileData.response;
					if (sdBuffer.byteLength % dataSize === 0){ //check if the size is correct
						if (!boxcheck){
							pstable = sdBuffer;
						} else if (boxcheck){
							estable = sdBuffer;
						}
						createSkillArray(sdBuffer, s_id);
					} else {
						errorid = 4;
						errorHandler(errorid);
					}
				}
				skillFileData.send(null);
			}
		} else { //something went wrong. holler an error out
			errorHandler(errorid);
		}
	}
}

function createSkillArray(buffer, s_id){ //okay, so, I could consolidate these skillArray.push calls into for loops, but then I'd lose comments, which I don't think is worth it.
	var sv = new DataView(buffer, s_id * dataSize, dataSize); //get the specific skill we wanna manipulate
	skillArray = [];
	skillArray.push(sv.getInt8(0, true)); //skill level. (the true is needed to be read as little endian)
	skillArray.push(sv.getInt8(1, true)); //skill type
	skillArray.push(sv.getUint16(2, true)); //body part used (0: none probably, 1: head, 2: arm, 4: leg, 80: unusable if any part bound?, 4000: unusable if no part bound?. weapon requirement is also handled here
	skillArray.push(sv.getUint16(4, true)); //some sort of status required for the skill to work. 01: dead only. 02: snipe/sharpshooter. 0x10: only people with buffs? 0x8000: it's on immortal, so probably alive + dead
	skillArray.push(sv.getInt8(6, true)); //target type. see text file for details
	skillArray.push(sv.getInt8(7, true)); //target team
	skillArray.push(sv.getInt8(8, true)); //useable in combat or field or what. 3 is useable in field only, 4 is usable in combat only, 7 is useable in both
	skillArray.push(sv.getInt8(9, true)); //buff or debuff? (0 = no, 1 = buff, 2 = debuff)
	skillArray.push(sv.getInt8(10, true)); //type of buff/debuff. see: https://cdn.discordapp.com/attachments/221343091133513728/339176275648184320/unknown.png (note: 3 is evasion)
	skillArray.push(sv.getInt8(11, true)); //unknown. the code refers to the type of a buff/debuff as a byte, so I don't know what this is
	skillArray.push(sv.getInt16(12, true)); //buff/debuff element. see: https://cdn.discordapp.com/attachments/221343091133513728/339176275648184320/unknown.png
	skillArray.push(sv.getInt16(14, true)); //damage type
	skillArray.push(sv.getInt16(16, true)); //infliction flag
	skillArray.push(sv.getInt16(18, true)); //ailments inflicted
	skillArray.push(sv.getInt16(20, true)); //skill flags
	skillArray.push(sv.getInt16(22, true)); //unknown 
	for (i = 0; i < 8; i++){ //EO3 has room for eight subheaders. I believe this is expanded to 10 in later games
		skillArray.push(sv.getInt32(24 + (i * sublen), true)); //subheader value
		for (j = 0; j < tlevels; j++){ //a subheader has space for ten levels even if the level itself has a lower maximum
			skillArray.push(sv.getInt32(28 + (i * sublen) + (j * 4), true));
		}
	}
	drawSkillTable(skillArray, s_id)
}

function drawSkillTable(array, s_id){
	wipeScreen(); //wipes the screen for a new value
	var le = 0;
	var te = 30;
	var toffset = 17;
	var boxcheck = document.getElementById("enemybox").checked;
	var skillname;
	var teamname;
	if (boxcheck){ //this repetition feels a bit wrong but I think any way around it would wind up being longer
		skillname = ename[s_id] + " (Enemy skill) [ID: " + s_id + " dec / " + s_id.toString(16) + " hex]";
	} else {
		skillname = pname[s_id] + " (Player skill) [ID: " + s_id + " dec / " + s_id.toString(16) + " hex]";
	}
	drawText(ar20, "start", le, te - 5, skillname, false);
	var mlevel = skillArray[0]; //we don't want to display values for inaccessible levels, so we need the max level before we start shifting data out of our array
	if (s_id == 330 || s_id == 331){ //these two skills are improperly handled by the game, so we need this manual override
		mlevel = 10;
	}
	for (var i = 0; i < 2; i++){ //this handles the main headers
		for (var j = 0; j < 16; j++){
			var mwidth = (screen.width / 16);
			var mle = le + (j * mwidth);
			var mte = te + (i * 24);
			if (i === 0){
				drawRect(mle, mte, mwidth, 23, true, "#EEEEEE");
				drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, textheaders[j]);
			} else {
				drawRect(mle, mte, mwidth, 23, false);
				drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, getValueFromArray(array, false, true), true);
			}
		}
	}
	for (var i = 0; i < 9; i++){ //this handles subheaders
		for (var j = 0; j <= tlevels; j++){
			var mwidth = (screen.width / (tlevels + 1));
			var mle = le + (j * mwidth);
			var mte = te + 54 + (i * 24);
			var isSubheader = false;
			if (j <= mlevel){ //don't draw values for levels beyond the max
				if (i === 0){
					if (j % 2 == 0){ //if top row and even number
						drawRect(mle, mte, mwidth, 23, true, "#DDDDDD");
					} else { //top row and odd number
						drawRect(mle, mte, mwidth, 23, true, "#EEEEEE");
					}
					if (j === 0){
						drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, "Subheader");
					} else {
						drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, "Level " + j);
					}
				} else {
					if (j === 0){
						isSubheader = true;
						drawSubheaderDumpText(array, i);
					} else {
						isSubheader = false;
					}
					if (j % 2 == 0){ //not top row but even
						drawRect(mle, mte, mwidth, 23, true, "#EEEEEE");
					} else { //not top row, not even
						drawRect(mle, mte, mwidth, 23, false);
					}
					drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, getValueFromArray(array, isSubheader), false);
				}
			} else if (i > 0){ //since the game data contains values beyond the max, we still need to shift that data out of our array
				array.shift();
			}
		}
	}
			
	// drawText(ar10, "start", le, te + 285, "Note: Some unknown values may be merged with other unknown values and create inaccurate output. This will be fixed as the meanings of the unknown values are discovered.");
	// drawText(ar10, "start", 4, 348, ".");
}
		
function wipeScreen(){
	ctx.clearRect(0, 0, screen.width, screen.height);
}

function getValueFromArray(array, isSubheader, displayHex){
	var val = array[0]
	array.shift();
	if (isSubheader == true){
		for (var k in subheaderobj){
			if (k == val){
				val = subheaderobj[val];
			}
		}
	}
	if (displayHex == true){
		val = val.toString(16);
	}
	return val;
}

function drawSubheaderDumpText(array, i){ //this is a quick hack so I can easily read subheader values lol
	if (!debug){
		return;
	}
	var te = 300 + (i * 16);
	var le = 8;
	var val = array[0];
	drawText(ar10, "start", le, te, subheaderobj[val], false);
	drawText(ar10, "start", le + 150, te, val, false);
	drawText(ar10, "start", le + 190, te, val.toString(16));
}

function drawRect(le, te, width, height, fill, colour){
	ctx.beginPath();
	ctx.rect(le, te, width, height);
	if (fill){
		ctx.fillStyle = colour;
		ctx.fill();
	}
	ctx.stroke();
}
function drawText(font, align, le, te, text, printzero){
	ctx.beginPath();
	ctx.fillStyle = "#000000" //all text is hardcoded to be black for now
	ctx.font = font;
	ctx.textAlign = align;
	if ((text == 0) && (!printzero)){
		return
	} else if (text) {
		ctx.fillText(text.toString().toUpperCase(), le, te);
		ctx.stroke();
	} 
}

function errorHandler(id){
	wipeScreen();
	console.log("Error ID: " + id);
	drawText(ar20, "left", 0, 22, errorm[id], true);
}
	
function debugText(text){
	var onoff = 1;
	if (onoff == 1){
		console.log(text);
	}
}
