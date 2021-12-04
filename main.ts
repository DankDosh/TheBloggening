scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    scene.cameraShake(2, 500)
    for (let value2 of tiles.getTilesByType(sprites.dungeon.doorClosedSouth)) {
        tiles.setTileAt(value2, sprites.dungeon.doorOpenSouth)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    current_level += 1
    change_level(current_level)
    mySprite.startEffect(effects.confetti, 500)
    scene.cameraShake(2, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    current_level += 1
    change_level(current_level)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . 2 2 2 4 4 4 4 4 2 . . . . . 
        2 2 4 4 4 4 5 5 5 5 4 2 . . . . 
        . . 2 2 2 4 4 4 4 4 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 300, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . 2 2 2 4 4 4 4 4 2 . . . . . 
        2 2 4 4 4 4 5 5 5 5 4 2 . . . . 
        . . 2 2 2 4 4 4 4 4 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -300, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    current_level += 1
    change_level(current_level)
    mySprite.startEffect(effects.confetti, 500)
    scene.cameraShake(2, 500)
})
function change_level (LevelNum: number) {
    if (LevelNum == 0) {
        tiles.loadMap(tiles.createMap(tilemap`room 1`))
    } else if (LevelNum == 1) {
        tiles.loadMap(tiles.createMap(tilemap`level5`))
    } else if (LevelNum == 2) {
        tiles.loadMap(tiles.createMap(tilemap`level8`))
    } else if (LevelNum == 3) {
        tiles.loadMap(tiles.createMap(tilemap`level10`))
        mySprite4 = sprites.create(assets.image`Bad link`, SpriteKind.Enemy)
        mySprite4.setPosition(randint(scene.screenWidth(), scene.screenHeight()), randint(scene.screenWidth(), scene.screenHeight()))
        mySprite4.follow(mySprite, 50)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (LevelNum == 4) {
        game.over(true, effects.smiles)
        music.playMelody("F C B A F C5 D G ", 107)
    } else if (LevelNum == 5) {
        tiles.loadMap(tiles.createMap(tilemap`level19`))
        music.playMelody("G B A G C5 B A B ", 120)
        mySprite4 = sprites.create(assets.image`Bad link`, SpriteKind.Enemy)
        mySprite4.setPosition(randint(scene.screenWidth(), scene.screenHeight()), randint(scene.screenWidth(), scene.screenHeight()))
        mySprite4.follow(mySprite, 90)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (LevelNum == 6) {
        tiles.loadMap(tiles.createMap(tilemap`level21`))
        game.splash("ha good job loser")
        mySprite4 = sprites.create(assets.image`Bad link`, SpriteKind.Enemy)
        mySprite4.setPosition(randint(scene.screenWidth(), scene.screenHeight()), randint(scene.screenWidth(), scene.screenHeight()))
        mySprite4.follow(mySprite, 90)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false, effects.slash)
    music.playMelody("C5 B A G F E D C ", 120)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    current_level += 5
    change_level(current_level)
    mySprite.startEffect(effects.fire, 1000)
    scene.cameraShake(3, 1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    scene.cameraShake(2, 500)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardSpike)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight0)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.greenOuterNorth1)) {
        tiles.setTileAt(value, sprites.dungeon.hazardHole)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.greenOuterEast1, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonOrange)
    scene.cameraShake(2, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite3.destroy(effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    scene.cameraShake(2, 500)
    for (let value2 of tiles.getTilesByType(sprites.dungeon.purpleOuterEast0)) {
        tiles.setTileAt(value2, sprites.dungeon.doorOpenEast)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    scene.cameraShake(2, 500)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardLava1)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark2)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardLava0)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark2)
    }
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let projectile: Sprite = null
let current_level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
current_level = 0
change_level(0)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(8000, function () {
    mySprite3 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f 2 1 1 1 1 1 1 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . f 2 1 1 f 1 f f 1 1 2 f . . 
        . . f 2 1 1 f f 1 f 1 1 2 f . . 
        . . . f 2 1 1 f f 1 1 2 f . . . 
        . . . f 2 2 1 1 1 1 2 2 f . . . 
        . . . . f f 2 2 2 2 2 f . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . f 2 2 2 2 f . . . . 
        . . . . . . . f 2 2 f . . . . . 
        . . f f f f . f 2 2 f . . . . . 
        . f 2 2 2 2 f f 2 2 f . . . . . 
        . f 2 2 f 2 2 2 2 f . . . . . . 
        . f f f . f f f f . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(randint(scene.screenWidth(), scene.screenHeight()), randint(scene.screenWidth(), scene.screenHeight()))
    mySprite3.follow(mySprite, 70)
    mySprite.setFlag(SpriteFlag.AutoDestroy, true)
})
