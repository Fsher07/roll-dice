class game {

 getDeger(button){
    
       var guess1 = parseInt(button.getAttribute("data-tip"));
       this.guess1 = guess1 ;
       document.getElementsByClassName("row")[(parseInt(button.getAttribute("data-tip"))-1)]
       .style.backgroundColor = "blue";
       console.log(guess1);
}

 getDeger2(button){
    
    var guess2 = parseInt(button.getAttribute("data-tip"));
    this.guess2 = guess2;
    document.getElementsByClassName("row2")[(parseInt(button.getAttribute("data-tip"))-1)].style.backgroundColor = "blue";
    console.log(guess2);
}

 addImage() { 
    document.getElementById("explanation").innerHTML = "Not Today !";
    document.getElementById("image").innerHTML = "<img src='ohNo.jpg'>"; 
}

 rollDice(element){
    
    var random1 = Math.floor((Math.random()*6)+1);
    var random2 = Math.floor((Math.random()*6)+1);

    
    document.getElementById("rolling").innerHTML = "Rolling...";
    document.getElementById("dice_place1").innerHTML ="<img src=" +  random1 + ".png>";
    document.getElementById("dice_place2").innerHTML = "<img src=" +  random2 + ".png>";
    
    var array = []; 
    array.push(random1, random2);
    console.log(array);
    
    var a = array.includes(guess1);
    var b = array.includes(guess2);    
      
    

   
    
    if (guess1 == guess2){
			let x = Boolean(guess1 == array[0]);
			let y = Boolean(guess1 == array[1]);

			
			
			if(x && y ){
					console.log("tombila");

			} else if(x || y){
					console.log("was very close!!");

			} else console.log("god dam it ");
    }

    if (guess1 != guess2){
        
      if(a  && b  ){
    
        console.log("Tombala !");
        
      } else if (a  || b ) {
          console.log("was close !"); 

      } else addImage(element);
    }
} 
}

const dices = document.querySelectorAll('.row');

dices.addEventListener('click', game.getDeger(button));