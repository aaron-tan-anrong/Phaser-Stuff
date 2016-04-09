var menuState= {
    

  create: function(){
      
      var nameLabel= game.add.text(80, 80, "Test test", {font: '50px Arial', fill: 'white'});
      var startLabel= game.add.text(80, game.world.height-80, "Press Enter to Start", {font: '25px Arial', fill: 'white'});
      var enterKey= game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      enterKey.onDown.addOnce(this.start, this);
      
  },
  
    start: function(){
      
      game.state.start('play');
      
  },
};