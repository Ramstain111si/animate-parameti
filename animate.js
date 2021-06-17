const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

//circle arc
c.beginPath()
c.arc(300, 300, 120, 0, Math.PI * 2, false)
c.fillStyle = "blue"
c.fill()

//---------------------ANIMATING--------------------------

//circle arc
//spawn location and speed - of the moving circle
let x = innerWidth / 2
let y = innerHeight / 2
let dx = 0.5 //atrums
let dy = 0.5 //atrums
let radius = 40


// standing circle
let stX = innerWidth / 2;    //standing centre x
let stY = innerHeight / 2; //standing centre y
let stR = 100 // radius

function animateEverythingOut(){
    requestAnimationFrame(animateEverythingOut)
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

//line in angle
c.beginPath()
c.moveTo(stX,stY)
c.lineTo(x,y)
//stroke method
c.strokeStyle = "red"
c.stroke()

//line vertical line
c.beginPath()
c.moveTo(stX,stY)
c.lineTo(stX,y)
//stroke method
c.strokeStyle = "red"
c.stroke()

//line horizontal line
c.beginPath()
c.moveTo(innerWidth / 2,y)
c.lineTo(x,y)
//stroke method
c.strokeStyle = "red"
c.stroke()

// conditions for bouncing from walls
if (x + radius > innerWidth || x - radius < 0){
    dx = -dx
}

if (y + radius > innerHeight  || y - radius < 0){
    dy = -dy
}

//updating the location 
x += dx
y += dy

//------------------coordinates feedback-------------

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


//vertikalas line length feedback
c.fillStyle = "black"
c.font = "10px Arial "
xScore = "b length="  + (stY - y)
c.fillText(xScore,stX, stY -(stY - y)/2 - 10)

//horizontal line length feedback
c.fillStyle = "black"
c.font = "10px Arial "
xScore = "a length="  + (stX - x)
c.fillText(xScore, x + (stX-x) / 2, y - 10)

//the angled line lenght & distance between circles feedback
c.fillStyle = "black"
c.font = "10px Arial "

xScore = " h length="  +
 Math.round(Math.sqrt(Math.pow(stX - x, 2)+Math.pow(stY - y,2))) +
 " rl distance=" + 
 Math.round((Math.sqrt(Math.pow(stX - x, 2)+Math.pow(stY - y,2))) -
 stR - radius)

c.fillText(xScore, x + (stX-x) / 2, stY -(stY - y)/2 )

}

animateEverithingOut()
