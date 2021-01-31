var config = {
    type : Phaser.AUTO,
    backgroundColor: "#FFFFE0",
    width : 800,
    height : 600,
    scene : {
        preload : preload,
        create : create,
        update : update
    },
    physics : {
        default : "arcade",
        arcade: { 
            gravity : { y : 500}
        }
    }
}

const game = new Phaser.Game(config);
