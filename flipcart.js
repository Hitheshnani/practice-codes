var i = 0; 
var images = [];	
var time = 3000;	
	 

images[0] = "carsouleimg1.jpg";
images[1] = "carsouleimg2.webp";
images[2] = "carsouleimg3.webp";
images[3] = "carsouleimg4.webp";
images[4] = "carsouleimg5.webp";

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;
const datetimeElement = document.getElementById("datetime");
    const currentDate = new Date();
    datetimeElement.innerHTML = currentDate.toLocaleString();