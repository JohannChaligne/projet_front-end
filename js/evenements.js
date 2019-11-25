// Sélection de l'élément du panier du header
var votrePanier = document.querySelectorAll('p')[1];

// Déclaration des fonctions
function animationPanier1(){
  votrePanier.style.color = "#fd1015";
  votrePanier.style.cursor = "pointer";
}

function animationPanier2(){
  votrePanier.style.color = "";
}

function animationPanier3(){
  document.getElementById("panier_achat").animate([
  // keyframes
    {transform: 'scale3d(1, 1, 1)'},
    {transform: 'scale3d(1.01, 0.99, 1)'},
    {transform: 'scale3d(0.99, 1.01, 1)'},
    {transform: 'scale3d(1, 1, 1)'}
], { 
  // options
  duration: 1000,
});
}

//Evenements sur le panier du header
votrePanier.addEventListener('mouseover', animationPanier1);
votrePanier.addEventListener('mouseout', animationPanier2);
votrePanier.addEventListener('click', animationPanier3);


// Selection de l'élément "Bouton de validation de la page "achat_fioul.html"
var validation_Bouton = document.querySelectorAll('button')[1];

// Déclaration des fonctions
function ajoutPanier(){
  votrePanier.innerHTML = "Votre panier <i class=\"fas fa-shopping-basket\"></i> (1) "; 
}

//Evenements sur le panier du header
validation_Bouton.addEventListener('click', ajoutPanier);


//Mise en place du prompt de validation du devis
var validation_Bouton = document.querySelectorAll('button')[1];
function confirmationPanier(){
  alert('Votre commande a bien été réceptionné par nos services. Pour toutes informations, n\'hésitez pas à nous contacter au 01 34 25 81 56 (prix de l’appel) par la section contact ou par e-mail à l\'adresse suivante : info@heatersrus.fr'); 
}
validation_Bouton.addEventListener('click', confirmationPanier);


/*Animation de l'accordeon*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } 
      else {
          panel.style.display = "block";
      }
    });
}

/*Animation des modals*/
 $('#myModal').on('shown.bs.modal',function(){
  $('#myInput').trigger('focus')
 }) 

/*Plugin du calendrier dans les modals*/
    $(document).ready(function() {
        $('.datepick').datepicker({ dateFormat: "yy-mm-dd"});
    });





//Selection de l'élement "input" dans l'article "Devis" pour automatiser l'insertion






