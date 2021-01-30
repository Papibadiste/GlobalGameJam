var player = { 
    aPlayer : null,
    initialiserPlayer : function(){
        this.aPlayer =  jeu.scene.add.sprite(200,200,"player","Idle1").setScale(0.20)
    },
    generatePlayerAnimations: function(){
        jeu.scene.anims.create({
            key : "playerWalk",
            frames : jeu.scene.anims.generateFrameNames("player",{prefix:"Run", start:1,end:8}),
            frameRate : 5,
            repeat : -1 
        });
        }
}