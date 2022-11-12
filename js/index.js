

/*diapo hebergement web
var slide_index1 = 1;  
displaySlides21(slide_index1);  
function nextSlide21(n) {  
  displaySlides21(slide_index1 += n);  
}  
function currentSlide21(n) {  
  displaySlides21(slide_index1 = n);  
}  
function displaySlides21(n) {  
  var i;  
  var slides = document.getElementsByClassName("showSlide21");  
  if (n > slides.length) { slide_index1 = 1 }  
  if (n < 1) { slide_index1 = slides.length }  
  for (i = 0; i < slides.length; i++) {  
      slides[i].style.display = "none";  
  }  
  slides[slide_index1 - 1].style.display = "block";  
}*/
/*diapo hebergement web*/

/*diapo hebergement phone
var slide_index1 = 1;  
displaySlides22(slide_index1);  
function nextSlide22(n) {  
    displaySlides22(slide_index1 += n);  
}  
function currentSlide22(n) {  
    displaySlides22(slide_index1 = n);  
}  
function displaySlides22(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide22");  
    if (n > slides.length) { slide_index1 = 1 }  
    if (n < 1) { slide_index1 = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index1 - 1].style.display = "block";  
}*/
/*diapo hebergement phone*/


/*diapo 1 */
var slide_index1 = 1;
var slide_index2 = 1;
var slide_index3 = 1;
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

        //CODE to style

        slides[i].style.opacity = "0";
        //CODE to style




    }
    //CODE to style

    slides[slide_index1 - 1].style.opacity = "1";
    //CODE to style


    var a;
    var slidesb = document.getElementsByClassName("small_img_1");

    if (n > slidesb.length) { slide_index1 = 1 }
    if (n < 1) { slide_index1 = slides.length }
    for (i = 0; i < slidesb.length; i++) {


        slidesb[i].style.opacity = 0.5;





    }

    slidesb[slide_index1 - 1].style.opacity = 1;







}

function nextSlide2_1(n) {
    displaySlides2_1(slide_index2 += n);
}
function currentSlide2_1(n) {
    displaySlides2_1(slide_index2 = n);


}
function displaySlides2_1(n) {
    var i;
    var slides = document.getElementsByClassName("slide2_1");

    if (n > slides.length) { slide_index2 = 1 }
    if (n < 1) { slide_index2 = slides.length }
    for (i = 0; i < slides.length; i++) {

        //CODE to style

        slides[i].style.opacity = 0;
        //CODE to style




    }
    //CODE to style

    slides[slide_index2 - 1].style.opacity = 1;
    //CODE to style


    var a;
    var slidesb = document.getElementsByClassName("small_img_2");

    if (n > slidesb.length) { slide_index2 = 1 }
    if (n < 1) { slide_index2 = slides.length }
    for (i = 0; i < slidesb.length; i++) {


        slidesb[i].style.opacity = 0.5;





    }

    slidesb[slide_index2 - 1].style.opacity = 1;







}

/* onclick img*/
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



