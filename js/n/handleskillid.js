const DATA_SIZE = 0x264; //different from game to game. hardcoded for now.
const T_LEVELS = 11; //total number of levels. this is hardcoded for now but can change from game to game
const SUBLEN = 4 + (T_LEVELS * 4); //length of a subheader entry, including the subheader itself
const HEADER_LEN = 0x24;
const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
const ar10 = "10pt Arial";
const ar16 = "16pt Arial";
const ar20 = "20pt Arial";
var p_s_table = 0; //variables so table loading only has to happen once
var e_s_table = 0;
var error_id = 0;
var debug = 0;

window.onkeyup = function(e){
	var key = e.keyCode; 
	if (key == 13){ //run the code on enter
		error_id = 0;
		if (skill_id.value == "DEBUG_ON"){
			debug = 1;
			return;
		} else if (skill_id.value == "DEBUG_OFF"){
			debug = 0;
			return;
		}
		var s_id = parseInt(skill_id.value);
		var box_check = document.getElementById("enemybox").checked;
		if (s_id > 900){ //check for some errors
			if (!box_check){
				error_id = 2;
			} else if (s_id > 769){
				error_id = 1;
			}
		} else { //check to see if a name was inpt instead. search the array for that name, and display that skill.
			var name_array_to_use = PLAYER_SKILL_NAME;
			if (box_check){
				name_array_to_use = ENEMY_SKILL_NAME;
			}
			var j = 0; //i in for...of loops is the value of the right side and not a number, so we need to track the loop iteration ourselves
			for (i of name_array_to_use){
				if (skill_id.value.toString().toUpperCase() == i.toUpperCase()){ //the toUpperCase() method allows for case insensitive comparison
					s_id = parseInt(j);
					break;
				}
				j++;
			}
			if (isNaN(s_id)){ //if s_id still isn't a number at this point, throw an error
				error_id = 3; //the break in the for loop will break us all the way out of this if statement, so we can just have this here without any other 
			}
		}
		if (error_id == 0){ //proceed if we have no errors
			var skill_table = "https://viocar.github.io/tbl/n_pst.tbl"; //probably should be relative but ehhhh
			if (box_check){
				skill_table = "https://viocar.github.io/tbl/n_est.tbl";
			}
			if (p_s_table != 0 && !box_check){ // check if we previously loaded p_s_table/e_s_table, and use that arraybuffer instead
				createSkillArray(p_s_table, s_id);
			} else if (e_s_table != 0 && box_check){
				createSkillArray(e_s_table, s_id);
			} else { //if it's our first time, load the files up
				var skill_file_data = new XMLHttpRequest();
				skill_file_data.open("GET", skill_table, true);
				skill_file_data.responseType = "arraybuffer";
				skill_file_data.onload = function(oEvent){ //when we have the files, store them for later use
					var sd_buffer = skill_file_data.response;
					if (sd_buffer.byteLength % DATA_SIZE === 0){ //check if the size is correct
						if (!box_check){
							p_s_table = sd_buffer;
						} else if (box_check){
							e_s_table = sd_buffer;
						}
						createSkillArray(sd_buffer, s_id);
					} else {
                        console.log(sd_buffer.byteLength);
                        console.log(DATA_SIZE);
						error_id = 4;
						errorHandler(error_id);
					}
				}
				skill_file_data.send(null);
			}
		} else { //something went wrong. holler an error out
			errorHandler(error_id);
		}
	}
}

function createSkillArray(buffer, s_id){ //okay, so, I could consolidate these skill_array.push calls into for loops, but then I'd lose comments, which I don't think is worth it.
	var sv = new DataView(buffer, s_id * DATA_SIZE, DATA_SIZE); //get the specific skill we wanna manipulate
	skill_array = [];
	skill_array.push(sv.getInt8(0, true)); //skill level. (the true is needed to be read as little endian)
	skill_array.push(sv.getInt8(1, true)); //skill type
    //bytes 2 and 3 are unused in EON, so we don't get them here
	skill_array.push(sv.getUint16(4, true)); //body parts
    //bytes 5 and 6 are also unused. why? who knows!!
	skill_array.push(sv.getUint16(8, true)); //target requirement
	skill_array.push(sv.getUint16(10, true)); //range
	skill_array.push(sv.getUint32(12, true)); //icon (apparently it's 32-bit! who knew)
	skill_array.push(sv.getInt8(16, true)); //target team
	skill_array.push(sv.getInt8(17, true)); //useable in combat or field or what. 1 is usable in town, 2 is usable in dungeon, and 4 is usable in combat
	skill_array.push(sv.getInt8(18, true)); //buff or debuff? (0 = no, 1 = buff, 2 = debuff)
	skill_array.push(sv.getInt8(19, true)); //type of buff/debuff. see: https://cdn.discordapp.com/attachments/221343091133513728/339176275648184320/unknown.png
	skill_array.push(sv.getUint16(20, true)); //buff/debuff element. see: https://cdn.discordapp.com/attachments/221343091133513728/339176275648184320/unknown.png
	skill_array.push(sv.getInt16(22, true)); //damage type
	skill_array.push(sv.getInt16(24, true)); //damage type
	skill_array.push(sv.getInt16(26, true)); //infliction flag
	skill_array.push(sv.getInt16(28, true)); //ailments inflicted
    //30 and 31 are unused
	skill_array.push(sv.getInt32(32, true)); //skill flags
	for (i = 0; i < 12; i++){ //EON has room for twelve subheaders.
		skill_array.push(sv.getInt32(HEADER_LEN + (i * SUBLEN), true)); //subheader value
		for (j = 0; j < T_LEVELS; j++){ //a subheader has space for ten levels even if the level itself has a lower maximum
			skill_array.push(sv.getInt32((HEADER_LEN + 4) + (i * SUBLEN) + (j * 4), true));
            if (j === 0){
                skill_array.pop(); //due to some skill table strangeness, we've gotta pop the first element, because it's doubled up. I suspect this was done 
            }
		}
	}
	drawSkillTable(skill_array, s_id)
}

