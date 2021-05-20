radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8427) {
        basic.showString("ID# 8427")
        basic.showString("Cipriano, Violet")
        basic.showString("Age 11")
        basic.showString("Parents: Rose and Michael")
        basic.showString("Welcome!")
    }
    if (receivedNumber == 11638) {
        basic.showString("ID# 11638")
        basic.showString("Cipriano, Coralyn")
        basic.showString("Age 8")
        basic.showString("Parents: Rose and Michael")
        basic.showString("Do not come in without permission.")
        radio.sendString("PERSON IN ROOM!")
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(493)
})
radio.setGroup(562)
