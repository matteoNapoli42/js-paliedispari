/*Pari e Dispari*/
let pcNumber=0;
let somma=0;


function pariOdispari(){
    let scelta = document.getElementById("scelta");
    let opzioneScelta = scelta.options[scelta.selectedIndex].value;
    console.log(opzioneScelta);
    return opzioneScelta;
}


function genPcNumber() 
{
    pcNumber=Math.floor(Math.random()*6);
    console.log(pcNumber);
}


function showResults()
{
    let element = document.getElementById("esitoCard");
    let message = document.getElementById("message");
    let userNumber = parseInt(document.getElementById("userNumber").value);
    console.log(userNumber);
    
    if(userNumber<1 || userNumber>5)
    {
        element.classList.add("d-none");
        message.innerHTML = "Il numero inserito non è valido. Riprovare";
        return null;
    }
    else
    {
        element.classList.remove("d-none");
        message.innerHTML = "ESITO";
        console.log(pcNumber);
        somma = userNumber + pcNumber;
        let printSomma = document.getElementById("somma");
        printSomma.innerHTML = somma;
        let whoWon=pariOdispari();
        if((whoWon == "Pari" && somma%2 == 0) || (whoWon == "Dispari" && somma%2!=0))
            document.getElementById("esito").innerHTML =  "L'utente ha vinto!";
        else
        document.getElementById("esito").innerHTML =  "Il PC ha vinto!";
    }
}

/*Palindroma*/

let parola = prompt("Inserisci la parola");
console.log(parola);

function verificaPalindroma(par){
    let ilap ="";
    console.log(par.length);
    let i = par.length;
    console.log(i);
    while(i>-1){
        ilap += par.charAt(i);
        i--;
    }
    console.log(ilap);
    if(par == ilap)
        return "La parola inserita è palindroma";
    else
        return "La parola inserita non è palindroma";
}

console.log(verificaPalindroma(parola));





   


