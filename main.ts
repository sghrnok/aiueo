let 動いてもいい = 0
devices.onGamepadButton(MesDpadButtonInfo._2Up, function () {
    servos.P1.stop()
    servos.P2.stop()
    basic.clearScreen()
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    servos.P1.run(10)
    servos.P2.run(-10)
})
devices.onGamepadButton(MesDpadButtonInfo._4Down, function () {
    if (動いてもいい == 1) {
        servos.P1.run(10)
        servos.P2.run(10)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    servos.P1.stop()
    servos.P2.stop()
    basic.clearScreen()
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 1)
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
})
devices.onGamepadButton(MesDpadButtonInfo._3Down, function () {
    if (動いてもいい == 1) {
        servos.P1.run(-10)
        servos.P2.run(-10)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
devices.onGamepadButton(MesDpadButtonInfo._4Up, function () {
    servos.P1.stop()
    servos.P2.stop()
    basic.clearScreen()
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    if (動いてもいい == 1) {
        servos.P1.run(50)
        servos.P2.run(-51)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
devices.onGamepadButton(MesDpadButtonInfo._3Up, function () {
    servos.P1.stop()
    servos.P2.stop()
    basic.clearScreen()
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    if (動いてもいい == 1) {
        servos.P1.run(-50)
        servos.P2.run(51)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    servos.P1.run(-10)
    servos.P2.run(10)
})
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    servos.P1.stop()
    servos.P2.stop()
    basic.clearScreen()
})
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
    servos.P1.stop()
    servos.P2.stop()
    basic.clearScreen()
})
basic.forever(function () {
    動いてもいい = 1
})
basic.forever(function () {
    if (input.soundLevel() > 200) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    }
})
