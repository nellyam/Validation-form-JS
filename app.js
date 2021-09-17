let inpUtilisateur = document.querySelector(".form-group:nth-child(1) input");
let inpMail = document.querySelector(".form-group:nth-child(2) input");
let inpMdp = document.querySelector(".form-group:nth-child(3) input");
let inpConfirme = document.querySelector(".form-group:nth-child(4) input");
let allImg = document.querySelectorAll(".icon-verif");
let allSpan = document.querySelectorAll("span");
let allLigne = document.querySelectorAll(".ligne div");
console.log(allLigne);


inpUtilisateur.addEventListener("input", ()=> {
    if(inpUtilisateur.value.length < 3) {
        allSpan[0].style.display = "inline";
        allImg[0].src = "./ressources/error.svg"; 
        allImg[0].style.display = "inline-block";   
   
    } else {
        allSpan[0].style.display = "none"
        allImg[0].src = "./ressources/check.svg"; 
        allImg[0].style.display = "inline-block";    
    }
})


inpMail.addEventListener("input", (e) => {
    const regExMail = /\S+@\S+\.\S+/;
    if(e.target.value.search(regExMail) === 0) {
        allSpan[1].style.display = "none"
        allImg[1].src = "./ressources/check.svg"; 
        allImg[1].style.display = "inline-block";    
    } else if(e.target.value.search(regExMail) === -1) {
        allSpan[1].style.display = "inline";
        allImg[1].src = "./ressources/error.svg"; 
        allImg[1].style.display = "inline-block";   
    }
})

// Validatin création mdp

let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
    symbol: 0,
    lettre: 0,
    chiffre: 0
};

inpMdp.addEventListener("input", (e)=> {
   valeurInp = e.target.value;

   if(valeurInp.search(specialCar) !== -1) {
       objValidation.symbol = 1;
   }
   if(valeurInp.search(alphabet) !== -1) {
       objValidation.lettre = 1;
   }
   if(valeurInp.search(chiffres) !== -1) {
       objValidation.chiffre = 1;
   }

   if(e.inputType == "deleteContentBackward") {
    if(valeurInp.search(specialCar) === -1) {
        objValidation.symbol = 0;
    }
    if(valeurInp.search(alphabet) === -1) {
        objValidation.lettre = 0;
    }
    if(valeurInp.search(chiffres) === -1) {
        objValidation.chiffre = 0;
    }
   }

   let testAll = 0;
   for(let property in objValidation) {
       if(objValidation[property] > 0) {
           testAll++;
       }
   }

   if(testAll < 3) {
       allSpan[2].style.display = "inline";
       allImg[2].src = "./ressources/error.svg";
       allImg[2].style.display = "inline";
   } else {
    allSpan[2].style.display = "none";
    allImg[2].src = "./ressources/check.svg";
    allImg[2].style.display = "inline";
   }

   //force mdp

   if(valeurInp.length <= 6 && valeurInp.length > 0) {
      allLigne[0].style.display = "block";
      allLigne[1].style.display = "none";
      allLigne[2].style.display = "none";
   } else if(valeurInp.length > 6 && valeurInp.length <= 9) {
      allLigne[0].style.display = "block";
      allLigne[1].style.display = "block";
      allLigne[2].style.display = "none";
   } else if(valeurInp.length > 9) {
    allLigne[0].style.display = "block";
    allLigne[1].style.display = "block";
    allLigne[2].style.display = "block";
   } else {
    allLigne[0].style.display = "none";
    allLigne[1].style.display = "none";
    allLigne[2].style.display = "none";
   }
});  

// confirmez le mdp

inpConfirme.addEventListener("input", (e) => {

    if(e.target.value.length == 0) {
        allImg[3].src = "./ressources/error.svg"; 
        allImg[3].style.display = "inline-block";  
    }

     else if(e.target.value === valeurInp) {
        allImg[3].src = "./ressources/check.svg"; 
        allImg[3].style.display = "inline-block";  
     } else {
        allImg[3].src = "./ressources/error.svg"; 
        allImg[3].style.display = "inline-block";  
     }
})

