var config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    scene : {
        preload : preload,
        create : create,
        update : update
    }
}

const game = new Phaser.Game(config);

function preload(){
    this.load.image("decor","images/decor/png/BG.png");
}
function create(){
    var positionDecorX = this.cameras.main.centerX;
    var positionDecorY = this.cameras.main.centerY;



    decor = this.add.sprite(positionDecorX,positionDecorY,"decor")
}
function update(time, delta){

}