function displayself1_1() {


    document.getElementById("display1_1").style.display = "block";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";
    document.getElementById("display1_7").style.display = "none";

    document.getElementById("display1_1").style.opacity = 1;
    document.getElementById("display1_2").style.opacity = 0;
    document.getElementById("display1_3").style.opacity = 0;
    document.getElementById("display1_4").style.opacity = 0;
    document.getElementById("display1_5").style.opacity = 0;
    document.getElementById("display1_6").style.opacity = 0;
    document.getElementById("display1_7").style.opacity = 0;

    document.getElementById("small_img_1_1").style.opacity = 1;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    document.getElementById("small_img_1_7").style.opacity = 0.5;
    slide_index1 = 1;

}
function displayself1_2() {


    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "block";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";
    document.getElementById("display1_7").style.display = "none";

    document.getElementById("display1_1").style.opacity = 0;
    document.getElementById("display1_2").style.opacity = 1;
    document.getElementById("display1_3").style.opacity = 0;
    document.getElementById("display1_4").style.opacity = 0;
    document.getElementById("display1_5").style.opacity = 0;
    document.getElementById("display1_6").style.opacity = 0;
    document.getElementById("display1_7").style.opacity = 0;

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 1;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    document.getElementById("small_img_1_7").style.opacity = 0.5;
    slide_index1 = 2;
}
function displayself1_3() {


    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "block";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";
    document.getElementById("display1_7").style.display = "none";

    document.getElementById("display1_1").style.opacity = 0;
    document.getElementById("display1_2").style.opacity = 0;
    document.getElementById("display1_3").style.opacity = 1;
    document.getElementById("display1_4").style.opacity = 0;
    document.getElementById("display1_5").style.opacity = 0;
    document.getElementById("display1_6").style.opacity = 0;
    document.getElementById("display1_7").style.opacity = 0;

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 1;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    document.getElementById("small_img_1_7").style.opacity = 0.5;
    slide_index1 = 3;

}
function displayself1_4() {


    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "block";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";
    document.getElementById("display1_7").style.display = "none";

    document.getElementById("display1_1").style.opacity = 0;
    document.getElementById("display1_2").style.opacity = 0;
    document.getElementById("display1_3").style.opacity = 0;
    document.getElementById("display1_4").style.opacity = 1;
    document.getElementById("display1_5").style.opacity = 0;
    document.getElementById("display1_6").style.opacity = 0;
    document.getElementById("display1_7").style.opacity = 0;

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 1;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    document.getElementById("small_img_1_7").style.opacity = 0.5;
    slide_index1 = 4;

}
function displayself1_5() {


    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "block";
    document.getElementById("display1_6").style.display = "none";
    document.getElementById("display1_7").style.display = "none";

    document.getElementById("display1_1").style.opacity = 0;
    document.getElementById("display1_2").style.opacity = 0;
    document.getElementById("display1_3").style.opacity = 0;
    document.getElementById("display1_4").style.opacity = 0;
    document.getElementById("display1_5").style.opacity = 1;
    document.getElementById("display1_6").style.opacity = 0;
    document.getElementById("display1_7").style.opacity = 0;

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 1;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    document.getElementById("small_img_1_7").style.opacity = 0.5;
    slide_index1 = 5;

}
function displayself1_6() {


    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "block";
    document.getElementById("display1_7").style.display = "none";

    document.getElementById("display1_1").style.opacity = 0;
    document.getElementById("display1_2").style.opacity = 0;
    document.getElementById("display1_3").style.opacity = 0;
    document.getElementById("display1_4").style.opacity = 0;
    document.getElementById("display1_5").style.opacity = 0;
    document.getElementById("display1_6").style.opacity = 1;
    document.getElementById("display1_7").style.opacity = 0;

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 1;
    document.getElementById("small_img_1_7").style.opacity = 0.5;
    slide_index1 = 6;

}
function displayself1_7() {


    document.getElementById("display1_1").style.display = "none";
    document.getElementById("display1_2").style.display = "none";
    document.getElementById("display1_3").style.display = "none";
    document.getElementById("display1_4").style.display = "none";
    document.getElementById("display1_5").style.display = "none";
    document.getElementById("display1_6").style.display = "none";
    document.getElementById("display1_7").style.display = "block";

    document.getElementById("display1_1").style.opacity = 0;
    document.getElementById("display1_2").style.opacity = 0;
    document.getElementById("display1_3").style.opacity = 0;
    document.getElementById("display1_4").style.opacity = 0;
    document.getElementById("display1_5").style.opacity = 0;
    document.getElementById("display1_6").style.opacity = 0;
    document.getElementById("display1_7").style.opacity = 1;

    document.getElementById("small_img_1_1").style.opacity = 0.5;
    document.getElementById("small_img_1_2").style.opacity = 0.5;
    document.getElementById("small_img_1_3").style.opacity = 0.5;
    document.getElementById("small_img_1_4").style.opacity = 0.5;
    document.getElementById("small_img_1_5").style.opacity = 0.5;
    document.getElementById("small_img_1_6").style.opacity = 0.5;
    document.getElementById("small_img_1_7").style.opacity = 1;
    slide_index1 = 7;

}
function displayself2_1() {


    document.getElementById("display2_1").style.display = "block";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";
    document.getElementById("display2_7").style.display = "none";

    document.getElementById("display2_1").style.opacity = "1";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "0";
    document.getElementById("display2_4").style.opacity = "0";
    document.getElementById("display2_5").style.opacity = "0";
    document.getElementById("display2_6").style.opacity = "0";
    document.getElementById("display2_7").style.opacity = "0";

    document.getElementById("small_img_2_1").style.opacity = "1";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    document.getElementById("small_img_2_4").style.opacity = "0.5";
    document.getElementById("small_img_2_5").style.opacity = "0.5";
    document.getElementById("small_img_2_6").style.opacity = "0.5";
    document.getElementById("small_img_2_7").style.opacity = "0.5";
    slide_index2 = 1;

}
function displayself2_2() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "block";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";
    document.getElementById("display2_7").style.display = "none";

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = " 1";
    document.getElementById("display2_3").style.opacity = "0";
    document.getElementById("display2_4").style.opacity = "0";
    document.getElementById("display2_5").style.opacity = "0";
    document.getElementById("display2_6").style.opacity = "0";
    document.getElementById("display2_7").style.opacity = "0";

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = " 1";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    document.getElementById("small_img_2_4").style.opacity = "0.5";
    document.getElementById("small_img_2_5").style.opacity = "0.5";
    document.getElementById("small_img_2_6").style.opacity = "0.5";
    document.getElementById("small_img_2_7").style.opacity = "0.5";
    slide_index2 = 2;
}
function displayself2_3() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "block";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";
    document.getElementById("display2_7").style.display = "none";

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "1";
    document.getElementById("display2_4").style.opacity = "0";
    document.getElementById("display2_5").style.opacity = "0";
    document.getElementById("display2_6").style.opacity = "0";
    document.getElementById("display2_7").style.opacity = "0";

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "1";
    document.getElementById("small_img_2_4").style.opacity = "0.5";
    document.getElementById("small_img_2_5").style.opacity = "0.5";
    document.getElementById("small_img_2_6").style.opacity = "0.5";
    document.getElementById("small_img_2_7").style.opacity = "0.5";
    slide_index2 = 3;

}
function displayself2_4() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "block";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";
    document.getElementById("display2_7").style.display = "none";

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "0";
    document.getElementById("display2_4").style.opacity = "1";
    document.getElementById("display2_5").style.opacity = "0";
    document.getElementById("display2_6").style.opacity = "0";
    document.getElementById("display2_7").style.opacity = "0";

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    document.getElementById("small_img_2_4").style.opacity = "1";
    document.getElementById("small_img_2_5").style.opacity = "0.5";
    document.getElementById("small_img_2_6").style.opacity = "0.5";
    document.getElementById("small_img_2_7").style.opacity = "0.5";
    slide_index2 = 4;

}
function displayself2_5() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "block";
    document.getElementById("display2_6").style.display = "none";
    document.getElementById("display2_7").style.display = "none";

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "0";
    document.getElementById("display2_4").style.opacity = "0";
    document.getElementById("display2_5").style.opacity = "1";
    document.getElementById("display2_6").style.opacity = "0";
    document.getElementById("display2_7").style.opacity = "0";

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    document.getElementById("small_img_2_4").style.opacity = " 0.5";
    document.getElementById("small_img_2_5").style.opacity = "1";
    document.getElementById("small_img_2_6").style.opacity = "0.5";
    document.getElementById("small_img_2_7").style.opacity = "0.5";
    slide_index2 = 5;

}
function displayself2_6() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "block";
    document.getElementById("display2_7").style.display = "none";

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "0";
    document.getElementById("display2_4").style.opacity = "0";
    document.getElementById("display2_5").style.opacity = "0";
    document.getElementById("display2_6").style.opacity = "1";
    document.getElementById("display2_7").style.opacity = "0";

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = " 0.5";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    document.getElementById("small_img_2_4").style.opacity = "0.5";
    document.getElementById("small_img_2_5").style.opacity = "0.5";
    document.getElementById("small_img_2_6").style.opacity = "1";
    document.getElementById("small_img_2_7").style.opacity = "0.5";
    slide_index2 = 6;

}
function displayself2_7() {


    document.getElementById("display2_1").style.display = "none";
    document.getElementById("display2_2").style.display = "none";
    document.getElementById("display2_3").style.display = "none";
    document.getElementById("display2_4").style.display = "none";
    document.getElementById("display2_5").style.display = "none";
    document.getElementById("display2_6").style.display = "none";
    document.getElementById("display2_7").style.display = "block";

    document.getElementById("display2_1").style.opacity = "0";
    document.getElementById("display2_2").style.opacity = "0";
    document.getElementById("display2_3").style.opacity = "0";
    document.getElementById("display2_4").style.opacity = "0";
    document.getElementById("display2_5").style.opacity = "0";
    document.getElementById("display2_6").style.opacity = "0";
    document.getElementById("display2_7").style.opacity = "1";

    document.getElementById("small_img_2_1").style.opacity = "0.5";
    document.getElementById("small_img_2_2").style.opacity = "0.5";
    document.getElementById("small_img_2_3").style.opacity = "0.5";
    document.getElementById("small_img_2_4").style.opacity = "0.5";
    document.getElementById("small_img_2_5").style.opacity = "0.5";
    document.getElementById("small_img_2_6").style.opacity = "0.5";
    document.getElementById("small_img_2_7").style.opacity = "1";
    slide_index2 = 7;

}
/* onclick img*/
/*diapo 1 */

