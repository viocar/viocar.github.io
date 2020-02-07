const DATA_LENGTH = 376;
const T_LEVELS = 10; //total number of levels. this is hardcoded for now but can change from game to game
const SUBLEN = 4 + (T_LEVELS * 4); //length of a subheader entry, including the subheader itself
const tables = ["https://viocar.github.io/tbl/playerskilltable.tbl","https://viocar.github.io/tbl/enemyskilltable.tbl"];
const screen = document.getElementById("screen");
const ctx = screen.getContext("2d");
var FETCHES = 2;
var s_table = [];
var skill_file_data = [];
var merged_table = {};
var thing;

// for (i = 0; i < 2; i++){
    // skill_file_data[i] = new XMLHttpRequest();
    // skill_file_data[i].open("GET", tables[i], true);
    // skill_file_data[i].responseType = "arraybuffer";
    // skill_file_data[i].send(null);
    // skill_file_data[i].onload = function(n) {
        // return function(oEvent){
            // s_table[n] = skill_file_data[n].response;
            // FETCHES--;
            // if (!FETCHES){
                // Object.assign(merged_table, s_table[0], s_table[1]);
            // }
        // };
    // } (i);
// }

for (let i = 0; i < 2; i++){
    skill_file_data[i] = new XMLHttpRequest();
    skill_file_data[i].open("GET", tables[i], true);
    skill_file_data[i].responseType = "arraybuffer";
    skill_file_data[i].onload = function(oEvent){ //when we have the files, store them for later use
        console.log("here");
        s_table[i] = skill_file_data[i].response;
    }
    skill_file_data[i].send(null);
}

window.onkeyup = function(e){
	var key = e.keyCode; 
    var results = [[],[]];
    var res_count = 0;
    var LE = 10;
    var TE = 20;
	if (key == 13){ //run the code on enter
    	ctx.clearRect(0, 0, screen.width, screen.height);
        if (subh.value){
            sub_id = parseInt(subh.value);
            if (isNaN(sub_id)){
                console.log("not a number");
                // break;
            }
            for (i = 0; i < 2; i++){ //playerskilltable, enemyskilltable
                for (j = 0; j < s_table[i].byteLength / DATA_LENGTH; j++){ //number of entries in the table
                    var sv = new DataView(s_table[i], j * DATA_LENGTH); //a dataview for the skill
                    console.log(sv)
                    for (k = 0; k < 8; k++){
                        var sub = (sv.getInt32(24 + (k * SUBLEN), true));
                        if (sub == sub_id){
                            var x = LE + 50 * (Math.floor(res_count / 33));
                            var y = (TE * res_count % 660) + TE;
                            ctx.beginPath();
                            ctx.fillStyle = "#000000" //all text is hardcoded to be black for now
                            ctx.font = "10pt Arial";
                            ctx.textAlign = "start"
                            ctx.fillText(i + "_" + j.toString(16).toUpperCase(), x, y);
                            ctx.stroke();
                            res_count++;
                        }
                    }
                }
            }
        }
        else if (stype.value){
            type_id = parseInt(stype.value);
            if (isNaN(type_id)){
                console.log("not a number");
                // break;
            }
            for (i = 0; i < 2; i++){ //playerskilltable, enemyskilltable
                for (j = 0; j < s_table[i].byteLength / DATA_LENGTH; j++){ //number of entries in the table
                    var sv = new DataView(s_table[i], j * DATA_LENGTH); //a dataview for the skill
                    var s_type = (sv.getInt8(1))
                    if (s_type === type_id){
                        var x = LE + 50 * (Math.floor(res_count / 33));
                        var y = (TE * res_count % 660) + TE;
                        ctx.beginPath();
                        ctx.fillStyle = "#000000" //all text is hardcoded to be black for now
                        ctx.font = "10pt Arial";
                        ctx.textAlign = "start"
                        ctx.fillText(i + "_" + j.toString(16).toUpperCase(), x, y);
                        ctx.stroke();
                        res_count++;
                    }
                }
            }            
        }
    }
    thing = results;
}
