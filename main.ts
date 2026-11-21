input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 100)
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.showIcon(IconNames.TShirt)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
    basic.showIcon(IconNames.House)
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
