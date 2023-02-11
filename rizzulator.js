var rizzwords =["L Rizz","W Rizz","Less Rizz Than Nikocado","Rizzard of Oz","Chrizztiano Rizznaldo","Sped Monkey Get Out of Here","Can Only Rizz Up Animals","Idiot","No Rizz", "L Bozo", "Sped Monk","Rizz Anyone Up","Does Not Pull","Save Some For The Rest Of Us","Rizzly Bear"]

var answer = rizzwords[Math.floor(Math.random()*rizzwords.length)];

function Calc() {
    document.getElementById("output").innerHTML = answer ;
}

function Output() {
    alert("Hi");
    document.getElementById("startCalc").onclick = Calc ;
}

Output();


