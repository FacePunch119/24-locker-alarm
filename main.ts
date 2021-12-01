radio.onReceivedString(function (receivedString) {
    while (true) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            basic.pause(500)
        }
        basic.showString(receivedString)
    }
})
basic.forever(function () {
    let pressure = 0
    radio.setGroup(80)
    if (pressure > 500) {
        while (true) {
            radio.sendString("Intruder")
        }
    } else if (pressure < 500) {
        basic.showString("Safe")
    }
})