function drawSkillTable(array, s_id){
	wipeScreen(); //wipes the screen for a new value
	var le = 0;
	var te = 30;
	var t_offset = 17;
	var box_check = document.getElementById("enemybox").checked;
	var skill_name;
	var team_name;
	if (box_check){ //this repetition feels a bit wrong but I think any way around it would wind up being longer
		skill_name = ENEMY_SKILL_NAME[s_id] + " (Enemy skill) [ID: " + s_id + " dec / " + s_id.toString(16) + " hex]";
	} else {
		skill_name = PLAYER_SKILL_NAME[s_id] + " (Player skill) [ID: " + s_id + " dec / " + s_id.toString(16) + " hex]";
	}
	drawText(ar20, "start", le, te - 5, skill_name, false);
	var m_level = skill_array[0]; //we don't want to display values for inaccessible levels, so we need the max level before we start shifting data out of our array
	if (s_id == 330 || s_id == 331){ //these two skills are improperly handled by the game, so we need this manual override
		m_level = 10;
	}
	for (var i = 0; i < 2; i++){ //this handles the main headers
		for (var j = 0; j < 16; j++){
			var m_width = (screen.width / 16);
			var mle = le + (j * m_width);
			var mte = te + (i * 24);
			if (i === 0){
				drawRect(mle, mte, m_width, 23, true, "#EEEEEE");
				drawText(ar10, "center", mle + (m_width / 2), mte + t_offset, text_headers[j]);
			} else {
				drawRect(mle, mte, m_width, 23, false);
				drawText(ar10, "center", mle + (m_width / 2), mte + t_offset, getValueFromArray(array, false, true), true);
			}
		}
	}
	for (var i = 0; i < 13; i++){ //this handles subheaders
		for (var j = 0; j < T_LEVELS; j++){
			var m_width = (screen.width / (T_LEVELS));
			var mle = le + (j * m_width);
			var mte = te + 54 + (i * 24);
			var is_subheader = false;
			if (j <= m_level){ //don't draw values for levels beyond the max
				if (i === 0){
					if (j % 2 == 0){ //if top row and even number
						drawRect(mle, mte, m_width, 23, true, "#DDDDDD");
					} else { //top row and odd number
						drawRect(mle, mte, m_width, 23, true, "#EEEEEE");
					}
					if (j === 0){
						drawText(ar10, "center", mle + (m_width / 2), mte + t_offset, "Subheader");
					} else {
						drawText(ar10, "center", mle + (m_width / 2), mte + t_offset, "Level " + j);
					}
				} else {
					if (j === 0){
						is_subheader = true;
						drawSubheaderDumpText(array, i);
					} else {
						is_subheader = false;
					}
					if (j % 2 == 0){ //not top row but even
						drawRect(mle, mte, m_width, 23, true, "#EEEEEE");
					} else { //not top row, not even
						drawRect(mle, mte, m_width, 23, false);
					}
                    if (j === 0){ //render subheader values in hex
                        drawText(ar10, "center", mle + (m_width / 2), mte + t_offset, getValueFromArray(array, is_subheader, true), false);
                    } else {
                        drawText(ar10, "center", mle + (m_width / 2), mte + t_offset, getValueFromArray(array, is_subheader), false);
                    }
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

function getValueFromArray(array, is_subheader, displayHex){
	var val = array[0]
	array.shift();
	if (is_subheader == true){
		for (var k in subheader_obj){
			if (k == val){
				val = subheader_obj[val];
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
	var te = 400 + (i * 16);
	var le = 8;
	var val = array[0];
	drawText(ar10, "start", le, te, subheader_obj[val], false);
	drawText(ar10, "start", le + 180, te, val, false);
	drawText(ar10, "start", le + 220, te, val.toString(16));
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
	drawText(ar20, "left", 0, 22, error_m[id], true);
}
	
function debugText(text){
	var on_off = 1;
	if (on_off == 1){
		console.log(text);
	}
}
