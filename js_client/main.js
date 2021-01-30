
var soundactive = 1 ;

var soundready = 1 ;
var pophistoria = 0 ;
var paperready = 1 ;
var historipaper = null ;
var camera = 0

var level1finish = 0;
var level1start = 0;
var level2finish = 0;
var level2start = 0;
var level3finish = 0;
var level3start = 0;
var level4finish = 0;
var level4start = 0;
var level5start = 0;

var policehistoria = {
    fontSize : "12px",
    color : "black",
    fontFamily: "Shojumaru"
}

var policehistoria2 = {
    fontSize : "12px",
    color : "black",
    fontFamily: "Miss Fajardose"
}

var jeu = {
    scene : null,
    world : world,
    player : player
}
function preload(){
    jeu.scene = this;
    this.load.image("decor","images/decor/png/BG.png");
    this.load.image("wood","images/menu/wood.png");
    this.load.image("levelselect","images/menu/letter.png");
    this.load.image("sound_on","images/menu/sound_on.png");
    this.load.image("sound_off","images/menu/sound_off.png");
    this.load.image("paper","images/menu/paper.png");
    this.load.image("redcross","images/menu/redcross.png");
    this.load.audio("rosa","sounds/rosa.ogg");
    this.load.audio("levelsong","sounds/levelsong.ogg");

    // niveau 1

    jeu.scene.load.image("tiles", "images/decor/png/Tile/tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("map","json/niveautest.json");
    jeu.scene.load.tilemapTiledJSON("maplvl3","json/niveau_3.json");
    jeu.scene.load.tilemapTiledJSON("maplvl2","json/niveau_3.json");

    // perso

    jeu.scene.load.atlas("player","images/perso/player.png", "images/perso/playerAtlas.json");
    

}

function create(){
//start menu
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
    levelselect3 = this.add.sprite(275, 440 ,"levelselect").setScale( 0.30).setInteractive();
    this.add.text(265, 415, "3", policetitre)
    levelselect4 = this.add.sprite(405, 440 ,"levelselect").setScale( 0.30).setInteractive();
    this.add.text(390, 415, "4", policetitre)
    levelselect1 = this.add.sprite(275, 340 ,"levelselect").setScale( 0.30).setInteractive();
    this.add.text(265, 315, "1", policetitre)
    levelselect2 = this.add.sprite(405, 340 ,"levelselect").setScale( 0.30).setInteractive();
    this.add.text(390, 315, "2", policetitre)
    levelselect5 = this.add.sprite(525, 390 ,"levelselect").setScale( 0.30).setInteractive();
    this.add.text(510, 365, "5", policetitre)
    redcross = this.add.sprite(525, 390 ,"redcross").setScale( 0.10);
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

    //pop up level
    levelselect1.on('pointerdown',function(){
        level1start = 1
    })
    levelselect2.on('pointerdown',function(){
        level2start = 1
    })
    levelselect3.on('pointerdown',function(){
        level3start = 1
    })

}

function update(time, delta){
//start menu
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
        if( level1finish === 1 ){ policep1 = policehistoria }else{ policep1 = policehistoria2 }
        if( level2finish === 1 ){ policep2 = policehistoria }else{ policep2 = policehistoria2 }
        if( level3finish === 1 ){ policep3 = policehistoria }else{ policep3 = policehistoria2 }
        if( level4finish === 1 ){ policep4 = policehistoria }else{ policep4 = policehistoria2 }
        //paragraphe1
        textp1n1 = this.add.text(200, 75, "Cher Naminé,", policep1)
        textp1n2 = this.add.text(200, 115, "Tu as réussi a touvé le premier morceau de la table de ", policep1)
        textp1n3 = this.add.text(200, 135, "rubis. Une fois les 4 morceaux réuni tu pourras retrouver ", policep1)
        textp1n4 = this.add.text(200, 155, "usage de la parole.", policep1)
        //paragraphe2
        textp2n1 = this.add.text(200, 185, "Les quatre morceaux ont été perdu par Esteban, Zia, Tao", policep2)
        textp2n2 = this.add.text(200, 205, "et Mendoza après un accident avec l'Esperanza. Cette letre  ", policep2)
        textp2n3 = this.add.text(200, 225, "que tu lis vient de ton pere biologique Américana John.", policep2)
        textp2n4 = this.add.text(200, 245, "Aventurier qui a prit sa retraite au Royaume de cristal", policep2)
        //paragraphe3
        textp3n1 = this.add.text(200, 275, "Vous savez, moi je ne crois pas qu'il y ait de bonne ou ", policep3)
        textp3n2 = this.add.text(200, 295, "de mauvaise situation Moi, si je devais résumer ma vie ", policep3)
        textp3n3 = this.add.text(200, 315, "aujourd'hui avec toi, je dirais que c'est d'abord des ", policep3)
        textp3n4 = this.add.text(200, 335, "rencontres. C'est pour ca que je t'ai abbandonné dans", policep3)
        textp3n5 = this.add.text(200, 355, "le dessert car j'ai trouvé mieux ailleur. ;D", policep3)
        //paragraphe4
        textp4n1 = this.add.text(200, 385, "Vous savez, moi je ne crois pas qu'il y ait de bonne ou ", policep4)
        textp4n2 = this.add.text(200, 405, "de mauvaise situation Moi, si je devais résumer ma vie ", policep4)
        textp4n3 = this.add.text(200, 425, "aujourd'hui avec toi, je dirais que c'est d'abord des ", policep4)
        textp4n4 = this.add.text(200, 445, "rencontres. C'est pour ca que je t'ai abbandonné dans", policep4)
        textp4n5 = this.add.text(200, 465, "le dessert car j'ai trouvé mieux ailleur. ;D", policep4)
        textp4n6 = this.add.text(200, 495, "Américana John", policep4)
    }

    if(historipaper !== null){
        historipaper.on('pointerdown',function(){
            if (pophistoria === 1){
                pophistoria = 0
                paperready = 0
                historipaper.setVisible(false)
                //paragraphe1
                textp1n1.setVisible(false)
                textp1n2.setVisible(false)
                textp1n3.setVisible(false)
                textp1n4.setVisible(false)
                //paragraphe2
                textp2n1.setVisible(false)
                textp2n2.setVisible(false)
                textp2n3.setVisible(false)
                textp2n4.setVisible(false)
                //paragraphe3
                textp3n1.setVisible(false)
                textp3n2.setVisible(false)
                textp3n3.setVisible(false)
                textp3n4.setVisible(false)
                textp3n5.setVisible(false)
                //paragraphe4
                textp4n1.setVisible(false)
                textp4n2.setVisible(false)
                textp4n3.setVisible(false)
                textp4n4.setVisible(false)
                textp4n5.setVisible(false)
                textp4n6.setVisible(false)
            }
        })
    }

    if(level1finish === 1 && level2finish === 1 && level3finish === 1 && level4finish === 1 ){

        redcross.setVisible(false)

    }

//end menu

  
  if (level1start === 1) {
      level1start = 0
      game.sound.stopAll();

      if (soundactive === 1) {
          this.sound.play("levelsong");

      }


      // world
      jeu.world.initialiserWorld();

      // player
      jeu.player.initialiserPlayer();
      jeu.player.generatePlayerAnimations();
      jeu.player.aPlayer.anims.play("playerWalk");
  }

    if (level3start === 1){
        level3start = 0
        game.sound.stopAll();

        if (soundactive === 1 ) {
            this.sound.play("levelsong");

        }




        // world
        jeu.world.initialiserWorld3();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();
        jeu.player.aPlayer.anims.play("playerWalk");

    }

    if (level2start === 1){
        level2start = 0
        game.sound.stopAll();

        if (soundactive === 1 ) {
            this.sound.play("levelsong");

        }


        // world
        jeu.world.initialiserWorld2();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();
        jeu.player.aPlayer.anims.play("playerWalk");

    }

}


 



