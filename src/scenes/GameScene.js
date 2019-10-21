let bg
let mountains
let C_lone
let bgC 
let C1
let C2
let C3
let Goku
let Freezer
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', '../image/sky_lightened.png')
        this.load.image('bgC', '../image/clouds_BG.png')
        this.load.image('mountains', '../image/mountains_lightened.png')
        this.load.image('C_lone', '../image/cloud_lonely.png')
        this.load.image('C3', '../image/clouds_MG_3.png')
        this.load.image('C2', '../image/clouds_MG_2.png')
        this.load.image('C1', '../image/clouds_MG_1.png')
        this.load.image('Goku', '../image/Gokuตัดเองจ้า.png')
        
        
    }

    create() {
    
        bg = this.add.tileSprite(0,0,384,216, 'bg').setOrigin(0, 0).setSize(800,600).setScale(2.8)
        bgC = this.add.tileSprite(0,0,384,216, 'bgC').setOrigin(0, 0).setSize(800,600).setScale(2.8)
        mountains = this.add.tileSprite(0,0,384,216,'mountains').setOrigin(0,0).setSize(800,600).setScale(2.8)
        C_lone = this.add.tileSprite(0,0,384,216,'C_lone').setOrigin(0,0).setSize(800,600).setScale(2.8)
        C3 = this.add.tileSprite(0,0,384,216,'C3').setOrigin(0,0).setSize(800,600).setScale(2.8)
        C2 = this.add.tileSprite(0,0,384,216,'C2').setOrigin(0,0).setSize(800,600).setScale(2.8)
        C1 = this.add.tileSprite(0,0,384,216,'C1').setOrigin(0,0).setSize(800,600).setScale(2.8)
        Goku = this.add.tileSprite(0,0,400,300,'Goku').setOrigin(0,0).setSize(800,600).setScale(1)

    }

    update() {
        bg.tilePositionX -= 1
        bgC.tilePositionX += 1
        mountains.tilePosition = 0
        C_lone.tilePositionX += 1
        C3.tilePositionX -= 0.8
        C2.tilePositionX -= 0.8
        C1.tilePositionX += 0.8
        Goku.tilePositionX -= 9 
    }
}

export default GameScene;
