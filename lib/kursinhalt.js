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
 var width  = 780;
 var height = 710;
 var left   = (screen.width  - width)/2;
 var top    = (screen.height - height)/2;
 var params = 'width='+width+', height='+height;
 params += ', top='+top+', left='+left;
 params += ', directories=no';
 params += ', location=no';
 params += ', menubar=yes';
 params += ', resizable=no';
 params += ', scrollbars=no';
 params += ', status=no';
 params += ', toolbar=no';
 fenster=window.open('','meinfenster', params);
 fenster.location.href = "quelle.html#"+t+"#"+d;
 if (window.focus) {fenster.focus();}
 return false;
}
