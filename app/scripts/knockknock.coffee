$(document).ready( ->
        canvas = document.getElementById("game")
        ctx = canvas.getContext('2d')

        ctx.fillStyle = "rgb(100,50,0)"
        ctx.fillRect 0,0, 1000, 750

        ctx.fillStyle = "rgb(0,0,200)"
        ctx.fillRect 10,100,55,50

        ctx.fillStyle = "rgb(200,0,0)"
        ctx.fillRect 10,10,55,50

        ctx.fillStyle = "rgb(0,200,0)"
        ctx.fillRect 100,100,55,50

        ctx.fillStyle = "rgb(200,0,200)"
        ctx.fillRect 100,10,55,50

        ctx.fillStyle = "rgb(255,135,0)"
        ctx.fillRect 195,10,55,50

        ctx.fillStyle = "rgb(256,256,0)"
        ctx.fillRect 195,100,55,50

        ctx.beginPath()
        ctx.arc 250, 1000, 750, 0, Math.PI*2, true
        ctx.strokeStyle = "rgb(255, 255, 255)"
        ctx.stroke()

        img = new Image()
        img.onload = ->
                ctx.drawImage(img,0,550)
                ctx.drawImage(img,500,550)
        img.src = 'water.png' 
        );