var rizzwords = ["L Rizz", "W Rizz", "Less Rizz Than Nikocado", "Rizzard of Oz", "Chrizztiano Rizznaldo", "Sped Monkey Get Out of Here", "Can Only Rizz Up Animals", "Idiot", "No Rizz", "L Bozo", "Sped Monk", "Rizz Anyone Up", "Does Not Pull", "Save Some For The Rest Of Us", "Rizzly Bear"];

function Calc() {
  var elapsedSeconds = Math.floor((Date.now() - window.performance.timing.navigationStart) / 1000);
  var index = Math.min(elapsedSeconds, rizzwords.length - 1);
  document.getElementById("output").innerHTML = rizzwords[index];
}

function Output() {
  alert("Hi");
  document.getElementById("startCalc").onclick = Calc;
}

Output();
