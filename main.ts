let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(1, 15)
    music.play(music.stringPlayable("E B G E B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Yes)
    while (timer) {
        timer += -1
        basic.pause(1000)
    }
    music.ringTone(415)
    music.stopAllSounds()
})
