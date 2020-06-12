const dataSize = 100; //different from game to game. hardcoded for now.
const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
const ar10 = "10pt Arial";
const ar16 = "16pt Arial";
const ar20 = "20pt Arial";
var enemydata = 0;
var errorid = 0;
var debug = 0;

window.onkeyup = function(e){
	var key = e.keyCode; 
	if (key == 13){ //run the code on enter
		errorid = 0;
		if (monster_id.value == "DEBUG_ON"){
			debug = 1;
			return;
		} else if (monster_id.value == "DEBUG_OFF"){
			debug = 0;
			return;
		}
		var m_id = parseInt(monster_id.value);
		if (m_id > 255){ //check for some errors
			errorid = 1;
		} else { //check to see if a name was input instead. search the array for that name, and display that skill.
			var j = 0; //i in for...of loops is the value of the right side and not a number, so we need to track the loop iteration ourselves
			for (i of ename){
				if (monster_id.value.toString().toUpperCase() == i.toUpperCase()){ //the toUpperCase() method allows for case insensitive comparison
					m_id = parseInt(j);
					break;
				}
				j++;
			}
			if (isNaN(m_id)){ //if m_id still isn't a number at this point, throw an error
				errorid = 3; //the break in the for loop will break us all the way out of this if statement, so we can just have this here without any other 
			}
		}
		if (errorid == 0){ //proceed if we have no errors
			var skillTable = "https://viocar.github.io/tbl/enemydata.tbl"; //probably should be relative but ehhhh
			if (enemydata != 0){ // check if we previously loaded monsters, and use that arraybuffer instead
				createMonsterArray(enemydata, m_id);
			} else { //if it's our first time, load the files up
				var skillFileData = new XMLHttpRequest();
				skillFileData.open("GET", skillTable, true);
				skillFileData.responseType = "arraybuffer";
				skillFileData.onload = function(oEvent){ //when we have the files, store them for later use
					var sdBuffer = skillFileData.response;
					if (sdBuffer.byteLength % dataSize === 0){ //check if the size is correct
						enemydata = sdBuffer;
						createMonsterArray(sdBuffer, m_id);
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

function createMonsterArray(buffer, m_id){
	var mv = new DataView(buffer, m_id * dataSize, dataSize); //get the specific skill we wanna manipulate
	monsterArray = [];
	monsterArray.push(mv.getInt16(0, true)); //monster level (the true is for little endian)
	monsterArray.push(mv.getInt8(2, true)); //monster ID
	monsterArray.push(mv.getInt32(4, true)); //experience awarded
	monsterArray.push(mv.getInt32(8, true)); //various flags. this may actually be a 16-bit value
	monsterArray.push(mv.getInt32(12, true)); //floor ID
	monsterArray.push(mv.getInt32(16, true)); //HP
	monsterArray.push(mv.getInt32(20, true)); //"TP"
	for (i = 0; i < 38; i++){  								//STR, VIT, AGI, LUC, TEC, WIS, attack type, acc, cut res, bash res, stab res, fire res, ice res, volt res
		monsterArray.push(mv.getUint16(24 + (2 * i), true)); //ID res, petrify res, sleep res, panic res, plague res, poison res, blind res, curse res, paralyze res, stun res
	}														//head bind res, arm bind res, leg bind res, almighty res, drop 1 ID, drop 1 chance, drop 1 condition, (repeat for drops 2 and 3), unknown
	drawMonsterTable(monsterArray, m_id)
}

function drawMonsterTable(array, m_id){ //warning: this becomes a mess of magic numbers and shit because I just want it to work. sorry
	wipeScreen(); //wipes the screen for a new value
	var le = 0;
	var mwidth = (screen.width / 13.2225); //ah, this is so ugly to me
	var mwidth2 = (screen.width / 19.84); 
	var mwidth3 = (screen.width / 9.9175);
	var te = 30;
	var toffset = 17;
	var monstername;
	var flags;
	monstername = ename[m_id] + " [ID: " + m_id + " dec / " + m_id.toString(16) + " hex]";
	drawText(ar20, "start", le, te - 5, monstername, false);
	var mlevel = monsterArray[0]; //we don't want to display values for inaccessible levels, so we need the max level before we start shifting data out of our array
	for (var i = 0; i < 2; i++){ //level, ID, EXP, unknown
		for (var j = 0; j < 3; j++){			
			var mle = le + (j * mwidth);
			var mte = te + (i * 24);
			if (i === 0){
				drawRect(mle, mte, mwidth, 23, true, "#EEEEEE");
				drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, textheaders_main[j]);
			} else {
				if (j == 1 || j == 2){
					flags = getValueFromArray(array, false, false);
				}
				drawRect(mle, mte, mwidth, 23, false);
				drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, getValueFromArray(array, false, false));
			}
		}
	}
	var le2 = le + (3 * mwidth); //need to define this down here
	for (var i = 0; i < 2; i++){ //stats
		for (var j = 0; j < 15; j++){
			var mle = le2 + (j * mwidth2);
			var mte = te + (i * 24);
			if (i === 0){
				drawRect(mle, mte, mwidth2, 23, true, "#EEEEEE");
				drawText(ar10, "center", mle + (mwidth2 / 2), mte + toffset, textheaders_stats[j]);
			} else {
				if (j == 7){
					getValueFromArray(array, false, false);
				}
				drawRect(mle, mte, mwidth2, 23, false);
				drawText(ar10, "center", mle + (mwidth2 / 2), mte + toffset, getValueFromArray(array, false, false));
			}
		}
	}
	var te2 = 87;
	for (var i = 0; i < 2; i++){ //ailment resistances
		for (var j = 0; j < 13; j++){
			var mle = le + (j * mwidth);
			var mte = te2 + (i * 24);
			if (i === 0){
				drawRect(mle, mte, mwidth, 23, true, "#EEEEEE");
				drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, textheaders_ares[j]);
			} else {
				drawRect(mle, mte, mwidth, 23, false);
				drawText(ar10, "center", mle + (mwidth / 2), mte + toffset, getValueFromArray(array, false, false));
			}
		}
	}
	var te3 = 144;
	drawSingleBoxCombo(le + (mwidth3 * 3), te3, mwidth, 23, toffset, ar10, "center", "Almighty Res", getValueFromArray(array, false, false));
	for (var i = 0; i < 4; i++){ //stats
		for (var j = 0; j < 3; j++){
			var mle = le + (j * mwidth3);
			var mte = te3 + (i * 24);
			if (i === 0){
				drawRect(mle, mte, mwidth3, 23, true, "#EEEEEE");
				drawText(ar10, "center", mle + (mwidth3 / 2), mte + toffset, textheaders_items[j]);
			} else {
                if (i == 3){
                    drawRect(mle, mte, mwidth3, 23, true, "#ffffcf"); //bottom column, for conditional drop
                } else {
                    drawRect(mle, mte, mwidth3, 23, false); //item drops
                }
				if (i > 0 && j == 1){
					drawText(ar10, "center", mle + (mwidth3 / 2), mte + toffset, getValueFromArray(array, false, false, false)); //drop chance
				} else if (i > 0 && j == 2){
					drawText(ar10, "center", mle + (mwidth3 / 2), mte + toffset, getValueFromArray(array, true, false, false)); //condition
				} else {
					drawText(ar10, "center", mle + (mwidth3 / 2), mte + toffset, getValueFromArray(array, false, true, true)); //item ID
				}
			}
		}
	}
	drawSingleBoxCombo(le + (mwidth3 * 3) + mwidth, te3, mwidth, 23, toffset, ar10, "center", "Flags", flags.toString(16));
	drawSingleBoxCombo(le + (mwidth3 * 3) + (mwidth * 2), te3, mwidth, 23, toffset, ar10, "center", "Unknown", getValueFromArray(array, false, true));
}

function wipeScreen(){
	ctx.clearRect(0, 0, screen.width, screen.height);
}

function getValueFromArray(array, isConditional, displayHex, isItemID){
	var val = array[0] 
	if (isConditional == true){
		for (var k in conditionalobj){
			if (k == val){
				val = conditionalobj[val];
			}
		}
	}
    if (isItemID == true){
        if (array[0] == 0){
            val = "NONE"
        } else {
            if (!debug){
                val = iname[(array[0] - 0x39D)]
            } else {
                val = array[0].toString(16) + " " + iname[(array[0] - 0x39D)]
            }
        }
    }
	if (displayHex == true){
		val = val.toString(16);
	}
    array.shift();
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
function drawText(font, align, le, te, text){
	ctx.beginPath();
	ctx.fillStyle = "#000000" //all text is hardcoded to be black for now
	ctx.font = font;
	ctx.textAlign = align;
	ctx.fillText(text.toString().toUpperCase(), le, te);
	ctx.stroke();
}

function drawSingleBoxCombo(le, te, width, height, toffset, font, align, headertext, datatext){
	drawRect(le, te, width, height, true, "#EEEEEE");
	drawText(font, align, le + (width / 2), te + toffset, headertext);
	drawRect(le, te + 24, width, height, false);
	drawText(font, align, le + (width / 2), te + toffset + 24, datatext);
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
