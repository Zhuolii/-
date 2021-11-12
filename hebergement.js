function displayNumber(){
   
    var number = document.getElementById("display_number");
    var total = 5;
    var num = document.getElementsByClassName("showSlide").length; 
     i=1;
     var currentSlide = number[i];
     number= number.innerHTML = currentSlide + "/" + num;







     return (number)


}
        var slide_index = 1;  
        displaySlides(slide_index);  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display ="block";  
        }  
        /*diapo 2 */
        var slide_index2 = 1;  
        displaySlides2(slide_index2);  
        function nextSlide2(n) {  
            displaySlides2(slide_index2 += n);  
        }  
        function currentSlide2(n) {  
            displaySlides2(slide_index2 = n);  
        }  
        function displaySlides2(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide2");  
            if (n > slides.length) { slide_index2 = 1 }  
            if (n < 1) { slide_index2 = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2 - 1].style.display = "block";  
        }
          /*diapo hebergement */
          /* ver web*/
        /*diapo chambre 1 */
        var slide_index2 = 1;  
        displaySlides21(slide_index2);  
        function nextSlide21(n) {  
            displaySlides21(slide_index2 += n);  
        }  
        function currentSlide21(n) {  
            displaySlides21(slide_index2 = n);  
        }  
        function displaySlides21(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide21");  
            if (n > slides.length) {
                 slide_index2 = 1
                 }  
            if (n < 1) {
                 slide_index2 = slides.length
                 }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2-1].style.display = "block";  
        }  
        /*diapo chambre 1 */
        /*diapo chambre 2 */
        var slide_index2 = 1;  
        displaySlides22(slide_index2);  
        function nextSlide22(n) {  
            displaySlides22(slide_index2 += n);  
        }  
        function currentSlide22(n) {  
            displaySlides22(slide_index2 = n);  
        }  
        function displaySlides22(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide22");  
            if (n > slides.length) { slide_index2 = 1 }  
            if (n < 1) { slide_index2 = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2 - 1].style.display = "block";  
        }  
        /*diapo chambre 2 */
        /*diapo chambre 3 */
        var slide_index2 = 1;  
        displaySlides23(slide_index2);  
        function nextSlide23(n) {  
            displaySlides23(slide_index2 += n);  
        }  
        function currentSlide23(n) {  
            displaySlides23(slide_index2 = n);  
        }  
        function displaySlides23(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide23");  
            if (n > slides.length) { slide_index2 = 1 }  
            if (n < 1) { slide_index2 = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2 - 1].style.display = "block";  
        }  
        /*diapo chambre 3 */
         /*diapo chambre 4 */
         var slide_index2 = 1;  
         displaySlides24(slide_index2);  
         function nextSlide24(n) {  
             displaySlides24(slide_index2 += n);  
         }  
         function currentSlide24(n) {  
             displaySlides24(slide_index2 = n);  
         }  
         function displaySlides24(n) {  
             var i;  
             var slides = document.getElementsByClassName("showSlide24");  
             if (n > slides.length) { slide_index2 = 1 }  
             if (n < 1) { slide_index2 = slides.length }  
             for (i = 0; i < slides.length; i++) {  
                 slides[i].style.display = "none";  
             }  
             slides[slide_index2 - 1].style.display = "block";  
         }  
         /*diapo chambre 4 */
         /*diapo chambre 5 */
         var slide_index2 = 1;  
         displaySlides25(slide_index2);  
         function nextSlide25(n) {  
             displaySlides25(slide_index2 += n);  
         }  
         function currentSlide25(n) {  
             displaySlides25(slide_index2 = n);  
         }  
         function displaySlides25(n) {  
             var i;  
             var slides = document.getElementsByClassName("showSlide25");  
             if (n > slides.length) { slide_index2 = 1 }  
             if (n < 1) { slide_index2 = slides.length }  
             for (i = 0; i < slides.length; i++) {  
                 slides[i].style.display = "none";  
             }  
             slides[slide_index2 - 1].style.display = "block";  
         }  
         /*diapo chambre 5 */
        /*diapo hebergement */
         /* ver web*/
    
         /* ver mobile*/
             /*diapo hebergement */
          
        /*diapo chambre 1 */
        var slide_index2 = 1;  
        displaySlides26(slide_index2);  
        function nextSlide26(n) {  
            displaySlides26(slide_index2 += n);  
        }  
        function currentSlide26(n) {  
            displaySlides26(slide_index2 = n);  
        }  
        function displaySlides26(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide26");  
            if (n > slides.length) { slide_index2 = 1 }  
            if (n < 1) { slide_index2 = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2 - 1].style.display = "block";  
        }  
        /*diapo chambre 1 */
        /*diapo chambre 2 */
        var slide_index2 = 1;  
        displaySlides27(slide_index2);  
        function nextSlide27(n) {  
            displaySlides27(slide_index2 += n);  
        }  
        function currentSlide27(n) {  
            displaySlides27(slide_index2 = n);  
        }  
        function displaySlides27(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide27");  
            if (n > slides.length) { slide_index2 = 1 }  
            if (n < 1) { slide_index2 = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2 - 1].style.display = "block";  
        }  
        /*diapo chambre 2 */
        /*diapo chambre 3 */
        var slide_index2 = 1;  
        displaySlides28(slide_index2);  
        function nextSlide28(n) {  
            displaySlides28(slide_index2 += n);  
        }  
        function currentSlide28(n) {  
            displaySlides28(slide_index2 = n);  
        }  
        function displaySlides28(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide28");  
            if (n > slides.length) { slide_index2 = 1 }  
            if (n < 1) { slide_index2 = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index2 - 1].style.display = "block";  
        }  
        /*diapo chambre 3 */
         /*diapo chambre 4 */
         var slide_index2 = 1;  
         displaySlides29(slide_index2);  
         function nextSlide29(n) {  
             displaySlides29(slide_index2 += n);  
         }  
         function currentSlide29(n) {  
             displaySlides29(slide_index2 = n);  
         }  
         function displaySlides29(n) {  
             var i;  
             var slides = document.getElementsByClassName("showSlide29");  
             if (n > slides.length) { slide_index2 = 1 }  
             if (n < 1) { slide_index2 = slides.length }  
             for (i = 0; i < slides.length; i++) {  
                 slides[i].style.display = "none";  
             }  
             slides[slide_index2 - 1].style.display = "block";  
         }  
         /*diapo chambre 4 */
         /*diapo chambre 5 */
         var slide_index2 = 1;  
         displaySlides30(slide_index2);  
         function nextSlide30(n) {  
             displaySlides30(slide_index2 += n);  
         }  
         function currentSlide30(n) {  
             displaySlides30(slide_index2 = n);  
         }  
         function displaySlides30(n) {  
             var i;  
             var slides = document.getElementsByClassName("showSlide30");  
             if (n > slides.length) { slide_index2 = 1 }  
             if (n < 1) { slide_index2 = slides.length }  
             for (i = 0; i < slides.length; i++) {  
                 slides[i].style.display = "none";  
             }  
             slides[slide_index2 - 1].style.display = "block";  
         }  
         /*diapo chambre 5 */
        /*diapo hebergement */
         /* ver mobile*/ 
      /*diapo 3 */
      var slide_index3 = 1;  
      displaySlides3(slide_index3);  
      function nextSlide3(n) {  
          displaySlides3(slide_index3 += n);  
      }  
      function currentSlide3(n) {  
          displaySlides3(slide_index3 = n);  
      }  
      function displaySlides3(n) {  
          var i;  
          var slides = document.getElementsByClassName("showSlide3");  
          if (n > slides.length) { slide_index3 = 1 }  
          if (n < 1) { slide_index3 = slides.length }  
          for (i = 0; i < slides.length; i++) {  
              slides[i].style.display = "none";  
          }  
          slides[slide_index3 - 1].style.display = "block";  
      }  
       /*diapo 4 */
       var slide_index4 = 1;  
       displaySlides4(slide_index4);  
       function nextSlide4(n) {  
           displaySlides4(slide_index4 += n);  
       }  
       function currentSlide4(n) {  
           displaySlides4(slide_index4 = n);  
       }  
       function displaySlides4(n) {  
           var i;  
           var slides = document.getElementsByClassName("showSlide4");  
           if (n > slides.length) { slide_index4 = 1 }  
           if (n < 1) { slide_index4 = slides.length }  
           for (i = 0; i < slides.length; i++) {  
               slides[i].style.display = "none";  
           }  
           slides[slide_index4 - 1].style.display = "block";  
       }  
       /*diapo 5 */
       var slide_index5 = 1;  
       displaySlides5(slide_index5);  
       function nextSlide5(n) {  
           displaySlides5(slide_index5 += n);  
       }  
       function currentSlide5(n) {  
           displaySlides5(slide_index5 = n);  
       }  
       function displaySlides5(n) {  
           var i;  
           var slides = document.getElementsByClassName("showSlide5");  
           if (n > slides.length) { slide_index5 = 1 }  
           if (n < 1) { slide_index5 = slides.length }  
           for (i = 0; i < slides.length; i++) {  
               slides[i].style.display = "none";  
           }  
           slides[slide_index5 - 1].style.display = "block";  
       }  
       /*diapo 6 */
       var slide_index6 = 1;  
       displaySlides6(slide_index6);  
       function nextSlide6(n) {  
           displaySlides6(slide_index6 += n);  
       }  
       function currentSlide6(n) {  
           displaySlides6(slide_index6 = n);  
       }  
       function displaySlides6(n) {  
           var i;  
           var slides = document.getElementsByClassName("showSlide6");  
           if (n > slides.length) { slide_index6 = 1 }  
           if (n < 1) { slide_index6 = slides.length }  
           for (i = 0; i < slides.length; i++) {  
               slides[i].style.display = "none";  
           }  
           slides[slide_index6 - 1].style.display = "block";  
       }  
       


         
    function startTimer() {
        timer = setInterval(function() {
            nextSlide2(1);
        }, 5000) ;
    }
