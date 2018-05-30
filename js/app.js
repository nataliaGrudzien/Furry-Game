function Furry() {
	this.x = 0;
	this.y = 0;
	this.direction = "right";
};

function Coin() {
	this.x = Math.floor(Math.random() * 10);
	this.y = Math.floor(Math.random() * 10);
};

function Game() {
	this.board = document.getElementById("board").children;
	this.furry = new Furry();
	this.coin = new Coin();
	this.score = 0;
	this.index = function(x,y) {
 		return x + (y * 10);
	};
	this.showFurry = function() {
		
    	this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');

  	};
  	this.hideVisibleFurry = function() {
  		document.querySelector(".furry").classList.remove('furry');
  	};
  	this.showCoin = function() {
    	this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  	};

  	this.moveFurry = function() {
  		this.hideVisibleFurry();
  		
  		
  		this.showFurry();  		
  		
  		
  		if(this.furry.direction === "right") {
     		this.furry.x = this.furry.x + 1;
 		} else if (this.furry.direction === "left") {
 			this.furry.x = this.furry.x - 1;
 		} else if (this.furry.direction === "up") {
 			this.furry.y = this.furry.y - 1;
 		} else if (this.furry.direction === "down") {
 			this.furry.y = this.furry.y + 1;
 		}
	
		this.gameOver();
		this.checkCoinCollision();
 		
  	};  	

  	this.turnFurry = function(event) {
  		switch (event.which) {
  			case 37:
    			this.furry.direction = "left";
    			break;
  			case 38: 
  				this.furry.direction = "up";
    			break;
    		case 39: 
  				this.furry.direction = "right";
    			break;
    		case 40: 
  				this.furry.direction = "down";
    			break;
  		};
  	};

  	this.checkCoinCollision = function() {
  		if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
  			this.board[ this.index(this.coin.x,this.coin.y) ].classList.remove('coin');
  			this.score++;
  			document.querySelector("#score strong").innerText = this.score;
  			this.coin = new Coin();
  			this.showCoin();
  		}
    };

    this.gameOver = function() {
  		if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
  			clearInterval(this.idSetInterval);
  			document.querySelector("#score div").innerText = "Game over! " + "Twój wynik to: " + this.score;
  			this.hideVisibleFurry();
  		}  
    };
    this.startGame = function() {
  		var self = this;
  		this.idSetInterval = setInterval(function () {
  			self.moveFurry();
		}, 250); 
  	};
};

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function(event){
    game.turnFurry(event);  
})