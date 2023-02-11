input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 90000000; index++) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.showIcon(IconNames.Sword)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 90000000; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showIcon(IconNames.Tortoise)
    }
})
basic.forever(function () {
	
})
