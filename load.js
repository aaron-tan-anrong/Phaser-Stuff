var loadState= {
    
    preload: function(){
        var loadingLabel= game.add.text(80,150, "Loading....",{font: '30px Courier', fill: '#ffffff'});
        
        game.load.image('star', 'assets/images/star.png');
        game.load.image('diamond', 'assets/images/diamond.png');
        
    },
    
    create: function(){
        game.state.start('menu');
        
        
    },
    
};