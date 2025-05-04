function f1(){
	document.getElementsByClassName("loading")[0].style.display = "flex";
	document.getElementsByClassName("title-link")[0].style.display = "none";
	document.getElementsByClassName("factors")[0].style.display = "none";
	document.getElementsByClassName("base")[0].style.display = "none";
	document.getElementsByClassName("title-link")[0].style.display = "none";
	document.getElementsByClassName("title-sayt")[0].style.display = "none";
	document.getElementsByClassName("factors")[0].style.display = "none";
	document.getElementsByClassName("slide-1")[0].style.background = "white";
	setTimeout(f3, 1000);
}
function f2(){
	document.getElementsByClassName("smoke-img")[0].style.display = "none";
	document.getElementsByClassName("base")[0].style.width = "26%";
	document.getElementsByClassName("car")[0].style.width = "100%"; 
}
setInterval(f2, 3500);
function f3(){
	document.getElementsByClassName("base")[0].style.display = "none";
	document.getElementsByClassName("loading")[0].style.display = "none";
	document.getElementsByClassName("title-link")[0].style.display = "flex";
	document.getElementsByClassName("big-way")[0].style.display = "flex";
	document.getElementsByClassName("buy-block")[0].style.display = "flex";
	document.getElementsByClassName("create")[0].style.display = "flex";
	document.getElementsByClassName("donate-base")[0].style.display = "none";
	document.getElementsByClassName("title-sayt")[0].style.display = "block";
	document.getElementsByClassName("factors")[0].style.display = "block";
	document.getElementsByClassName("factors-free")[0].style.display = "block";
	document.getElementsByClassName("slide-1")[0].style.background = "#0e0e0e";
}
function buy(){
	document.getElementsByClassName("buy-base")[0].style.display = "block";
	document.getElementsByClassName("factors")[0].style.display = "none";
	document.getElementsByClassName("factors-free")[0].style.display = "none";
	document.getElementsByClassName("big-way")[0].style.display = "none";
	document.getElementsByClassName("buy-block")[0].style.display = "none";
	document.getElementsByClassName("create")[0].style.display = "none";
	document.getElementsByClassName("donate-base")[0].style.display = "none";
	document.getElementsByClassName("base")[0].style.display = "none";
}
function home(){
	document.getElementsByClassName("buy-base")[0].style.display = "none";
	document.getElementsByClassName("factors")[0].style.display = "block";
	document.getElementsByClassName("factors-free")[0].style.display = "block";
	document.getElementsByClassName("big-way")[0].style.display = "flex";
	document.getElementsByClassName("buy-block")[0].style.display = "flex";
	document.getElementsByClassName("create")[0].style.display = "flex";
	document.getElementsByClassName("donate-base")[0].style.display = "none";
	document.getElementsByClassName("base")[0].style.display = "none";
}
function donate(){
	document.getElementsByClassName("buy-base")[0].style.display = "none";
	document.getElementsByClassName("factors")[0].style.display = "none";
	document.getElementsByClassName("factors-free")[0].style.display = "none";
	document.getElementsByClassName("big-way")[0].style.display = "none";
	document.getElementsByClassName("buy-block")[0].style.display = "none";
	document.getElementsByClassName("create")[0].style.display = "none";
	document.getElementsByClassName("donate-base")[0].style.display = "none";
	document.getElementsByClassName("base")[0].style.display = "none";
	document.getElementsByClassName("donate-base")[0].style.display = "block";
}
document.getElementById("txt_1").value = getSavedValue("txt_1");
document.getElementById("txt_2").value = getSavedValue("txt_2"); 
function saveValue(e){
	let id = e.id; 
	let val = e.value; 
	localStorage.setItem(id, val);
}
function getSavedValue  (v){
	if (!localStorage.getItem(v)) {
		return "";
	}
	return localStorage.getItem(v);
}