// menangkap semua elemen a
document.querySelectorAll("#opts a"). forEach((a)=>
// jika di klik akan menjalankan fungsi computerchoice
a.addEventListener("click",( element)=>{
    computerchoice(element);
})
); 
function computerchoice(element){
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    //mmenangkap element result dengan queryselector untuk menampung
    //nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = 
     choices[Math.round(Math.random()* choices.length)];
     pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user(Draw)
    if(pilihanUser == pilihanComputer.innerHTML){
        alert("DRAW");
    }

    // jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanComputer.innerHTML =="Scissors"){
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer.innerHTML=="Rock"){
        alert("YOU WIN");
    }else if(pilihanUser == "Scissort" && pilihanComputer.innerHTML =="Paper"){
        alert("YOU WIN");
    }

    if(pilihanUser == "Rock" && pilihanComputer.innerHTML =="Paper"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer.innerHTML=="Scissors"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissort" && pilihanComputer.innerHTML =="Rock"){
        alert("COMPUTER WIN");
    }
    
}


