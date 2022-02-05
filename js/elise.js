
        
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
      /*   document.getElementById("display1_5").style.display = "none";
         document.getElementById("display1_6").style.display = "none";*/ 
     
         document.getElementById("small_img_1_1").style.opacity = 1;
         document.getElementById("small_img_1_2").style.opacity = 0.5;
         document.getElementById("small_img_1_3").style.opacity = 0.5;
         document.getElementById("small_img_1_4").style.opacity = 0.5;
      /* document.getElementById("small_img_1_5").style.opacity = 0.5;
         document.getElementById("small_img_1_6").style.opacity = 0.5;*/   
         slide_index1 = 1;
     
     }
     function displayself1_2(){
         
        
         document.getElementById("display1_1").style.display = "none";
         document.getElementById("display1_2").style.display = "block";
         document.getElementById("display1_3").style.display = "none";
         document.getElementById("display1_4").style.display = "none";
     /*   document.getElementById("display1_5").style.display = "none";
         document.getElementById("display1_6").style.display = "none";*/  
     
         document.getElementById("small_img_1_1").style.opacity = 0.5;
         document.getElementById("small_img_1_2").style.opacity = 1;
         document.getElementById("small_img_1_3").style.opacity = 0.5;
         document.getElementById("small_img_1_4").style.opacity = 0.5;
     /*    document.getElementById("small_img_1_5").style.opacity = 0.5;
         document.getElementById("small_img_1_6").style.opacity = 0.5;*/ 
         slide_index1 = 2;
     }
     function displayself1_3(){
         
        
         document.getElementById("display1_1").style.display = "none";
         document.getElementById("display1_2").style.display = "none";
         document.getElementById("display1_3").style.display = "block";
         document.getElementById("display1_4").style.display = "none";
     /*    document.getElementById("display1_5").style.display = "none";
         document.getElementById("display1_6").style.display = "none";*/ 
     
         document.getElementById("small_img_1_1").style.opacity = 0.5;
         document.getElementById("small_img_1_2").style.opacity = 0.5;
         document.getElementById("small_img_1_3").style.opacity = 1;
         document.getElementById("small_img_1_4").style.opacity = 0.5;
      /*  document.getElementById("small_img_1_5").style.opacity = 0.5;
         document.getElementById("small_img_1_6").style.opacity = 0.5;*/  
         slide_index1 = 3;
     
     }
     function displayself1_4(){
         
        
         document.getElementById("display1_1").style.display = "none";
         document.getElementById("display1_2").style.display = "none";
         document.getElementById("display1_3").style.display = "none";
         document.getElementById("display1_4").style.display = "block";
    /*      document.getElementById("display1_5").style.display = "none";
         document.getElementById("display1_6").style.display = "none";*/
     
         document.getElementById("small_img_1_1").style.opacity = 0.5;
         document.getElementById("small_img_1_2").style.opacity = 0.5;
         document.getElementById("small_img_1_3").style.opacity = 0.5;
         document.getElementById("small_img_1_4").style.opacity = 1;
      /*    document.getElementById("small_img_1_5").style.opacity = 0.5;
         document.getElementById("small_img_1_6").style.opacity = 0.5;*/
         slide_index1 = 4;
     
     }
     function displayself1_5(){
         
        
         document.getElementById("display1_1").style.display = "none";
         document.getElementById("display1_2").style.display = "none";
         document.getElementById("display1_3").style.display = "none";
         document.getElementById("display1_4").style.display = "none";
    /*     document.getElementById("display1_5").style.display = "block";
         document.getElementById("display1_6").style.display = "none";*/ 
     
         document.getElementById("small_img_1_1").style.opacity = 0.5;
         document.getElementById("small_img_1_2").style.opacity = 0.5;
         document.getElementById("small_img_1_3").style.opacity = 0.5;
         document.getElementById("small_img_1_4").style.opacity = 0.5;
     /*     document.getElementById("small_img_1_5").style.opacity = 1;
         document.getElementById("small_img_1_6").style.opacity = 0.5;*/
         slide_index1 = 5;
     
     }
     function displayself1_6(){
         
        
         document.getElementById("display1_1").style.display = "none";
         document.getElementById("display1_2").style.display = "none";
         document.getElementById("display1_3").style.display = "none";
         document.getElementById("display1_4").style.display = "none";
      /*  document.getElementById("display1_5").style.display = "none";
         document.getElementById("display1_6").style.display = "block"; */ 
     
         document.getElementById("small_img_1_1").style.opacity = 0.5;
         document.getElementById("small_img_1_2").style.opacity = 0.5;
         document.getElementById("small_img_1_3").style.opacity = 0.5;
         document.getElementById("small_img_1_4").style.opacity = 0.5;
     /* document.getElementById("small_img_1_5").style.opacity = 0.5;
         document.getElementById("small_img_1_6").style.opacity = 1;*/    
         slide_index1 = 6;
     
     }
     /* onclick img*/  
     /*diapo 1 */
     
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
     /*    document.getElementById("display5_5").style.display = "none";
         document.getElementById("display5_6").style.display = "none";*/ 
     
         document.getElementById("small_img_5_1").style.opacity = 1;
         document.getElementById("small_img_5_2").style.opacity = 0.5;
         document.getElementById("small_img_5_3").style.opacity = 0.5;
         document.getElementById("small_img_5_4").style.opacity = 0.5;
    /*    document.getElementById("small_img_5_5").style.opacity = 0.5;
         document.getElementById("small_img_5_6").style.opacity = 0.5; */ 
         slide_index5 = 1;
     
     }
     function displayself5_2(){
         
        
         document.getElementById("display5_1").style.display = "none";
         document.getElementById("display5_2").style.display = "block";
         document.getElementById("display5_3").style.display = "none";
         document.getElementById("display5_4").style.display = "none";
      /*   document.getElementById("display5_5").style.display = "none";
         document.getElementById("display5_6").style.display = "none";*/ 
     
         document.getElementById("small_img_5_1").style.opacity = 0.5;
         document.getElementById("small_img_5_2").style.opacity = 1;
         document.getElementById("small_img_5_3").style.opacity = 0.5;
         document.getElementById("small_img_5_4").style.opacity = 0.5;
     /*    document.getElementById("small_img_5_5").style.opacity = 0.5;
         document.getElementById("small_img_5_6").style.opacity = 0.5;*/ 
         slide_index1 = 2;
     }
     function displayself5_3(){
         
        
         document.getElementById("display5_1").style.display = "none";
         document.getElementById("display5_2").style.display = "none";
         document.getElementById("display5_3").style.display = "block";
         document.getElementById("display5_4").style.display = "none";
    /*     document.getElementById("display5_5").style.display = "none";
         document.getElementById("display5_6").style.display = "none";*/ 
     
         document.getElementById("small_img_5_1").style.opacity = 0.5;
         document.getElementById("small_img_5_2").style.opacity = 0.5;
         document.getElementById("small_img_5_3").style.opacity = 1;
         document.getElementById("small_img_5_4").style.opacity = 0.5;
     /*   document.getElementById("small_img_5_5").style.opacity = 0.5;
         document.getElementById("small_img_5_6").style.opacity = 0.5;*/  
         slide_index5 = 3;
     
     }
     function displayself5_4(){
         
        
         document.getElementById("display5_1").style.display = "none";
         document.getElementById("display5_2").style.display = "none";
         document.getElementById("display5_3").style.display = "none";
         document.getElementById("display5_4").style.display = "block";
      /*   document.getElementById("display5_5").style.display = "none";
         document.getElementById("display5_6").style.display = "none";*/ 
     
         document.getElementById("small_img_5_1").style.opacity = 0.5;
         document.getElementById("small_img_5_2").style.opacity = 0.5;
         document.getElementById("small_img_5_3").style.opacity = 0.5;
         document.getElementById("small_img_5_4").style.opacity = 1;
     /*    document.getElementById("small_img_5_5").style.opacity = 0.5;
         document.getElementById("small_img_5_6").style.opacity = 0.5;*/ 
         slide_index5 = 4;
     
     }
     function displayself5_5(){
         
        
         document.getElementById("display5_1").style.display = "none";
         document.getElementById("display5_2").style.display = "none";
         document.getElementById("display5_3").style.display = "none";
         document.getElementById("display5_4").style.display = "none";
     /*  document.getElementById("display5_5").style.display = "block";
         document.getElementById("display5_6").style.display = "none"; */  
     
         document.getElementById("small_img_5_1").style.opacity = 0.5;
         document.getElementById("small_img_5_2").style.opacity = 0.5;
         document.getElementById("small_img_5_3").style.opacity = 0.5;
         document.getElementById("small_img_5_4").style.opacity = 0.5;
     /*    document.getElementById("small_img_5_5").style.opacity = 1;
         document.getElementById("small_img_5_6").style.opacity = 0.5;*/ 
         slide_index5 = 5;
     
     }
     function displayself5_6(){
         
        
         document.getElementById("display5_1").style.display = "none";
         document.getElementById("display5_2").style.display = "none";
         document.getElementById("display5_3").style.display = "none";
         document.getElementById("display5_4").style.display = "none";
     /*     document.getElementById("display5_5").style.display = "none";
         document.getElementById("display5_6").style.display = "block";*/
     
         document.getElementById("small_img_5_1").style.opacity = 0.5;
         document.getElementById("small_img_5_2").style.opacity = 0.5;
         document.getElementById("small_img_5_3").style.opacity = 0.5;
         document.getElementById("small_img_5_4").style.opacity = 0.5;
      /*   document.getElementById("small_img_5_5").style.opacity = 0.5;
         document.getElementById("small_img_5_6").style.opacity = 1; */
         slide_index5 = 6;
     
     }
     /* onclick img*/  
     /*diapo 5 */
     