var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    positionDebut : null,
    overlap : null,
    fin : 0,
    level1finish : 0,
    level2finish : 0,
    level3finish : 0,
    level4finish : 0,
    level5finish : 0,

    initialiserWorld2 : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",  this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Object" , obj => obj.name === "debut")
        this.positionfin = this.tilemap.findObject("Object" , obj => obj.name === "fin")

        this.worldLayer.setCollisionByProperty({Collides : true});
        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        this.overlapLayer.setTileIndexCallback(112,this.finlevel,this)

    },
    gererCollider : function(){
        this.overlapLayer.setTileIndexCallback(113,this.finlevel,this)

        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer)

        jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer)




    },
    finlevel : function(){
        jeu.player.finlevel()
        this.level2finish = 1
        this.fin = 1

    },
    gererCamera : function(){
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels)


    },

    initialiserWorld3 : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "maplvl3"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer =  this.tilemap.createStaticLayer("bot", this.tileset,0,0);
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",  this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",  this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Object" , obj => obj.name === "debut")
        this.positionfin = this.tilemap.findObject("Object" , obj => obj.name === "fin")

        this.worldLayer.setCollisionByProperty({Collides : true});
        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        this.overlapLayer.setTileIndexCallback(112,this.finlevel2,this)
        this.overlapLayer.setTileIndexCallback(19,this.finlevel2,this)
        this.overlapLayer.setTileIndexCallback(20,this.finlevel2,this)

        this.overlapLayer.setTileIndexCallback(43,this.finlevel2,this)
        this.overlapLayer.setTileIndexCallback(44,this.finlevel2,this)

        this.overlapLayer.setTileIndexCallback(90,this.finlevel2,this)
        this.overlapLayer.setTileIndexCallback(91,this.finlevel2,this)
    },finlevel2 : function(){
        jeu.player.finlevel()
        this.level3finish = 1
        this.fin = 1

    },

    initialiserWorld1 : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "maplvl1"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer =  this.tilemap.createStaticLayer("bot", this.tileset,0,0);
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",  this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",  this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Object" , obj => obj.name === "debut")
        this.positionfin = this.tilemap.findObject("Object" , obj => obj.name === "fin")

        this.worldLayer.setCollisionByProperty({Collides : true});
        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        this.overlapLayer.setTileIndexCallback(37,this.finlevel3,this)
        this.overlapLayer.setTileIndexCallback(38,this.finlevel3,this)
        this.overlapLayer.setTileIndexCallback(42,this.finlevel3,this)

    },finlevel3 : function(){
        jeu.player.finlevel()
        this.level1finish = 1
        this.fin = 1

    },
    initialiserWorld4 : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "maplvl4"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer =  this.tilemap.createStaticLayer("bot", this.tileset,0,0);
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",  this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",  this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Object" , obj => obj.name === "debut")
        this.positionfin = this.tilemap.findObject("Object" , obj => obj.name === "fin")

        this.worldLayer.setCollisionByProperty({Collides : true});
        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        this.overlapLayer.setTileIndexCallback(317,this.finlevel4,this)
        this.overlapLayer.setTileIndexCallback(318,this.finlevel4,this)
        this.overlapLayer.setTileIndexCallback(363,this.finlevel4,this)
        this.overlapLayer.setTileIndexCallback(409,this.finlevel4,this)
        this.overlapLayer.setTileIndexCallback(410,this.finlevel4,this)
        this.overlapLayer.setTileIndexCallback(455,this.finlevel4,this)
        this.overlapLayer.setTileIndexCallback(456,this.finlevel4,this)

    },finlevel4 : function(){
        jeu.player.finlevel()
        this.level4finish = 1
        this.fin = 1

    },
    initialiserWorld5 : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "maplvl5"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer =  this.tilemap.createStaticLayer("bot", this.tileset,0,0);
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",  this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",  this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Object" , obj => obj.name === "debut")
        this.positionfin = this.tilemap.findObject("Object" , obj => obj.name === "fin")

        this.worldLayer.setCollisionByProperty({Collides : true});
        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        this.overlapLayer.setTileIndexCallback(471,this.finlevel5,this)
        this.overlapLayer.setTileIndexCallback(514,this.finlevel5,this)
        this.overlapLayer.setTileIndexCallback(563,this.finlevel5,this)
        this.overlapLayer.setTileIndexCallback(608,this.finlevel5,this)
        this.overlapLayer.setTileIndexCallback(609,this.finlevel5,this)

    },finlevel5 : function(){
        jeu.player.finlevel()
        this.level5finish = 1
        this.fin = 1

    }
    
}