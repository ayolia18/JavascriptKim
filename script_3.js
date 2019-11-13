var nbEtage = window.prompt("Hey combien veux tu d etages?")

for (let i = 1 ; i <= nbEtage; i++){
    console.log(' '.repeat((nbEtage-i))+'# '.repeat(i))
}

