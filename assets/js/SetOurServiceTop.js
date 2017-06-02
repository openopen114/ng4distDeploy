


// SetOurServiceTop(); 
window.addEventListener("resize", SetOurServiceTop); 









/* function Area*/
function SetOurServiceTop(){
	// get Hero Img Hight : HeroBGImg_Height
	console.log("SetOurServiceTop Works");
	var Obj_HeroBGImg = document.getElementById('HeroBGImg');  
	var HeroBGImg_Height = Obj_HeroBGImg.clientHeight; 
	console.log("HeroBGImg_Height :"+HeroBGImg_Height);

	//get phone number chip offset Top
	var Obj_chip = document.getElementById('chip');
	var chip_offsetTop = Obj_chip.offsetTop;


	//calc diff
	var diffTop = HeroBGImg_Height - chip_offsetTop - 38; 

	//set marginTop
	document.getElementById("ourServicesArea").style.marginTop = diffTop+"px";

}  	


 
