document.body.querySelector("#status").innerHTML="Status:"
var dragon = 10;
var player = 5;
// for (var i = 0; i<15; i++){
while (dragon!=0&&player!=0){
var attacks = Number(prompt("How many attacks are you attempting?"))

var attackresult = Math.floor((Math.random() * attacks));
var dragondamage = Math.floor((Math.random() * 1) + 1);

if(attacks==78){
 break;
}else if(attackresult>5){
  var attackresult = 1
}
if(isNaN(attacks)==true){
  var display = "Attacks must be a number."
  document.body.querySelector("#lesscool").innerHTML=display
}

   dragon=dragon - attackresult
   player=player - dragondamage
  var dragonhealth = `The dragon has ${dragon} health ` ;
  var playerhealth = `The player has ${player} health ` ;
//   if(player==0){
//     var result = "The player has died, and the dragon is victorious!"
//   } else if(dragon==0){
//     var result = "The dragon has been slain, and claims the dragon's hoard!"
//   }else {
//     var result = "The battle is a tie, and both participants retreat to lick their wounds"
//   }
// document.body.querySelector("#dragondiv").innerHTML=dragonhealth
// document.body.querySelector("#playerdiv").innerHTML=playerhealth
// document.body.querySelector("#resultdiv").innerHTML=result
}
  if(player==0){
    var result = "The player has died, and the dragon feasts on the player's bones!"
  } else if(dragon==0){
    var result = "The dragon has been slain, and the player claims the dragon's hoard!"
  }else {
    var result = "The battle is a tie, and both participants retreat to lick their wounds"
  }
document.body.querySelector("#dragondiv").innerHTML=dragonhealth
document.body.querySelector("#playerdiv").innerHTML=playerhealth
document.body.querySelector("#resultdiv").innerHTML=result
// }