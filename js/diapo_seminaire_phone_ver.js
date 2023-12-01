slide_index3 = 1;
function nextSlide3_1(n) {
    displaySlides3_1(slide_index3 += n);
}
function currentSlide3_1(n) {
    displaySlides3_1(slide_index3 = n);


}
function displaySlides3_1(n) {
    var i;
    var slides = document.getElementsByClassName("slide3_1");

    if (n > slides.length) { slide_index3 = 1 }
    if (n < 1) { slide_index3 = slides.length }
    for (i = 0; i < slides.length; i++) {

        //CODE to style

        slides[i].style.opacity = "0";
        //CODE to style




    }
    //CODE to style

    slides[slide_index3 - 1].style.opacity = "1";
    //CODE to style



    var slidesb = document.getElementsByClassName("small_img_2");

    if (n > slidesb.length) { slide_index3 = 1 }
    if (n < 1) { slide_index3 = slides.length }
    for (i = 0; i < slidesb.length; i++) {


        slidesb[i].style.opacity = 0.5;





    }

    slidesb[slide_index3 - 1].style.opacity = 1;







}

function displayself2_1() {


    document.getElementById("display2_1").style.display = "block";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
   

    document.getElementById("display2_1").style.opacity = "1";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "0";
   

    document.getElementById("small_img_2_1").style.opacity = "1";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
   
    slide_index2 = 1;

}
function displayself2_2() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "block";
    document.getElementById("display2_3").style.display = "none";
   

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = " 1";
    document.getElementById("display2_3").style.opacity = "0";
  

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = " 1";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    
    slide_index2 = 2;
}
function displayself2_3() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "block";
  

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "1";
   

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "1";
  
    slide_index2 = 3;

}
function startTimer2() {

    timer = setInterval(function () {
        nextSlide3_1(1)
    }, 4000);
}