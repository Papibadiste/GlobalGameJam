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
var level5finish = 0;
var level5start = 0;
var command = 0;

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
    player : player,
    cursor : null
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
    this.load.audio("Merci","sounds/Merci.ogg");
    this.load.audio("levelsong","sounds/levelsong.ogg");

    // niveau 1

    jeu.scene.load.image("tiles", "images/decor/png/Tile/tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("map","json/niveau_2.json");
    jeu.scene.load.tilemapTiledJSON("maplvl1","json/niveau_1.json");
    jeu.scene.load.tilemapTiledJSON("maplvl3","json/niveau_3.json");
    jeu.scene.load.tilemapTiledJSON("maplvl4","json/niveau_4.json");
    jeu.scene.load.tilemapTiledJSON("maplvl5","json/niveau_5.json");

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

    this.level1finish = jeu.world.level1finish;
    this.level2finish = jeu.world.level2finish;
    this.level3finish = jeu.world.level3finish;
    this.level4finish = jeu.world.level4finish;
    this.level5finish = jeu.world.level5finish;


    //tittle
    decor = this.add.sprite(positionDecorX,positionDecorY,"decor")
    wood = this.add.sprite(positionDecorX, 150 ,"wood")
    this.add.text(270 , 70, "Ego meum  ", policetitre)
    txtload = this.add.text(270 , 70, "Ego meum  ", policehistoria2)
    txtload.setVisible(false)
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
    levelselect5 = this.add.sprite(525, 390 ,"levelselect").setScale( 0.30)
    this.add.text(510, 365, "5", policetitre)
    if(this.level1finish === 0 || this.level2finish === 0|| this.level3finish === 0|| this.level4finish === 0){
        redcross = this.add.sprite(525, 390 ,"redcross").setScale( 0.10);
    }else {
        levelselect5.setInteractive();
    }
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

    levelselect4.on('pointerdown',function(){
        level4start = 1
    })

    levelselect5.on('pointerdown',function(){
        level5start = 1
    })

    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();





}
function update(time, delta) {

    this.level1finish = jeu.world.level1finish;
    this.level2finish = jeu.world.level2finish;
    this.level3finish = jeu.world.level3finish;
    this.level4finish = jeu.world.level4finish;

//start menu
    //sound
    if (soundactive === 1) {
        sound = this.add.sprite(769, 15, "sound_on");
    } else if (soundactive === 0) {
        sound = this.add.sprite(769, 15, "sound_off");
    }

    if (soundactive === 1 && soundready === 1) {
        this.sound.play("rosa");
        soundready = 0
    } else if (soundactive === 0) {
        game.sound.stopAll();
        soundready = 1
    }

    if (pophistoria === 1 && paperready === 1) {
        paperready = 0
        historipaper = this.add.sprite(400, 300, "paper").setInteractive();
        if (this.level1finish === 1) {
            policep1 = policehistoria
        } else {
            policep1 = policehistoria2
        }
        if (this.level2finish === 1) {
            policep2 = policehistoria
        } else {
            policep2 = policehistoria2
        }
        if (this.level3finish === 1) {
            policep3 = policehistoria
        } else {
            policep3 = policehistoria2
        }
        if (this.level4finish === 1) {
            policep4 = policehistoria
        } else {
            policep4 = policehistoria2
        }
        //paragraphe1
        textp1n1 = this.add.text(200, 75, "Cher Naminé,", policep1)
        textp1n2 = this.add.text(200, 115, "Tu as réussi a touvé le premier morceau de la tablette de ", policep1)
        textp1n3 = this.add.text(200, 135, "rubis. Une fois les 4 morceaux réuni tu pourras retrouver ", policep1)
        textp1n4 = this.add.text(200, 155, "usage de la parole.", policep1)
        //paragraphe2
        textp2n1 = this.add.text(200, 185, "Les quatre morceaux ont été perdu par Esteban, Zia, Tao", policep2)
        textp2n2 = this.add.text(200, 205, "et Mendoza après un accident avec l'Esperanza. Cette lettre  ", policep2)
        textp2n3 = this.add.text(200, 225, "que tu lis, vient de ton pere biologique Américana John.", policep2)
        textp2n4 = this.add.text(200, 245, "Aventurier qui a prit sa retraite au Royaume de cristal", policep2)
        //paragraphe3
        textp3n1 = this.add.text(200, 275, "Car tu sais, moi je ne crois pas qu'il y ait de bonne ou ", policep3)
        textp3n2 = this.add.text(200, 295, "de mauvaise situation Moi, si je devais résumer ma vie ", policep3)
        textp3n3 = this.add.text(200, 315, "aujourd'hui avec toi, je dirais que c'est d'abord des ", policep3)
        textp3n4 = this.add.text(200, 335, "rencontres. C'est pour ca que je t'ai abbandonné dans", policep3)
        textp3n5 = this.add.text(200, 355, "le desert car j'ai trouvé mieux ailleurs. ;D", policep3)
        //paragraphe4
        textp4n1 = this.add.text(200, 385, "Par contre si tu as reussi à récuperer les 4 morceaux?", policep4)
        textp4n2 = this.add.text(200, 405, "pourrais-tu les ramener? Car comment dire ?", policep4)
        textp4n3 = this.add.text(200, 425, "J'aimerai bien revoir le 4 morceaux de la pierre, ", policep4)
        textp4n4 = this.add.text(200, 445, "pourrais-tu les ramener au musée stp. Merci d'avance", policep4)
        textp4n5 = this.add.text(200, 465, "Sois utile pour une fois :D", policep4)
        textp4n6 = this.add.text(200, 495, "Cordialement,", policep4)
        textp4n7 = this.add.text(200, 515, "Américana John", policep4)
    }

    if (historipaper !== null) {
        historipaper.on('pointerdown', function () {
            if (pophistoria === 1) {
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
                textp4n7.setVisible(false)
            }
        })
    }

    if (level1finish === 1 && level2finish === 1 && level3finish === 1 && level4finish === 1) {

        redcross.setVisible(false)

    }

//end menu


    if (level2start === 1) {
        level2start = 0
        game.sound.stopAll();
        command = 1;
        jeu.world.fin = 0
        if (soundactive === 1) {
            this.sound.play("levelsong");

        }


        // world
        jeu.world.initialiserWorld2();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();

        jeu.world.gererCollider();

        jeu.world.gererCamera();


    }

    if (level1start === 1) {
        level1start = 0
        game.sound.stopAll();
        command = 1;
        jeu.world.fin = 0
        if (soundactive === 1) {
            this.sound.play("levelsong");

        }


        // world
        jeu.world.initialiserWorld1();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();

        jeu.world.gererCollider();

        jeu.world.gererCamera();


    }

    if (jeu.world.fin === 1) {
        jeu.player = player
        jeu.scene.scene.restart();
        jeu.world.fin = 2
    }
    if (jeu.world.fin === 0) {
        if (command === 1) {
            jeu.player.gererDeplacement();
        }
    }

    if (level3start === 1) {
        level3start = 0
        game.sound.stopAll();
        command = 1;
        jeu.world.fin = 0
        if (soundactive === 1) {
            this.sound.play("levelsong");

        }


        // world
        jeu.world.initialiserWorld3();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();

        jeu.world.gererCollider();

        jeu.world.gererCamera();


    }

    if (jeu.world.fin === 1) {
        jeu.player = player
        jeu.scene.scene.restart();
        jeu.world.fin = 2
    }
    if (jeu.world.fin === 0) {
        if (command === 1) {
            jeu.player.gererDeplacement();
        }
    }

    if (level4start === 1) {
        level4start = 0
        game.sound.stopAll();
        command = 1;
        jeu.world.fin = 0
        if (soundactive === 1) {
            this.sound.play("levelsong");

        }


        // world
        jeu.world.initialiserWorld4();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();

        jeu.world.gererCollider();

        jeu.world.gererCamera();


    }
    if (level5start === 1) {
        level5start = 0
        game.sound.stopAll();
        command = 1;
        jeu.world.fin = 0
        if (soundactive === 1) {
            this.sound.play("levelsong");

        }


        // world
        jeu.world.initialiserWorld5();

        // player
        jeu.player.initialiserPlayer();
        jeu.player.generatePlayerAnimations();

        jeu.world.gererCollider();

        jeu.world.gererCamera();


    }

    if (this.level5finish === 1) {
        this.level5finish = 0
        game.sound.stopAll();
        this.sound.play("Merci");

    }
}



 