/*separation *//*separation *//*separation *//*separation *//*separation *//*separation */

/* onclick img*/





/* onclick img*/
/*diapo 5 */
/*timer function*/
var timer;

function startTimer() {
    timer = setInterval(function () {
        nextSlide1_1(1)
    }, 4000);

}
function startTimer2() {

    timer = setInterval(function () {
        nextSlide3_1(1)
    }, 4000);
}


function stopTimer() {

    clearInterval(timer);
}
/*timer function*/

function showDiapo() {
    diapo = document.getElementById("diapo_hidden");
    diapo.style.display = "block";
    background = document.getElementById("diapo_container");
    background.style.display = "block";

    noScroll();
}
function noScroll() {
    body = document.getElementById("body");
    body.style.margin = "0";
    body.style.height = "100%";
    body.style.overflow = "hidden";
    hideServices = document.getElementById("service_row_container");
    hideServices.style.margin = "50em 0 5em 16em";
}
function hideDiapo() {
    diapo = document.getElementById("diapo_hidden");
    diapo.style.display = "none";
    background = document.getElementById("diapo_container");
    background.style.display = "none";

    yesScroll();
}
function yesScroll() {
    body = document.getElementById("body");
    body.style.margin = "auto";
    body.style.height = "auto";
    body.style.overflow = "visible";
    hideServices = document.getElementById("service_row_container");
    hideServices.style.margin = "0em 0 5em 16em";
}