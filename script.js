//your JS code here. If required.
const wholecontainer=document.querySelector(".container")
for(var i=1;i<=800;i++){
	multipleboxes()
	console.log(i)
}
function multipleboxes() {
	const boxes=document.createElement("div")
	boxes.addEventListener("mouseover",addrandomcolor)
	boxes.addEventListener("mouseout",removecolor)
	boxes.classList.add("square")
	wholecontainer.appendChild(boxes)	
}

function addrandomcolor(e) {
	const randomcolor="#"+Math.floor(Math.random()*255*255*255).toString(16).padStart(6,"0");
	console.log(randomcolor.length,randomcolor,e.target)
	setTimeout(()=>{
		e.target.style.backgroundColor=randomcolor
	},0)
	
}
function removecolor(e) {
	setTimeout(()=>{	
		e.target.style.backgroundColor=""
				   },1000)
}

