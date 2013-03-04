//Source
function getQuelltext() {
		var code = "<html>\n"+document.getElementsByTagName("html")[0].innerHTML+"\n</html>";
		document.getElementById("source").textContent=code;
		document.getElementById("btn").innerHTML="neu Laden";
		document.getElementById("btn").onclick = function() {
			location.reload();
		};
}
function setIFrame(){
	var url = window.document.URL.toString();
	var arrUrl = url.split("#");
	var t = arrUrl[1];
	var d = arrUrl[2];
	var tag = jsObjInhalt.tage[t];
	var datei = tag.datei[d].name;
	var dir = tag.dir;
	var iFrame = document.getElementById("source");
	iFrame.src = dir+""+datei;
}
