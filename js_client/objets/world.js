var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    positionDebut : null,
    overlap : null,

    initialiserWorld : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer =  this.tilemap.createStaticLayer("bot", this.tileset,0,0);
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",  this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",  this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Object" , obj => obj.name === "debut")
        this.positionfin = this.tilemap.findObject("Object" , obj => obj.name === "fin")

        this.worldLayer.setCollisionByProperty({Collides : true});
        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        this.overlapLayer.setTileIndexCallback(89,this.finlevel,this)

    },
    gererCollider : function(){

        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer)

        jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer)

        this.overlapLayer.setTileIndexCallback(87,this.finlevel,this)
        this.overlapLayer.setTileIndexCallback(88,this.finlevel,this)
        this.overlapLayer.setTileIndexCallback(89,this.finlevel,this)


    },
    finlevel : function(){
        console.log("oui");
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

    },

    initialiserWorld2 : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "maplvl2"});
        this.tileset =  this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer =  this.tilemap.createStaticLayer("bot", this.tileset,0,0);
        this.worldLayer =  this.tilemap.createStaticLayer("world",  this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",  this.tileset,0,0);


    }
    
}