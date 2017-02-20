document.getElementById("rock").onclick = compWep;
document.getElementById("the").onclick = compWep;
document.getElementById("dragon").onclick = compWep;


function compWep (){
  var choice = Math.random();

  if(choice <= 0.33){
    document.getElementById("comp").innerHTML = "rock";
    document.getElementById("YOU WIN")
  }

  else if (choice <= 0.66){
    document.getElementById("comp").innerHTML = "paper";
  }

  else{
    document.getElementById("comp").innerHTML = "scissors";
  }
}
