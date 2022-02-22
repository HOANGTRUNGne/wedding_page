var i = 0; 			
var images = [];	
var time = 3000;	// thoi gian
	 
// danh sach hinh
images[0] = src="images/g1.jpg"; 
images[1] = src="images/g2.jpg";
images[2] = src="images/g3.jpg"; 
images[3] = src="images/g1.jpg";
images[4] = src="images/g2.jpg"; 
images[5] = src="images/g3.jpg";
images[6] = src="images/g1.jpg"; 
images[7] = src="images/g2.jpg";
images[8] = src="images/g3.jpg"; 
images[9] = src="images/g1.jpg";
images[10] = src="images/g2.jpg";
images[11] = src="images/g3.jpg";
images[12] = src="images/g1.jpg"; 
images[13] = src="images/g2.jpg";


// doi hinh
function doihinh(){
	document.hinh.src = images[i];

	
	if(i < images.length - 1){
	 
	  i++; 
	} else { 
		
		i = 0;
	}


	setTimeout("doihinh()", time);
}


window.onload=doihinh;
 
var nhanhinh = 0;
showSlides(nhanhinh);

function chuyenhinh(n) {
  showSlides(nhanhinh += n);
}

function showSlides(n) {
  var i;
  var slides = document.hinh.src = images[nhanhinh];
  ;
  if (n > slides.length) {nhanhinh = 1}    
  if (n < 1) {nhanhinh = slides.length}
  
 
  slides[nhanhinh-1].style.display = "block";  
 
}
