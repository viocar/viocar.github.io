skill_id.onchange = function(){
	var s_id = parseInt(skill_id.value);
	var skillTable = "https://github.com/viocar/viocar.github.io/blob/master/tbl/playerskilltable.tbl";
	if (document.getElementById("enemybox").checked){
		skillTable ="https://github.com/viocar/viocar.github.io/blob/master/tbl/enemyskilltable.tbl";
	}
	if (!isNaN(s_id)){
		var skillFileData = new XMLHttpRequest();
		skillFileData.open("GET", skillTable, true);
		skillFileData.responseType = "blob";
		debugText(skillTable);
		debugText(skillFileData.response);
		skillFileData.onload = function(oEvent){
			var sdBuffer = skillFileData.response;
			if (sdBuffer){
				drawSkillTable();
			} else {
				console.log("it's fucked");
			}
		}
	} else {
		console.log("it's nan buddy. better get you a number");
	}
}

function debugText(text){
	var onoff = 1;
	if (onoff == 1){
		console.log(text);
	}
}