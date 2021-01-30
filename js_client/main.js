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
var soundactive = 0 ;
var soundready = 1 ;
var pophistoria = 0 ;
var paperready = 1 ;
var historipaper = null ;

function preload(){
    this.load.image("decor","images/decor/png/BG.png");
    this.load.image("wood","images/menu/wood.png");
    this.load.image("levelselect","images/menu/letter.png");
    this.load.image("sound_on","images/menu/sound_on.png");
    this.load.image("sound_off","images/menu/sound_off.png");
    this.load.image("paper","images/menu/paper.png");
    this.load.audio("rosa","sounds/rosa.ogg");

}
function create(){

    var positionDecorX = this.cameras.main.centerX;
    var positionDecorY = this.cameras.main.centerY;
    var policetitre = {
        fontSize : "40px",
        color : "black",
        fontFamily: "Shojumaru"
    }
    var policesound = {
        fontSize : "20px",
        color : "black",
        fontFamily: "Shojumaru"
    }



    //tittle
    decor = this.add.sprite(positionDecorX,positionDecorY,"decor")
    wood = this.add.sprite(positionDecorX, 150 ,"wood")
    this.add.text(270 , 70, "Ego meum  ", policetitre)
    this.add.text(295 , 120, "amissis ", policetitre)
    this.add.text(315 , 175, "Latine ", policetitre)
    wood.setScale( 0.8,0.60);

    //level card
    levelselect1 = this.add.sprite(275, 440 ,"levelselect").setScale( 0.30);
    this.add.text(265, 415, "3", policetitre)
    levelselect2 = this.add.sprite(405, 440 ,"levelselect").setScale( 0.30);
    this.add.text(390, 415, "4", policetitre)
    levelselect3 = this.add.sprite(275, 340 ,"levelselect").setScale( 0.30);
    this.add.text(265, 315, "1", policetitre)
    levelselect4 = this.add.sprite(405, 340 ,"levelselect").setScale( 0.30);
    this.add.text(390, 315, "2", policetitre)
    levelselect5 = this.add.sprite(525, 390 ,"levelselect").setScale( 0.30);
    this.add.text(510, 365, "5", policetitre)
    historia = this.add.sprite(positionDecorX, 550 ,"levelselect").setScale( 1.3 , 0.30).setInteractive();
    this.add.text(290, 525, "Historia", policetitre)



    //sound
    sound = this.add.sprite(769, 15 ,"sound_on").setInteractive();
    soundtext = this.add.text(745, 3, "Son", policesound)
    soundtext.depth = 999

    sound.on('pointerdown',function(){
        if (soundactive === 0){
            soundactive = 1
        }else if(soundactive === 1){
            soundactive = 0
        }
    })

    //pop up historia
    historia.on('pointerdown',function(){
        if (pophistoria === 0){
            pophistoria = 1
            paperready = 1
        }
    })


}
function update(time, delta){
    //sound
    if (soundactive === 1){
        sound = this.add.sprite(769, 15 ,"sound_on");
    }else if(soundactive === 0){
        sound = this.add.sprite(769, 15 ,"sound_off");
    }

    if (soundactive === 1 && soundready === 1){
        this.sound.play("rosa");
        soundready = 0
    }else if (soundactive === 0){
        game.sound.stopAll();
        soundready = 1
    }

    if (pophistoria === 1 && paperready === 1){
        paperready = 0
        historipaper = this.add.sprite(400, 300 ,"paper").setInteractive();
    }

    if(historipaper !== null){
        historipaper.on('pointerdown',function(){
            if (pophistoria === 1){
                pophistoria = 0
                paperready = 0
                historipaper.setVisible(false)
            }
        })
    }


}