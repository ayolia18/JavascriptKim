var number = window.prompt('Hey quel nombre veux tu que je factorise pour toi ? ?')


var resultat = factoriser(number)

console.log("le resultat est: " +resultat)

function factoriser(number){
    var tempNumber = 1

    for (let i = 1 ; i <= number; i++){
        console.log(tempNumber)
        tempNumber = tempNumber * i
    }
    return tempNumber
}