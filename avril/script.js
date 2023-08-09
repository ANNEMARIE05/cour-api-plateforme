let nom = document.querySelector(".nom")
let prenom = document.querySelector(".prenom")
let btn = document.querySelector("button")



nom.addEventListener("input", (e) => {
    if(nom.value.length > 12 || nomValue.includes(" ")){    
        nom.style.color= "red"
    }
})