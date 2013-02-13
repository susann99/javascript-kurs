//Inhalt
function getTageTitel(){
	var string = "Bitte einen Tag wählen";
	return string;
} 
function getTage(){
	var string = "";
	var tag;
	var Tage = jsObjInhalt.tage;
	for (var elem in Tage){
		string += " [<a href='#"+elem+"' onClick='setInhalt(this)'>"+Tage[elem].titel+"</a>] ";
	}
	return string;
}
function getTag(tag){
	var string = "";
	var Tag = jsObjInhalt.tage[tag].datei;
	for (var elem in Tag){
		string += "<p><b><a href='#"+tag+"#"+elem+"' onClick='setInhalt(this)'>"+Tag[elem].titel+"</a></b><br>"+Tag[elem].inhalt+"</p>";
	}
	return string;
}
function getTagTitle(tag){
	var string = jsObjInhalt.tage[tag].titel+": "+jsObjInhalt.tage[tag].metatitel;
	return string;
}
function getFenster(t,d){
	fenster = window.open ("","NeuesFenster","menubar=1,scrollbars=1,resizable=1,width=900,height=710");
	fenster.moveTo(300, 100);
	fenster.location.href = "quelle.html#"+t+"#"+d;
}
