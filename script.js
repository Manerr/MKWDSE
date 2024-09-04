let secondSection = document.querySelector("#second-main");

let alreadyseen = false



function dispSecond(e){
	
	let screenPercentage = ( window.scrollY - secondSection.offsetTop + window.innerHeight ) / secondSection.offsetHeight;


	if ( screenPercentage > 0 && alreadyseen == false){
		console.log("showing");
		alreadyseen = true;
		secondSection.style.animation = ".65s opac2";
		secondSection.style.opacity = "1";		
	}
	else if ( screenPercentage<=0){
		alreadyseen = false;
	secondSection.style.animation = "";
	}
}

window.onscroll = dispSecond;
window.onload = dispSecond; 