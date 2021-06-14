const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

//c.fillStyle = "rgba(255, 0, 0, 0.5)"
//c.fillRect(100,100,100,100)
//c.fillRect(400,100,100,100)

//c.fillStyle = "rgba(0, 0, 255, 0.4)"
//c.fillRect(100,500,100,100)

//line
//c.beginPath()
//c.moveTo(50,250)
//c.lineTo(400,300)
//stroke method
//c.strokeStyle = "red" //cssName/rgb/hex/#
//c.stroke()

//circle arc
c.beginPath()
c.arc(300, 300, 120, 0, Math.PI * 2, false)
//c.strokeStyle = "blue"
//c.stroke()
c.fillStyle = "blue"
c.fill()

//forloops drawing 3 arcs

//for(let i = 0; i < 3; i++){
//    let x = Math.random() * window.innerWidth
//    let y = Math.random() * window.innerHeight
//    c.beginPath()
//    
//    c.arc(x, y, 120, 0, Math.PI * 2, false)
//    c.fillStyle = "red"
//    c.fill()
//}


//---------------------ANIMATING--------------------------
//circle arc


//spawn of the moving circle etc
let x = innerWidth / 2
let y = innerHeight / 2
let dx = 0.5 //atrums
let dy = 0.5 //atrums
let radius = 40


// standing circle
let stX = innerWidth / 2;    //standing centre x
let stY = innerHeight / 2; //standing centre y
let stR = 120 //standing radius

function animetZupu(){
    requestAnimationFrame(animetZupu)
c.clearRect(0, 0, innerWidth, innerHeight)

//standing fill arc
c.beginPath()
c.arc(stX, stY, stR, 0, Math.PI * 2, false)
//c.strokeStyle = "blue"
//c.stroke()
c.fillStyle = "blue"
c.fill()


// moving circle stoke arc
c.beginPath()
c.arc(x, y, radius, 0, Math.PI * 2, false)
c.strokeStyle = "red"
c.stroke()
//c.fillStyle = "blue"
//c.fill()
//x += 1




//line hipotenuza
c.beginPath()
c.moveTo(stX,stY)
c.lineTo(x,y)
//stroke method
c.strokeStyle = "red" //cssName/rgb/hex/#
c.stroke()

//line verticala katete
c.beginPath()
c.moveTo(stX,stY)
c.lineTo(stX,y)
//stroke method
c.strokeStyle = "red" //cssName/rgb/hex/#
c.stroke()

//line horizontala katete
c.beginPath()
c.moveTo(innerWidth / 2,y)
c.lineTo(x,y)
//stroke method
c.strokeStyle = "red" //cssName/rgb/hex/#
c.stroke()


if (x + radius > innerWidth || x - radius < 0){
    dx = -dx
}

if (y + radius > innerHeight  || y - radius < 0){
    dy = -dy
}

//speed
x += dx
y += dy

///coordinates feedback

//moving circle coordinate feedback
c.fillStyle = "black"
c.font = "10px Arial "
xScore = "x=" + Math.round(x) + " y="  + Math.round(y)
c.fillText(xScore, x, y + 10)

//standing arc center coordinates
c.fillStyle = "black"
c.font = "10px Arial "
xScore = "x=" + (stX) + " y="  + (stY)
c.fillText(xScore,stX, stY)

//90 degree angle coordinates
c.fillStyle = "black"
c.font = "10px Arial "
xScore = "x=" + (stX) + " y="  + (y)
c.fillText(xScore,stX, y)


//vertikalas katetes garuma raaditajs
c.fillStyle = "black"
c.font = "10px Arial "
xScore = "b garums="  + (stY - y)
c.fillText(xScore,stX, stY -(stY - y)/2 - 10)

//horizontalas katetes garuma raaditajs
c.fillStyle = "black"
c.font = "10px Arial "

xScore = "a garums="  + (stX - x)
c.fillText(xScore, x + (stX-x) / 2, y - 10)

//hipotenuzas garuma raaditajs
c.fillStyle = "black"
c.font = "10px Arial "

xScore = " h garums="  +
 Math.round(Math.sqrt(Math.pow(stX - x, 2)+Math.pow(stY - y,2))) +
 " rl attalums=" + 
 Math.round((Math.sqrt(Math.pow(stX - x, 2)+Math.pow(stY - y,2))) -
 stR - radius)

c.fillText(xScore, x + (stX-x) / 2, stY -(stY - y)/2 )

//line length
//deffinition linijas garums kvadrata



c.fillStyle = "black"
c.font = "15px Arial "
xScore = "x=" + (innerWidth / 2) + " y="  + (innerHeight / 2)
//c.fillText(xScore,innerWidth / 2, innerHeight / 2)

}

animetZupu()