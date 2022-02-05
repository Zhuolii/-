/*diapo 1 */
var slide_index1 = 1;  
displaySlides1_1(slide_index1);  
function nextSlide1_1(n) {  
    displaySlides1_1(slide_index1 += n);  
}  
function currentSlide1_1(n) {  
    displaySlides1_1(slide_index1 = n); 
    
    
}  
function displaySlides1_1(n) {  
    var i;  
    var slides = document.getElementsByClassName("slide1_1");  
      
    if (n > slides.length) { slide_index1 = 1 }  
    if (n < 1) { slide_index1 = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        
          
        slides[i].style.display = "none";
       
        
        
        
        
    }  
    slides[slide_index1 - 1].style.display = "block";


    var a;  
    var slidesb = document.getElementsByClassName("small_img_1");  
      
    if (n > slidesb.length) { slide_index1 = 1 }  
    if (n < 1) { slide_index1 = slides.length }  
    for (i = 0; i < slidesb.length; i++) {  
        
          
        slidesb[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb[slide_index1 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself1_1(){
    
   
    document.getElementById("display1_1").style.display = "block";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";

    document.getElementById("small_img_1_1").style.opacity = 1;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    slide_index1 = 1;

}
function displayself1_2(){
    
   
    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "block";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 1;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    slide_index1 = 2;
}
function displayself1_3(){
    
   
    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "block";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 1;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    slide_index1 = 3;

}
function displayself1_4(){
    
   
    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "block";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 1;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    slide_index1 = 4;

}
function displayself1_5(){
    
   
    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "block";
    document.getElementById("display1_6").style.display = "none";

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 1;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    slide_index1 = 5;

}
function displayself1_6(){
    
   
    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "block";

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 1;
    slide_index1 = 6;

}
/* onclick img*/  
/*diapo 1 */
/*diapo 2 */
var slide_index2 = 1;  
displaySlides2_1(slide_index2);  
function nextSlide2_1(n) {  
    displaySlides2_1(slide_index2 += n);  
}  
function currentSlide2_1(n) {  
    displaySlides2_1(slide_index2 = n); 
    
    
}  
function displaySlides2_1(n) {  
    var i;  
    var slides2 = document.getElementsByClassName("slide2_1");  
      
    if (n > slides2.length) { slide_index2 = 1 }  
    if (n < 1) { slide_index2 = slides2.length }  
    for (i = 0; i < slides2.length; i++) {  
        
          
        slides2[i].style.display = "none";
       
        
        
        
        
    }  
    slides2[slide_index2 - 1].style.display = "block";


    var a2;  
    var slidesb2 = document.getElementsByClassName("small_img_2");  
      
    if (n > slidesb2.length) { slide_index2 = 1 }  
    if (n < 1) { slide_index2 = slidesb2.length }  
    for (i = 0; i < slidesb2.length; i++) {  
        
          
        slidesb2[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb2[slide_index2 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself2_1(){
    
   
    document.getElementById("display2_1").style.display = "block";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";

    document.getElementById("small_img_2_1").style.opacity = 1;
    document.getElementById("small_img_2_2").style.opacity = 0.5;
    document.getElementById("small_img_2_3").style.opacity = 0.5;
    document.getElementById("small_img_2_4").style.opacity = 0.5;
    document.getElementById("small_img_2_5").style.opacity = 0.5;
    document.getElementById("small_img_2_6").style.opacity = 0.5;
    slide_index2 = 1;

}
function displayself2_2(){
    
   
    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "block";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";

    document.getElementById("small_img_2_1").style.opacity = 0.5;
    document.getElementById("small_img_2_2").style.opacity = 1;
    document.getElementById("small_img_2_3").style.opacity = 0.5;
    document.getElementById("small_img_2_4").style.opacity = 0.5;
    document.getElementById("small_img_2_5").style.opacity = 0.5;
    document.getElementById("small_img_2_6").style.opacity = 0.5;
    slide_index2 = 2;
}
function displayself2_3(){
    
   
    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "block";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";

    document.getElementById("small_img_2_1").style.opacity = 0.5;
    document.getElementById("small_img_2_2").style.opacity = 0.5;
    document.getElementById("small_img_2_3").style.opacity = 1;
    document.getElementById("small_img_2_4").style.opacity = 0.5;
    document.getElementById("small_img_2_5").style.opacity = 0.5;
    document.getElementById("small_img_2_6").style.opacity = 0.5;
    slide_index2 = 3;

}
function displayself2_4(){
    
   
    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "block";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";

    document.getElementById("small_img_2_1").style.opacity = 0.5;
    document.getElementById("small_img_2_2").style.opacity = 0.5;
    document.getElementById("small_img_2_3").style.opacity = 0.5;
    document.getElementById("small_img_2_4").style.opacity = 1;
    document.getElementById("small_img_2_5").style.opacity = 0.5;
    document.getElementById("small_img_2_6").style.opacity = 0.5;
    slide_index2 = 4;

}
function displayself2_5(){
    
   
    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "block";
    document.getElementById("display2_6").style.display = "none";

    document.getElementById("small_img_2_1").style.opacity = 0.5;
    document.getElementById("small_img_2_2").style.opacity = 0.5;
    document.getElementById("small_img_2_3").style.opacity = 0.5;
    document.getElementById("small_img_2_4").style.opacity = 0.5;
    document.getElementById("small_img_2_5").style.opacity = 1;
    document.getElementById("small_img_2_6").style.opacity = 0.5;
    slide_index2 = 5;

}
function displayself2_6(){
    
   
    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "block";

    document.getElementById("small_img_2_1").style.opacity =  0.5;
    document.getElementById("small_img_2_2").style.opacity = 0.5;
    document.getElementById("small_img_2_3").style.opacity = 0.5;
    document.getElementById("small_img_2_4").style.opacity = 0.5;
    document.getElementById("small_img_2_5").style.opacity = 0.5;
    document.getElementById("small_img_2_6").style.opacity =  1;
    slide_index2 = 6;

}
/* onclick img*/  
/*diapo 2 */
/*diapo 3 */
var slide_index3 = 1;  
displaySlides3_1(slide_index3);  
function nextSlide3_1(n) {  
    displaySlides3_1(slide_index3 += n);  
}  
function currentSlide3_1(n) {  
    displaySlides3_1(slide_index3 = n); 
    
    
}  
function displaySlides3_1(n) {  
    var i;  
    var slides3 = document.getElementsByClassName("slide3_1");  
      
    if (n > slides3.length) { slide_index3 = 1 }  
    if (n < 1) { slide_index3 = slides3.length }  
    for (i = 0; i < slides3.length; i++) {  
        
          
        slides3[i].style.display = "none";
       
        
        
        
        
    }  
    slides3[slide_index3 - 1].style.display = "block";


    var a3;  
    var slidesb3 = document.getElementsByClassName("small_img_3");  
      
    if (n > slidesb3.length) { slide_index3 = 1 }  
    if (n < 1) { slide_index3 = slidesb3.length }  
    for (i = 0; i < slidesb3.length; i++) {  
        
          
        slidesb3[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb3[slide_index3 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself3_1(){
    
   
    document.getElementById("display3_1").style.display = "block";
    document.getElementById("display3_2").style.display = "none";
    document.getElementById("display3_3").style.display = "none";
    document.getElementById("display3_4").style.display = "none";
    document.getElementById("display3_5").style.display = "none";
    document.getElementById("display3_6").style.display = "none";

    document.getElementById("small_img_3_1").style.opacity = 1;
    document.getElementById("small_img_3_2").style.opacity = 0.5;
    document.getElementById("small_img_3_3").style.opacity = 0.5;
    document.getElementById("small_img_3_4").style.opacity = 0.5;
    document.getElementById("small_img_3_5").style.opacity = 0.5;
    document.getElementById("small_img_3_6").style.opacity = 0.5;
    slide_index3 = 1;

}
function displayself3_2(){
    
   
    document.getElementById("display3_1").style.display = "none";
    document.getElementById("display3_2").style.display = "block";
    document.getElementById("display3_3").style.display = "none";
    document.getElementById("display3_4").style.display = "none";
    document.getElementById("display3_5").style.display = "none";
    document.getElementById("display3_6").style.display = "none";

    document.getElementById("small_img_3_1").style.opacity = 0.5;
    document.getElementById("small_img_3_2").style.opacity = 1;
    document.getElementById("small_img_3_3").style.opacity = 0.5;
    document.getElementById("small_img_3_4").style.opacity = 0.5;
    document.getElementById("small_img_3_5").style.opacity = 0.5;
    document.getElementById("small_img_3_6").style.opacity = 0.5;
    slide_index3 = 2;
}
function displayself3_3(){
    
   
    document.getElementById("display3_1").style.display = "none";
    document.getElementById("display3_2").style.display = "none";
    document.getElementById("display3_3").style.display = "block";
    document.getElementById("display3_4").style.display = "none";
    document.getElementById("display3_5").style.display = "none";
    document.getElementById("display3_6").style.display = "none";

    document.getElementById("small_img_3_1").style.opacity = 0.5;
    document.getElementById("small_img_3_2").style.opacity = 0.5;
    document.getElementById("small_img_3_3").style.opacity = 1;
    document.getElementById("small_img_3_4").style.opacity = 0.5;
    document.getElementById("small_img_3_5").style.opacity = 0.5;
    document.getElementById("small_img_3_6").style.opacity = 0.5;
    slide_index3 = 3;

}
function displayself3_4(){
    
   
    document.getElementById("display3_1").style.display = "none";
    document.getElementById("display3_2").style.display = "none";
    document.getElementById("display3_3").style.display = "none";
    document.getElementById("display3_4").style.display = "block";
    document.getElementById("display3_5").style.display = "none";
    document.getElementById("display3_6").style.display = "none";

    document.getElementById("small_img_3_1").style.opacity = 0.5;
    document.getElementById("small_img_3_2").style.opacity = 0.5;
    document.getElementById("small_img_3_3").style.opacity = 0.5;
    document.getElementById("small_img_3_4").style.opacity = 1;
    document.getElementById("small_img_3_5").style.opacity = 0.5;
    document.getElementById("small_img_3_6").style.opacity = 0.5;
    slide_index3 = 4;

}
function displayself3_5(){
    
   
    document.getElementById("display3_1").style.display = "none";
    document.getElementById("display3_2").style.display = "none";
    document.getElementById("display3_3").style.display = "none";
    document.getElementById("display3_4").style.display = "none";
    document.getElementById("display3_5").style.display = "block";
    document.getElementById("display3_6").style.display = "none";

    document.getElementById("small_img_3_1").style.opacity = 0.5;
    document.getElementById("small_img_3_2").style.opacity = 0.5;
    document.getElementById("small_img_3_3").style.opacity = 0.5;
    document.getElementById("small_img_3_4").style.opacity = 0.5;
    document.getElementById("small_img_3_5").style.opacity = 1;
    document.getElementById("small_img_3_6").style.opacity = 0.5;
    slide_index3 = 5;

}
function displayself3_6(){
    
   
    document.getElementById("display3_1").style.display = "none";
    document.getElementById("display3_2").style.display = "none";
    document.getElementById("display3_3").style.display = "none";
    document.getElementById("display3_4").style.display = "none";
    document.getElementById("display3_5").style.display = "none";
    document.getElementById("display3_6").style.display = "block";

    document.getElementById("small_img_3_1").style.opacity = 0.5;
    document.getElementById("small_img_3_2").style.opacity = 0.5;
    document.getElementById("small_img_3_3").style.opacity = 0.5;
    document.getElementById("small_img_3_4").style.opacity = 0.5;
    document.getElementById("small_img_3_5").style.opacity = 0.5;
    document.getElementById("small_img_3_6").style.opacity = 1;
    slide_index3 = 6;

}
/* onclick img*/  
/*diapo 3 */
/*diapo 4 */
var slide_index4 = 1;  
displaySlides4_1(slide_index4);  
function nextSlide4_1(n) {  
    displaySlides4_1(slide_index4 += n);  
}  
function currentSlide4_1(n) {  
    displaySlides4_1(slide_index4 = n); 
    
    
}  
function displaySlides4_1(n) {  
    var i;  
    var slides4 = document.getElementsByClassName("slide4_1");  
      
    if (n > slides4.length) { slide_index4 = 1 }  
    if (n < 1) { slide_index4 = slides4.length }  
    for (i = 0; i < slides4.length; i++) {  
        
          
        slides4[i].style.display = "none";
       
        
        
        
        
    }  
    slides4[slide_index4 - 1].style.display = "block";


    var a4;  
    var slidesb4 = document.getElementsByClassName("small_img_4");  
      
    if (n > slidesb4.length) { slide_index4 = 1 }  
    if (n < 1) { slide_index4 = slidesb4.length }  
    for (i = 0; i < slidesb4.length; i++) {  
        
          
        slidesb4[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb4[slide_index4 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself4_1(){
    
   
    document.getElementById("display4_1").style.display = "block";
    document.getElementById("display4_2").style.display = "none";
    document.getElementById("display4_3").style.display = "none";
    document.getElementById("display4_4").style.display = "none";
    document.getElementById("display4_5").style.display = "none";
    document.getElementById("display4_6").style.display = "none";

    document.getElementById("small_img_4_1").style.opacity = 1;
    document.getElementById("small_img_4_2").style.opacity = 0.5;
    document.getElementById("small_img_4_3").style.opacity = 0.5;
    document.getElementById("small_img_4_4").style.opacity = 0.5;
    document.getElementById("small_img_4_5").style.opacity = 0.5;
    document.getElementById("small_img_4_6").style.opacity = 0.5;
    slide_index4 = 1;

}
function displayself4_2(){
    
   
    document.getElementById("display4_1").style.display = "none";
    document.getElementById("display4_2").style.display = "block";
    document.getElementById("display4_3").style.display = "none";
    document.getElementById("display4_4").style.display = "none";
    document.getElementById("display4_5").style.display = "none";
    document.getElementById("display4_6").style.display = "none";

    document.getElementById("small_img_4_1").style.opacity = 0.5;
    document.getElementById("small_img_4_2").style.opacity = 1;
    document.getElementById("small_img_4_3").style.opacity = 0.5;
    document.getElementById("small_img_4_4").style.opacity = 0.5;
    document.getElementById("small_img_4_5").style.opacity = 0.5;
    document.getElementById("small_img_4_6").style.opacity = 0.5;
    slide_index4 = 2;
}
function displayself4_3(){
    
   
    document.getElementById("display4_1").style.display = "none";
    document.getElementById("display4_2").style.display = "none";
    document.getElementById("display4_3").style.display = "block";
    document.getElementById("display4_4").style.display = "none";
    document.getElementById("display4_5").style.display = "none";
    document.getElementById("display4_6").style.display = "none";

    document.getElementById("small_img_4_1").style.opacity = 0.5;
    document.getElementById("small_img_4_2").style.opacity = 0.5;
    document.getElementById("small_img_4_3").style.opacity = 1;
    document.getElementById("small_img_4_4").style.opacity = 0.5;
    document.getElementById("small_img_4_5").style.opacity = 0.5;
    document.getElementById("small_img_4_6").style.opacity = 0.5;
    slide_index4 = 3;

}
function displayself4_4(){
    
   
    document.getElementById("display4_1").style.display = "none";
    document.getElementById("display4_2").style.display = "none";
    document.getElementById("display4_3").style.display = "none";
    document.getElementById("display4_4").style.display = "block";
    document.getElementById("display4_5").style.display = "none";
    document.getElementById("display4_6").style.display = "none";

    document.getElementById("small_img_4_1").style.opacity = 0.5;
    document.getElementById("small_img_4_2").style.opacity = 0.5;
    document.getElementById("small_img_4_3").style.opacity = 0.5;
    document.getElementById("small_img_4_4").style.opacity = 1;
    document.getElementById("small_img_4_5").style.opacity = 0.5;
    document.getElementById("small_img_4_6").style.opacity = 0.5;
    slide_index4 = 4;

}
function displayself4_5(){
    
   
    document.getElementById("display4_1").style.display = "none";
    document.getElementById("display4_2").style.display = "none";
    document.getElementById("display4_3").style.display = "none";
    document.getElementById("display4_4").style.display = "none";
    document.getElementById("display4_5").style.display = "block";
    document.getElementById("display4_6").style.display = "none";

    document.getElementById("small_img_4_1").style.opacity = 0.5;
    document.getElementById("small_img_4_2").style.opacity = 0.5;
    document.getElementById("small_img_4_3").style.opacity = 0.5;
    document.getElementById("small_img_4_4").style.opacity = 0.5;
    document.getElementById("small_img_4_5").style.opacity = 1;
    document.getElementById("small_img_4_6").style.opacity = 0.5;
    slide_index4 = 5;

}
function displayself4_6(){
    
   
    document.getElementById("display4_1").style.display = "none";
    document.getElementById("display4_2").style.display = "none";
    document.getElementById("display4_3").style.display = "none";
    document.getElementById("display4_4").style.display = "none";
    document.getElementById("display4_5").style.display = "none";
    document.getElementById("display4_6").style.display = "block";

    document.getElementById("small_img_4_1").style.opacity = 0.5;
    document.getElementById("small_img_4_2").style.opacity = 0.5;
    document.getElementById("small_img_4_3").style.opacity = 0.5;
    document.getElementById("small_img_4_4").style.opacity = 0.5;
    document.getElementById("small_img_4_5").style.opacity = 0.5;
    document.getElementById("small_img_4_6").style.opacity = 1;
    slide_index4 = 6;

}
/* onclick img*/  
/*diapo 4 */
/*separation *//*separation *//*separation *//*separation *//*separation *//*separation */
/*diapo 5 */
var slide_index5 = 1;  
displaySlides5_1(slide_index5);  
function nextSlide5_1(n) {  
    displaySlides5_1(slide_index5 += n);  
}  
function currentSlide5_1(n) {  
    displaySlides5_1(slide_index5 = n); 
    
    
}  
function displaySlides5_1(n) {  
    var i;  
    var slides = document.getElementsByClassName("slide5_1");  
      
    if (n > slides.length) { slide_index5 = 1 }  
    if (n < 1) { slide_index5 = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        
          
        slides[i].style.display = "none";
       
        
        
        
        
    }  
    slides[slide_index5 - 1].style.display = "block";


    var a;  
    var slidesb = document.getElementsByClassName("small_img_5");  
      
    if (n > slidesb.length) { slide_index5 = 1 }  
    if (n < 1) { slide_index5 = slides.length }  
    for (i = 0; i < slidesb.length; i++) {  
        
          
        slidesb[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb[slide_index5 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself5_1(){
    
   
    document.getElementById("display5_1").style.display = "block";
    document.getElementById("display5_2").style.display = "none";
    document.getElementById("display5_3").style.display = "none";
    document.getElementById("display5_4").style.display = "none";
    document.getElementById("display5_5").style.display = "none";
    document.getElementById("display5_6").style.display = "none";

    document.getElementById("small_img_5_1").style.opacity = 1;
    document.getElementById("small_img_5_2").style.opacity = 0.5;
    document.getElementById("small_img_5_3").style.opacity = 0.5;
    document.getElementById("small_img_5_4").style.opacity = 0.5;
    document.getElementById("small_img_5_5").style.opacity = 0.5;
    document.getElementById("small_img_5_6").style.opacity = 0.5;
    slide_index5 = 1;

}
function displayself5_2(){
    
   
    document.getElementById("display5_1").style.display = "none";
    document.getElementById("display5_2").style.display = "block";
    document.getElementById("display5_3").style.display = "none";
    document.getElementById("display5_4").style.display = "none";
    document.getElementById("display5_5").style.display = "none";
    document.getElementById("display5_6").style.display = "none";

    document.getElementById("small_img_5_1").style.opacity = 0.5;
    document.getElementById("small_img_5_2").style.opacity = 1;
    document.getElementById("small_img_5_3").style.opacity = 0.5;
    document.getElementById("small_img_5_4").style.opacity = 0.5;
    document.getElementById("small_img_5_5").style.opacity = 0.5;
    document.getElementById("small_img_5_6").style.opacity = 0.5;
    slide_index1 = 2;
}
function displayself5_3(){
    
   
    document.getElementById("display5_1").style.display = "none";
    document.getElementById("display5_2").style.display = "none";
    document.getElementById("display5_3").style.display = "block";
    document.getElementById("display5_4").style.display = "none";
    document.getElementById("display5_5").style.display = "none";
    document.getElementById("display5_6").style.display = "none";

    document.getElementById("small_img_5_1").style.opacity = 0.5;
    document.getElementById("small_img_5_2").style.opacity = 0.5;
    document.getElementById("small_img_5_3").style.opacity = 1;
    document.getElementById("small_img_5_4").style.opacity = 0.5;
    document.getElementById("small_img_5_5").style.opacity = 0.5;
    document.getElementById("small_img_5_6").style.opacity = 0.5;
    slide_index5 = 3;

}
function displayself5_4(){
    
   
    document.getElementById("display5_1").style.display = "none";
    document.getElementById("display5_2").style.display = "none";
    document.getElementById("display5_3").style.display = "none";
    document.getElementById("display5_4").style.display = "block";
    document.getElementById("display5_5").style.display = "none";
    document.getElementById("display5_6").style.display = "none";

    document.getElementById("small_img_5_1").style.opacity = 0.5;
    document.getElementById("small_img_5_2").style.opacity = 0.5;
    document.getElementById("small_img_5_3").style.opacity = 0.5;
    document.getElementById("small_img_5_4").style.opacity = 1;
    document.getElementById("small_img_5_5").style.opacity = 0.5;
    document.getElementById("small_img_5_6").style.opacity = 0.5;
    slide_index5 = 4;

}
function displayself5_5(){
    
   
    document.getElementById("display5_1").style.display = "none";
    document.getElementById("display5_2").style.display = "none";
    document.getElementById("display5_3").style.display = "none";
    document.getElementById("display5_4").style.display = "none";
    document.getElementById("display5_5").style.display = "block";
    document.getElementById("display5_6").style.display = "none";

    document.getElementById("small_img_5_1").style.opacity = 0.5;
    document.getElementById("small_img_5_2").style.opacity = 0.5;
    document.getElementById("small_img_5_3").style.opacity = 0.5;
    document.getElementById("small_img_5_4").style.opacity = 0.5;
    document.getElementById("small_img_5_5").style.opacity = 1;
    document.getElementById("small_img_5_6").style.opacity = 0.5;
    slide_index5 = 5;

}
function displayself5_6(){
    
   
    document.getElementById("display5_1").style.display = "none";
    document.getElementById("display5_2").style.display = "none";
    document.getElementById("display5_3").style.display = "none";
    document.getElementById("display5_4").style.display = "none";
    document.getElementById("display5_5").style.display = "none";
    document.getElementById("display5_6").style.display = "block";

    document.getElementById("small_img_5_1").style.opacity = 0.5;
    document.getElementById("small_img_5_2").style.opacity = 0.5;
    document.getElementById("small_img_5_3").style.opacity = 0.5;
    document.getElementById("small_img_5_4").style.opacity = 0.5;
    document.getElementById("small_img_5_5").style.opacity = 0.5;
    document.getElementById("small_img_5_6").style.opacity = 1;
    slide_index5 = 6;

}
/* onclick img*/  
/*diapo 5 */
/*diapo 6 */
var slide_index6 = 1;  
displaySlides6_1(slide_index6);  
function nextSlide6_1(n) {  
    displaySlides6_1(slide_index6 += n);  
}  
function currentSlide6_1(n) {  
    displaySlides6_1(slide_index6 = n); 
    
    
}  
function displaySlides6_1(n) {  
    var i;  
    var slides6 = document.getElementsByClassName("slide6_1");  
      
    if (n > slides6.length) { slide_index6 = 1 }  
    if (n < 1) { slide_index6 = slides6.length }  
    for (i = 0; i < slides6.length; i++) {  
        
          
        slides6[i].style.display = "none";
       
        
        
        
        
    }  
    slides6[slide_index6 - 1].style.display = "block";


    var a6;  
    var slidesb6 = document.getElementsByClassName("small_img_6");  
      
    if (n > slidesb6.length) { slide_index6 = 1 }  
    if (n < 1) { slide_index6 = slidesb6.length }  
    for (i = 0; i < slidesb6.length; i++) {  
        
          
        slidesb6[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb6[slide_index6 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself6_1(){
    
   
    document.getElementById("display6_1").style.display = "block";
    document.getElementById("display6_2").style.display = "none";
    document.getElementById("display6_3").style.display = "none";
    document.getElementById("display6_4").style.display = "none";
    document.getElementById("display6_5").style.display = "none";
    document.getElementById("display6_6").style.display = "none";

    document.getElementById("small_img_6_1").style.opacity = 1;
    document.getElementById("small_img_6_2").style.opacity = 0.5;
    document.getElementById("small_img_6_3").style.opacity = 0.5;
    document.getElementById("small_img_6_4").style.opacity = 0.5;
    document.getElementById("small_img_6_5").style.opacity = 0.5;
    document.getElementById("small_img_6_6").style.opacity = 0.5;
    slide_index6 = 1;

}
function displayself6_2(){
    
   
    document.getElementById("display6_1").style.display = "none";
    document.getElementById("display6_2").style.display = "block";
    document.getElementById("display6_3").style.display = "none";
    document.getElementById("display6_4").style.display = "none";
    document.getElementById("display6_5").style.display = "none";
    document.getElementById("display6_6").style.display = "none";

    document.getElementById("small_img_6_1").style.opacity = 0.5;
    document.getElementById("small_img_6_2").style.opacity = 1;
    document.getElementById("small_img_6_3").style.opacity = 0.5;
    document.getElementById("small_img_6_4").style.opacity = 0.5;
    document.getElementById("small_img_6_5").style.opacity = 0.5;
    document.getElementById("small_img_6_6").style.opacity = 0.5;
    slide_index6 = 2;
}
function displayself6_3(){
    
   
    document.getElementById("display6_1").style.display = "none";
    document.getElementById("display6_2").style.display = "none";
    document.getElementById("display6_3").style.display = "block";
    document.getElementById("display6_4").style.display = "none";
    document.getElementById("display6_5").style.display = "none";
    document.getElementById("display6_6").style.display = "none";

    document.getElementById("small_img_6_1").style.opacity = 0.5;
    document.getElementById("small_img_6_2").style.opacity = 0.5;
    document.getElementById("small_img_6_3").style.opacity = 1;
    document.getElementById("small_img_6_4").style.opacity = 0.5;
    document.getElementById("small_img_6_5").style.opacity = 0.5;
    document.getElementById("small_img_6_6").style.opacity = 0.5;
    slide_index6 = 3;

}
function displayself6_4(){
    
   
    document.getElementById("display6_1").style.display = "none";
    document.getElementById("display6_2").style.display = "none";
    document.getElementById("display6_3").style.display = "none";
    document.getElementById("display6_4").style.display = "block";
    document.getElementById("display6_5").style.display = "none";
    document.getElementById("display6_6").style.display = "none";

    document.getElementById("small_img_6_1").style.opacity =0.5;
    document.getElementById("small_img_6_2").style.opacity = 0.5;
    document.getElementById("small_img_6_3").style.opacity = 0.5;
    document.getElementById("small_img_6_4").style.opacity =  1;
    document.getElementById("small_img_6_5").style.opacity = 0.5;
    document.getElementById("small_img_6_6").style.opacity = 0.5;
    slide_index6 = 4;

}
function displayself6_5(){
    
   
    document.getElementById("display6_1").style.display = "none";
    document.getElementById("display6_2").style.display = "none";
    document.getElementById("display6_3").style.display = "none";
    document.getElementById("display6_4").style.display = "none";
    document.getElementById("display6_5").style.display = "block";
    document.getElementById("display6_6").style.display = "none";

    document.getElementById("small_img_6_1").style.opacity = 0.5;
    document.getElementById("small_img_6_2").style.opacity = 0.5;
    document.getElementById("small_img_6_3").style.opacity = 0.5;
    document.getElementById("small_img_6_4").style.opacity = 0.5;
    document.getElementById("small_img_6_5").style.opacity = 1;
    document.getElementById("small_img_6_6").style.opacity = 0.5;
    slide_index6 = 5;

}
function displayself6_6(){
    
   
    document.getElementById("display6_1").style.display = "none";
    document.getElementById("display6_2").style.display = "none";
    document.getElementById("display6_3").style.display = "none";
    document.getElementById("display6_4").style.display = "none";
    document.getElementById("display6_5").style.display = "none";
    document.getElementById("display6_6").style.display = "block";

    document.getElementById("small_img_6_1").style.opacity =0.5;
    document.getElementById("small_img_6_2").style.opacity = 0.5;
    document.getElementById("small_img_6_3").style.opacity = 0.5;
    document.getElementById("small_img_6_4").style.opacity = 0.5;
    document.getElementById("small_img_6_5").style.opacity = 0.5;
    document.getElementById("small_img_6_6").style.opacity =  1;
    slide_index6 = 6;

}
/* onclick img*/  
/*diapo 6 */
/*diapo 7 */
var slide_index7 = 1;  
displaySlides7_1(slide_index7);  
function nextSlide7_1(n) {  
    displaySlides7_1(slide_index7 += n);  
}  
function currentSlide7_1(n) {  
    displaySlides7_1(slide_index7 = n); 
    
    
}  
function displaySlides7_1(n) {  
    var i;  
    var slides7 = document.getElementsByClassName("slide7_1");  
      
    if (n > slides7.length) { slide_index7 = 1 }  
    if (n < 1) { slide_index7 = slides7.length }  
    for (i = 0; i < slides7.length; i++) {  
        
          
        slides7[i].style.display = "none";
       
        
        
        
        
    }  
    slides7[slide_index7 - 1].style.display = "block";


    var a7;  
    var slidesb7 = document.getElementsByClassName("small_img_7");  
      
    if (n > slidesb7.length) { slide_index7 = 1 }  
    if (n < 1) { slide_index7 = slidesb7.length }  
    for (i = 0; i < slidesb7.length; i++) {  
        
          
        slidesb7[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb7[slide_index7 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself7_1(){
    
   
    document.getElementById("display7_1").style.display = "block";
    document.getElementById("display7_2").style.display = "none";
    document.getElementById("display7_3").style.display = "none";
    document.getElementById("display7_4").style.display = "none";
    document.getElementById("display7_5").style.display = "none";
    document.getElementById("display7_6").style.display = "none";

    document.getElementById("small_img_7_1").style.opacity = 1;
    document.getElementById("small_img_7_2").style.opacity = 0.5;
    document.getElementById("small_img_7_3").style.opacity = 0.5;
    document.getElementById("small_img_7_4").style.opacity = 0.5;
    document.getElementById("small_img_7_5").style.opacity = 0.5;
    document.getElementById("small_img_7_6").style.opacity = 0.5;
    slide_index7 = 1;

}
function displayself7_2(){
    
   
    document.getElementById("display7_1").style.display = "none";
    document.getElementById("display7_2").style.display = "block";
    document.getElementById("display7_3").style.display = "none";
    document.getElementById("display7_4").style.display = "none";
    document.getElementById("display7_5").style.display = "none";
    document.getElementById("display7_6").style.display = "none";

    document.getElementById("small_img_7_1").style.opacity = 0.5;
    document.getElementById("small_img_7_2").style.opacity = 1;
    document.getElementById("small_img_7_3").style.opacity = 0.5;
    document.getElementById("small_img_7_4").style.opacity = 0.5;
    document.getElementById("small_img_7_5").style.opacity = 0.5;
    document.getElementById("small_img_7_6").style.opacity = 0.5;
    slide_index7 = 2;
}
function displayself7_3(){
    
   
    document.getElementById("display7_1").style.display = "none";
    document.getElementById("display7_2").style.display = "none";
    document.getElementById("display7_3").style.display = "block";
    document.getElementById("display7_4").style.display = "none";
    document.getElementById("display7_5").style.display = "none";
    document.getElementById("display7_6").style.display = "none";

    document.getElementById("small_img_7_1").style.opacity = 0.5;
    document.getElementById("small_img_7_2").style.opacity = 0.5;
    document.getElementById("small_img_7_3").style.opacity = 1;
    document.getElementById("small_img_7_4").style.opacity = 0.5;
    document.getElementById("small_img_7_5").style.opacity = 0.5;
    document.getElementById("small_img_7_6").style.opacity = 0.5;
    slide_index7 = 3;

}
function displayself7_4(){
    
   
    document.getElementById("display7_1").style.display = "none";
    document.getElementById("display7_2").style.display = "none";
    document.getElementById("display7_3").style.display = "none";
    document.getElementById("display7_4").style.display = "block";
    document.getElementById("display7_5").style.display = "none";
    document.getElementById("display7_6").style.display = "none";

    document.getElementById("small_img_7_1").style.opacity = 0.5;
    document.getElementById("small_img_7_2").style.opacity = 0.5;
    document.getElementById("small_img_7_3").style.opacity = 0.5;
    document.getElementById("small_img_7_4").style.opacity = 1;
    document.getElementById("small_img_7_5").style.opacity = 0.5;
    document.getElementById("small_img_7_6").style.opacity = 0.5;
    slide_index7 = 4;

}
function displayself7_5(){
    
   
    document.getElementById("display7_1").style.display = "none";
    document.getElementById("display7_2").style.display = "none";
    document.getElementById("display7_3").style.display = "none";
    document.getElementById("display7_4").style.display = "none";
    document.getElementById("display7_5").style.display = "block";
    document.getElementById("display7_6").style.display = "none";

    document.getElementById("small_img_7_1").style.opacity = 0.5;
    document.getElementById("small_img_7_2").style.opacity = 0.5;
    document.getElementById("small_img_7_3").style.opacity = 0.5;
    document.getElementById("small_img_7_4").style.opacity = 0.5;
    document.getElementById("small_img_7_5").style.opacity = 1;
    document.getElementById("small_img_7_6").style.opacity = 0.5;
    slide_index7 = 5;

}
function displayself7_6(){
    
   
    document.getElementById("display7_1").style.display = "none";
    document.getElementById("display7_2").style.display = "none";
    document.getElementById("display7_3").style.display = "none";
    document.getElementById("display7_4").style.display = "none";
    document.getElementById("display7_5").style.display = "none";
    document.getElementById("display7_6").style.display = "block";

    document.getElementById("small_img_7_1").style.opacity = 0.5;
    document.getElementById("small_img_7_2").style.opacity = 0.5;
    document.getElementById("small_img_7_3").style.opacity = 0.5;
    document.getElementById("small_img_7_4").style.opacity = 0.5;
    document.getElementById("small_img_7_5").style.opacity = 0.5;
    document.getElementById("small_img_7_6").style.opacity = 1;
    slide_index7 = 6;

}
/* onclick img*/  
/*diapo 7 */
/*diapo 8 */
var slide_index8 = 1;  
displaySlides8_1(slide_index8);  
function nextSlide8_1(n) {  
    displaySlides8_1(slide_index8 += n);  
}  
function currentSlide8_1(n) {  
    displaySlides8_1(slide_index8 = n); 
    
    
}  
function displaySlides8_1(n) {  
    var i;  
    var slides8 = document.getElementsByClassName("slide8_1");  
      
    if (n > slides8.length) { slide_index8 = 1 }  
    if (n < 1) { slide_index8 = slides8.length }  
    for (i = 0; i < slides8.length; i++) {  
        
          
        slides8[i].style.display = "none";
       
        
        
        
        
    }  
    slides8[slide_index8 - 1].style.display = "block";


    var a8;  
    var slidesb8 = document.getElementsByClassName("small_img_8");  
      
    if (n > slidesb8.length) { slide_index8 = 1 }  
    if (n < 1) { slide_index8 = slidesb8.length }  
    for (i = 0; i < slidesb8.length; i++) {  
        
          
        slidesb8[i].style.opacity = 0.5;
       
        
        
        
        
    }  
    
    slidesb8[slide_index8 - 1].style.opacity = 1;
    

   
    
}
/* onclick img*/

    
function displayself8_1(){
    
   
    document.getElementById("display8_1").style.display = "block";
    document.getElementById("display8_2").style.display = "none";
    document.getElementById("display8_3").style.display = "none";
    document.getElementById("display8_4").style.display = "none";
    document.getElementById("display8_5").style.display = "none";
    document.getElementById("display8_6").style.display = "none";

    document.getElementById("small_img_8_1").style.opacity = 1;
    document.getElementById("small_img_8_2").style.opacity = 0.5;
    document.getElementById("small_img_8_3").style.opacity = 0.5;
    document.getElementById("small_img_8_4").style.opacity = 0.5;
    document.getElementById("small_img_8_5").style.opacity = 0.5;
    document.getElementById("small_img_8_6").style.opacity = 0.5;
    slide_index8 = 1;

}
function displayself8_2(){
    
   
    document.getElementById("display8_1").style.display = "none";
    document.getElementById("display8_2").style.display = "block";
    document.getElementById("display8_3").style.display = "none";
    document.getElementById("display8_4").style.display = "none";
    document.getElementById("display8_5").style.display = "none";
    document.getElementById("display8_6").style.display = "none";

    document.getElementById("small_img_8_1").style.opacity = 0.5;
    document.getElementById("small_img_8_2").style.opacity = 1;
    document.getElementById("small_img_8_3").style.opacity = 0.5;
    document.getElementById("small_img_8_4").style.opacity = 0.5;
    document.getElementById("small_img_8_5").style.opacity = 0.5;
    document.getElementById("small_img_8_6").style.opacity = 0.5;
    slide_index8 = 2;
}
function displayself8_3(){
    
   
    document.getElementById("display8_1").style.display = "none";
    document.getElementById("display8_2").style.display = "none";
    document.getElementById("display8_3").style.display = "block";
    document.getElementById("display8_4").style.display = "none";
    document.getElementById("display8_5").style.display = "none";
    document.getElementById("display8_6").style.display = "none";

    document.getElementById("small_img_8_1").style.opacity = 0.5;
    document.getElementById("small_img_8_2").style.opacity = 0.5;
    document.getElementById("small_img_8_3").style.opacity = 1;
    document.getElementById("small_img_8_4").style.opacity = 0.5;
    document.getElementById("small_img_8_5").style.opacity = 0.5;
    document.getElementById("small_img_8_6").style.opacity = 0.5;
    slide_index8 = 3;

}
function displayself8_4(){
    
   
    document.getElementById("display8_1").style.display ="none";
    document.getElementById("display8_2").style.display = "none";
    document.getElementById("display8_3").style.display = "none";
    document.getElementById("display8_4").style.display =  "block";
    document.getElementById("display8_5").style.display = "none";
    document.getElementById("display8_6").style.display = "none";

    document.getElementById("small_img_8_1").style.opacity = 0.5;
    document.getElementById("small_img_8_2").style.opacity = 0.5;
    document.getElementById("small_img_8_3").style.opacity = 0.5;
    document.getElementById("small_img_8_4").style.opacity = 1;
    document.getElementById("small_img_8_5").style.opacity = 0.5;
    document.getElementById("small_img_8_6").style.opacity = 0.5;
    slide_index8 = 4;

}
function displayself8_5(){
    
   
    document.getElementById("display8_1").style.display = "none";
    document.getElementById("display8_2").style.display = "none";
    document.getElementById("display8_3").style.display = "none";
    document.getElementById("display8_4").style.display = "none";
    document.getElementById("display8_5").style.display = "block";
    document.getElementById("display8_6").style.display = "none";

    document.getElementById("small_img_8_1").style.opacity = 0.5;
    document.getElementById("small_img_8_2").style.opacity = 0.5;
    document.getElementById("small_img_8_3").style.opacity = 0.5;
    document.getElementById("small_img_8_4").style.opacity = 0.5;
    document.getElementById("small_img_8_5").style.opacity = 1;
    document.getElementById("small_img_8_6").style.opacity = 0.5;
    slide_index8 = 5;

}
function displayself8_6(){
    
   
    document.getElementById("display8_1").style.display = "none";
    document.getElementById("display8_2").style.display = "none";
    document.getElementById("display8_3").style.display = "none";
    document.getElementById("display8_4").style.display = "none";
    document.getElementById("display8_5").style.display = "none";
    document.getElementById("display8_6").style.display = "block";

    document.getElementById("small_img_8_1").style.opacity = 0.5;
    document.getElementById("small_img_8_2").style.opacity = 0.5;
    document.getElementById("small_img_8_3").style.opacity = 0.5;
    document.getElementById("small_img_8_4").style.opacity = 0.5;
    document.getElementById("small_img_8_5").style.opacity = 0.5;
    document.getElementById("small_img_8_6").style.opacity = 1;
    slide_index8 = 6;

}
/* onclick img*/  
/*diapo 8 */