let valid1 = false
let valid2 = false
let run = 0
let tag1;
let tag2;
let color1;
let color2;
//let inputfield = document.getElementById('inputfield')

/*Würfelfunktion verstecken bis Name vergeben, Würfelname überschreiben, */

let r1
let r2

let p1
let p2

let score1 = 0
let score2 = 0

let output = document.getElementById('output')

function submit(){
  tag1 = document.getElementById('tag').value
  color1 = document.getElementById('color').value
  console.log("tag1:" + tag1);
  console.log("color1:" + color1);
  document.getElementById('tag').value = null
  document.getElementById('color').value = null

  document.getElementById('inputfield').innerHTML = '<div style="width: 100%;"><input style="padding: 1.5%;" id="tag2" type="text" placeholder="Spieler 2"></div>'
  document.getElementById('inputcolor').innerHTML = '<div style="width: 100%;"><input style="padding: 1.5%;" id="color2" type="color"></div>'
  document.getElementById('button').innerHTML = '<div style="font-size: 30px; width: 100%;" onclick="submit2()">Spielereinstellung 2 merken</div>'
}

function submit2(){
  tag2 = document.getElementById('tag2').value
  color2 = document.getElementById('color2').value
  console.log("tag2:" + tag2)
  console.log("color2:" + color2);
  document.getElementById('namebox').innerHTML = '<p style="margin-left:45%; font-size: x-large">Bring it on ' + tag1 + ' & ' + tag2 + '</p>'    

}


function checkWinner(){
  if(r1>r2) {
    score1++
    r1 = 0;
    r2 = 0;
    return document.getElementById('score1').innerHTML = score1
  }

  else if(r1<r2){
    score2++
    r1 = 0;
    r2 = 0;
    return document.getElementById('score2').innerHTML = score2
  }
}

function newDice(){
    let random = Math.floor((Math.random()*6) +1)
    return random;
}

function newDicePlayer1() {
  if(tag1 == null || tag2 == null || tag1 == "" || tag2 == ""){
    tag1 = "Player 1"
    tag2 = "Player 2"

    document.getElementById('namebox').innerHTML = '<p style="margin-left:45%; font-size: x-large">Names set on default</p>' 
  }

  run++
    r1 = newDice()
  
    valid1 = true
    
        p1 = '<img style="border: 7px solid ' + color1 + '; border-radius:15px" src="diceimg/PinClipart_cube_' + r1 +'.png"></img>'

        if(valid1 == true) {
  
          valid2 = false
          valid1 = false
      
          if (run%2==0) {
           checkWinner() 
          }   
    } 
  
    document.getElementById('output').innerHTML = '<p>' + tag1 + ': ' + p1 +'</p> <p style="margin-top: 7%;">' + tag2 + ': ' + p2 + '</p>'
  
  }



  function newDicePlayer2() {
    if(tag1 == null || tag2 == null || tag1 == "" || tag2 == ""){
      tag1 = "Player 1"
      tag2 = "Player 2"

      document.getElementById('namebox').innerHTML = '<p style="margin-left:45%; font-size: x-large">Names set on default</p>' 
    }
run++
    r2 = newDice()
  
    valid2 = true
    
    p2 = '<img style="border: 7px solid ' + color2 + '; border-radius:15px" src="diceimg/PinClipart_cube_' + r2 +'.png"></img>'

  
        if(valid2 == true) {
  
          valid2 = false
          valid1 = false

          if (run%2==0) {
         checkWinner() 
          }

    } 


  
    document.getElementById('output').innerHTML = '<p>' + tag1 + ': ' + p1 +'</p> <p style="margin-top: 7%;">' + tag2 + ': ' + p2 + '</p>'
  
  }








