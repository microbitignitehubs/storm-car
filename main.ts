input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    basic.showNumber(Kitronik_Move_Motor.measure())
    while (Kitronik_Move_Motor.measure() > 10) {
        Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
        basic.showNumber(Kitronik_Move_Motor.measure())
        basic.pause(500)
    }
    Kitronik_Move_Motor.stop()
})
basic.showIcon(IconNames.Snake)
