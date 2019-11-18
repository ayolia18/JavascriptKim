// Fonctionnalité  1
const footer = document.getElementsByTagName("footer")
var nbClick = 0
footer[0].addEventListener("click", function(){ nbClick++;console.log("clic numéro "+nbClick)}, false)

// Fonctionnalité  2
const navbarHeader = document.getElementById("navbarHeader")
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){ navbarHeader.classList.toggle("collapse")}, false)



// Fonctionnalité  3
const firstCard = document.getElementsByClassName("card-body")[0]
const buttonEditCard = firstCard.getElementsByTagName("button")[1]
const textCard = firstCard.getElementsByTagName("p")[0]
buttonEditCard.addEventListener("click", function(){textCard.style = "color:red"}, false)


// Fonctionnalité  4
const secondCard = document.getElementsByClassName("card-body")[1]
const secondButtonEditCard = secondCard.getElementsByTagName("button")[1]
const secondTextCard = secondCard.getElementsByTagName("p")[0]
secondButtonEditCard.addEventListener("click", function(){
    if (secondTextCard.style.color === "green") {
        secondTextCard.style.color = "black";
    } else {
        secondTextCard.style.color = "green";
    }

}, false)

// Fonctionnalité  6
const cards = document.getElementsByClassName("card")
let viewButton =[]

for(let i=0; i<cards.length; i++ ){
    viewButton[i] = cards[i].getElementsByTagName("button")[0]
    viewButton[i].addEventListener("mouseover",function(e){
        if (  cards[i].getElementsByClassName("card-img-top")[0].style.width === "100%") {
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "20%"
            cards[i].getElementsByTagName("p")[0].style.display = "none"
        } else {
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "100%"
            cards[i].getElementsByTagName("p")[0].style.display = "block"
        }
        // console.log(cards[i].getElementsByClassName("card-img-top"))
    })
}




// Fonctionnalité  9

const logo = document.getElementsByClassName("navbar")[0].getElementsByTagName('a')[0]
logo.addEventListener("click", function(){
    document.addEventListener("keypress",function(e){

        if(e.key === "a"){
            document.getElementsByTagName("body")[0].classList.remove('offset-md-4','offset-md-8','col-md-4')
            document.getElementsByTagName("body")[0].classList.add('col-md-4')
        }
        else if(e.key === "y"){
            document.getElementsByTagName("body")[0].classList.remove('offset-md-4','offset-md-8','col-md-4')
            document.getElementsByTagName("body")[0].classList.add('col-md-4',"offset-md-4")
        }
        else if(e.key === "p"){
            document.getElementsByTagName("body")[0].classList.remove('offset-md-4','offset-md-8','col-md-4')
            document.getElementsByTagName("body")[0].classList.add('col-md-4',"offset-md-8")
        }
        else if(e.key === "b"){
            document.getElementsByTagName("body")[0].classList.remove('offset-md-4','offset-md-8','col-md-4')
        }

    })

}, false)