   //desktop
    function updateNumPeopleOptions() {
      var roomType = document.getElementById("room_type").value;
      var numPeopleSelect = document.getElementById("num_people");
      numPeopleSelect.options.length = 0; // Supprimer les options existantes

   if (roomType === "Chambre Elise") {
        numPeopleSelect.add(new Option("1 personne", "1 personne"));
        numPeopleSelect.add(new Option("2 personnes", "2 personne"));
      } else if (roomType === "Chambre Alexandra" ||roomType === "Chambre Olympe" ) {
        numPeopleSelect.add(new Option("1 personne", "1 personne"));
        numPeopleSelect.add(new Option("2 personnes", "2 personne"));
        numPeopleSelect.add(new Option("3 personnes", "3 personne"));
   
      }
      else if (roomType === "Chambre Clemence" ||roomType === "Chambre Royale") {
        numPeopleSelect.add(new Option("1 personne", "1 personne"));
        numPeopleSelect.add(new Option("2 personnes", "2 personne"));
        numPeopleSelect.add(new Option("3 personnes", "3 personne"));
        numPeopleSelect.add(new Option("4 personnes", "4 personne"));
      }
    }
    //desktop
    function openModal() {
        var modal = document.getElementById("reservation-modal");
        modal.style.display = "block";
      }
      
      function closeModal() {
        var modal = document.getElementById("reservation-modal");
        modal.style.display = "none";
      }
      
      window.addEventListener("click", function(event) {
        var modal = document.getElementById("reservation-modal");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });

      //mobile

      function openModal2() {
        var modal = document.getElementById("reservation-modal2");
        modal.style.display = "block";
      }
      
      function closeModal2() {
        var modal = document.getElementById("reservation-modal2");
        modal.style.display = "none";
      }
      
      window.addEventListener("click", function(event) {
        var modal2 = document.getElementById("reservation-modal2");
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      });

         //mobile
    function updateNumPeopleOptions2() {
      var roomType = document.getElementById("room_type2").value;
      var numPeopleSelect = document.getElementById("num_people2");
      numPeopleSelect.options.length = 0; // Supprimer les options existantes

   if (roomType === "Chambre Elise") {
        numPeopleSelect.add(new Option("1 personne", "1 personne"));
        numPeopleSelect.add(new Option("2 personnes", "2 personne"));
      } else if (roomType === "Chambre Alexandra" ||roomType === "Chambre Olympe" ) {
        numPeopleSelect.add(new Option("1 personne", "1 personne"));
        numPeopleSelect.add(new Option("2 personnes", "2 personne"));
        numPeopleSelect.add(new Option("3 personnes", "3 personne"));
   
      }
      else if (roomType === "Chambre Clemence" ||roomType === "Chambre Royale") {
        numPeopleSelect.add(new Option("1 personne", "1 personne"));
        numPeopleSelect.add(new Option("2 personnes", "2 personne"));
        numPeopleSelect.add(new Option("3 personnes", "3 personne"));
        numPeopleSelect.add(new Option("4 personnes", "4 personne"));
      }
    }