var canvas = document.getElementById("sanbox"),
	context = canvas.getContext("2d"),delenie, circle;
delenie = new Path2D();
secStrel = new Path2D();
/* код для создания часов */
// angle - деление
var R = 300/2,d,angle,pX,pY,qX,qY;
for(d = 0; d < 60; ++d)
{
	angle = (d/60)*(2 * Math.PI);
	pX = Math.cos(angle) * R;
	pY = -Math.sin(angle) * R;
	qX = 0.9 * pX;
	qY = 0.9 * pY;
	pX+=R;
	pY+=R;
	qX+=R;
	qY+=R;
	delenie.moveTo(pX,pY);
	delenie.lineTo(qX,qY);
}
context.stroke(delenie);
var date = new Date(),
	hours,minutes,seconds;
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
secondsAngle = (seconds / 60) * (2*Math.PI);
minutesAngle = (minutes / 60) * (2*Math.PI);
hoursAngle = ((hours % 12) / 12) * (2*Math.PI);
secondsAngle = Math.PI/2 - secondsAngle;
minutesAngle = Math.PI/2 - minutesAngle;
hoursAngle = Math.PI/2 - hoursAngle;
sX = Math.cos(secondsAngle) *R;
sY = -Math.sin(secondsAngle) * R;
sX +=R;
sY +=R;
secStrel.moveTo(R,R);
secStrel.lineTo(sX,sY);
context.stroke(secStrel);



