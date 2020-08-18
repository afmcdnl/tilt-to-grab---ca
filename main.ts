game.startCountdown(40000)
let coin = game.createSprite(randint(0, 4), randint(0, 10))
coin.set(LedSpriteProperty.Brightness, 180)
let tank = game.createSprite(2, 2)
basic.forever(function () {
    if (coin.isTouching(tank)) {
        game.addScore(1)
        coin.set(LedSpriteProperty.X, randint(0, 4))
        coin.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        tank.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        tank.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        tank.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        tank.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
