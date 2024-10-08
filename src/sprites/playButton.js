game.sprites.playButton.init = function() {
    
    // Init sprite properties
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width/2
    this.y = mge.game.height/2
    this._text = 'PLAY'
}

game.sprites.playButton.update = function () {

    if (mge.keyboard.isKeyPressed('ArrowUp')||mge.keyboard.isKeyPressed('z')||mge.keyboard.isKeyPressed('Z')||mge.keyboard.isKeyPressed('w')||mge.keyboard.isKeyPressed('W')) {
        if (game.state == 'ready') {
            game.songs.mainSong.playSong()
        } 
        mge.game.changeScene(game.scenes.main)
    }
}

game.sprites.playButton.drawFunction = function (ctx) {

    ctx.fillStyle='#582970'
    ctx.textAlign = 'center'

    // Boot screen
    if(game.state == 'ready') {
        // TITLE
        ctx.font = '100px serif'
        ctx.fillText('UNLOVED   ', mge.game.width/2, 150)
        // REF TO JS13K
        ctx.font = '24px serif'
        ctx.fillText('A game created for JS13K 2024', mge.game.width/2, 200)
        // Exaplanations
        ctx.fillText('UP arrow - W - Z', mge.game.width/2, 420)
        // Number 13
        game.sprites.player.x =  900
        game.sprites.player.y = 113
        game.sprites.player.draw()
        game.sprites.eye.cloneExecuteForEach('draw')
        game.sprites.legs.cloneExecuteForEach('draw')
    }

    // JUMP button
    ctx.fillRect(465,300,350,70)
    ctx.font = '40px serif'
    ctx.fillStyle = '#ffffff'
    this._text = 'JUMP TO START'
    ctx.fillText(this._text, this.width/2, 350)

}