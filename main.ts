controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p3Sprite.say("B")
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p2Sprite.say("B")
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p4Sprite.say("B")
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p2Sprite.say("A")
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p4Sprite.say("A")
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p1Sprite.say("A")
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    p3Sprite.say("A")
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    p1Sprite.say("B")
})
let p4Sprite: Sprite = null
let p3Sprite: Sprite = null
let p2Sprite: Sprite = null
let p1Sprite: Sprite = null
p1Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . 3 3 . . . 3 3 3 3 3 . . . 
    . . . 3 . . . . . . . . 3 3 . . 
    . . . 3 . . . 3 . 3 . . . 3 . . 
    . . 3 . . . . . . . . . . 3 . . 
    . . 3 . . . . 3 3 3 . . 3 3 . . 
    . . 3 3 3 . . . . 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
p2Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 . . . . 2 2 . . . 
    . . . 2 2 . . . . . . . 2 . . . 
    . . . 2 . . . . . . . 2 2 . . . 
    . . . 2 . . 2 . . 2 . . 2 2 . . 
    . . . 2 . . . . . . . . . 2 . . 
    . . . 2 . . . . . . . . . 2 . . 
    . . . 2 2 . . 2 2 2 2 . . 2 . . 
    . . . . 2 2 . . . . . . 2 2 . . 
    . . . . . 2 2 2 . . 2 2 2 . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
p3Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . 7 7 7 7 . 7 7 7 . . 
    . . . . 7 7 . . . . . 7 7 7 . . 
    . . . 7 7 . . . . . . . . 7 7 . 
    . . 7 7 . . . . . . . . . . 7 . 
    . . 7 . . . . . . . . . . . 7 7 
    . 7 7 . . . 7 . . . 7 . . . . 7 
    . 7 . . . . . . . . . . . . . 7 
    . 7 . . . . . . . . . . . . . 7 
    . 7 7 . . . . . . . . . 7 . . 7 
    . . 7 . . 7 7 . . . . 7 7 . . 7 
    . . 7 7 . . . 7 7 7 7 . . 7 7 . 
    . . . . 7 7 . . . . . 7 7 7 . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
p4Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . 8 8 . . . . 8 8 8 . . . 
    . . . 8 . . . . . . . 8 8 8 . . 
    . . 8 8 . . . . . . . . . 8 8 . 
    . . 8 . . . . . . . . . . . 8 8 
    . . 8 . . 8 . . . 8 . . . . . 8 
    . . 8 . . . . . . . . . . . . 8 
    . . 8 . . 8 . . . . . 8 . . . 8 
    . . . 8 . 8 8 8 8 8 8 8 . . 8 8 
    . . . 8 8 . . . . . . . . 8 8 . 
    . . . . . 8 8 8 8 8 8 8 8 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
p1Sprite.x = 20
p2Sprite.x = 40
p3Sprite.x = 60
p4Sprite.x = 80
game.onUpdate(function () {
    controller.player1.moveSprite(p1Sprite, 100, 100)
    controller.player2.moveSprite(p2Sprite, 100, 100)
    controller.player3.moveSprite(p3Sprite, 100, 100)
    controller.player4.moveSprite(p4Sprite, 100, 100)
})
game.onUpdateInterval(2000, function () {
    p1Sprite.say("")
    p2Sprite.say("")
    p3Sprite.say("")
    p4Sprite.say("")
})
