const btn = document.getElementById("btn");
const count = document.getElementById("count");

var cnt = 0;

btn.onclick = function()
{
		let clr = Math.floor(Math.random()*16777215).toString(16);
		
		this.style.borderColor = "#" + clr;
		this.style.color = "#" + clr;
		this.style.boxShadow = "0 0 10vh #" + clr;
		
		cnt++;
		count.textContent = cnt;
}
