var player = { 
    aPlayer : null,
    isJumping : false, 
    initialiserPlayer : function(){
        this.aPlayer =  jeu.scene.physics.add.sprite(200,200,"player","Idle").setScale(0.20);
        this.aPlayer.setCollideWorldBounds(true);
    },
    generatePlayerAnimations: function(){
        jeu.scene.anims.create({
            key : "playerWalk",
            frames : game.anims.generateFrameNames("player",{prefix:"Run", start:1,end:8}),
            frameRate : 4,
            repeat : -1 
        });
        jeu.scene.anims.create ({
            key : "playerIdle",
            frames : [{key : "player",frame : "Idle"}],
            frameRate : 2,
            repeat : -1
        });
        jeu.scene.anims.create({
            key : "playerJump",
            frames : game.anims.generateFrameNames("player",{prefix:"Jump", start:1,end:10}),
            frameRate : 5,
            repeat : -1 
        });
        },

     gererDeplacement : function(){
        if(jeu.cursor.left.isDown){
            this.aPlayer.setVelocityX(-200);
            this.aPlayer.setFlip(true,false);
        } else if(jeu.cursor.right.isDown) {
            this.aPlayer.setVelocityX(200);
            this.aPlayer.setFlip(false,false);
        }else {
            this.aPlayer.setVelocityX(0);
        }
        if(jeu.cursor.up.isDown && this.aPlayer.body.onFloor()) {
            this.aPlayer.setVelocityY(-350);
        }

        if(this.aPlayer.body.onFloor()){
            this.isJumping = false;
        } else {
            this.isJumping = true;
        }

        if(this.isJumping === true){
            if(jeu.cursor.up.isDown)
            {
                this.aPlayer.anims.play("playerJump",true);
            }
        } else {
            if(jeu.cursor.left.isDown){
                this.aPlayer.anims.play("playerWalk",true);
            } else if(jeu.cursor.right.isDown) {
                this.aPlayer.anims.play("playerWalk",true);
            }else {
                this.aPlayer.anims.play("playerIdle",true);
            }
        }
    }
}