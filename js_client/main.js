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
    this.load.image("wood","images/menu/wood.png");

    this.load.audio("rosa","sounds/rosa.ogg");
}
function create(){
    this.sound.play("rosa");
    var positionDecorX = this.cameras.main.centerX;
    var positionDecorY = this.cameras.main.centerY;
    var policetitre = {
        fontSize : "40px",
        color : "black",
        fontFamily: "Shojumaru"
    }




    decor = this.add.sprite(positionDecorX,positionDecorY,"decor")
    wood = this.add.sprite(positionDecorX, 150 ,"wood")
    this.add.text(270 , 70, "Ego meum  ", policetitre)
    this.add.text(295 , 120, "amissis ", policetitre)
    this.add.text(315 , 175, "Latine ", policetitre)
    wood.setScale( 0.8,0.60);
}
function update(time, delta){

}