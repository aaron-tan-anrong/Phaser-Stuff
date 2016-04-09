var winState= {
    
    create: function(){
      
      var winLabel= game.add.text(80, 80, "YOU WON", {font: '50px Arial', fill: '#00ff00'});
      var startLabel= game.add.text(80, game.world.height-80, "Press Enter to Restart", {font: '25px Arial', fill: '#ffffff'});
      
      var enterKey= game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      enterKey.onDown.addOnce(this.restart, this);
  },
  
    restart: function(){
      
      game.state.start('menu');
      
  }
};