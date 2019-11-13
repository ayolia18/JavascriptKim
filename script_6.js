const arn1 = "CCGUCGUUGCGCUACAGC"
const arn2 = "CCUCGCCGGUACUUCUCG"


function checkArn(arn){
    var proteine = []
    var codons = ''
    for (var i = 0; 6 > i ; i++){
        codons = arn.slice(i*3,i*3+3)
        if(codons === 'UCU' || codons === 'UCC' || codons === 'UCA' || codons === 'UCG' || codons === 'AGU' || codons ==='AGC' ){
            proteine.push('Sérine')
        }
        if(codons === 'CCU' || codons === 'CCC' || codons === 'CCA' || codons === 'CCG'){
            proteine.push('Proline')
        }
        if(codons === 'UUA' || codons === 'UUG'){
            proteine.push('Leucine')
        }
        if(codons === 'UUU' || codons === 'UUC'){
            proteine.push('Leucine')
        }
        if(codons === 'CGU' || codons === 'CGC' || codons === 'CGA' || codons === 'CGG' || codons === 'AGA' || codons === 'AGG'){
            proteine.push('Arginine')
        }
        if(codons === 'UAU' || codons === 'UAC'){
            proteine.push('Tyrosine')
        }
    }
    return proteine
}

console.log(checkArn(arn1))
console.log(checkArn(arn2))