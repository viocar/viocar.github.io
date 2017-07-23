skill_id.onchange = function(){
	var s_id = parseInt(skill_id.value);
	var skillTable = "https://raw.githubusercontent.com/viocar/viocar.github.io/master/js/handleskillid.js";
	if (document.getElementById("enemybox").checked){
		skillTable ="https://raw.githubusercontent.com/viocar/viocar.github.io/master/js/handleskillid.js";
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