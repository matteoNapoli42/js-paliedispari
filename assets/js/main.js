/*Pari e Dispari*/
let scelta=document.getElementById("scelta").value;
let flag=false;
let pcNumber=0;
let somma=0;


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

    }
}


   


