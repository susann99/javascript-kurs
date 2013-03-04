//Galerie 
function getGalerien(){
	var string = "";
	var galerien = jsObj.galerien;
	for (var elem in galerien){
		string += "<a href='#"+elem+">"+galerien[elem].titel+"</a><br>";
	}
	return string;
}
function getGalerieTitel(galerie){
	var string = galerie.titel;
	return string;
}
function getGalerieThumb(galerie){
	var pfad = galerie.pfad+galerie.thumb;
	var bilder = galerie.bilder;
	var string = "";
	var para;
	var arrThumbs = new Array;
	for (var elem in bilder){
		string += "<img onClick = 'getBild(\""+elem+"\")' src='"+pfad+bilder[elem].datei+"'>";
	}
	return string;
}
function getBildTitel(bild){
	return  bild.titel+": "+bild.metatitel;
}
function getBild(BildId){
	getFadeIn();
	var galerie = jsObjGalerie.galerien[0];
	var bildinfo = galerie.bilder[BildId];
	var bildurl = galerie.pfad+galerie.original+bildinfo.datei;
	var bild = "<img src='"+bildurl+"'>";
	inhalt.innerHTML = "<div id='galerie'>"+bild+"</div>";
	titel.innerHTML = getBildTitel(bildinfo);
}
var interval;
var i = 0;
var opacity = 0;
function getFadeIn(){
		opacity = 0;
		clearInterval(interval);
		interval = null;
		interval = setInterval("getAnimation()",10); 
}
function getAnimation() {
	var box = document.getElementById("galerie");
	box.style.opacity = opacity;
	opacity += 0.01;
	if(opacity >=1){
		clearInterval(interval);
		interval = null;
	}
}

