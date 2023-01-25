input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("down")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
radio.setGroup(255)
