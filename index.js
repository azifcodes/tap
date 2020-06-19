const btn = document.getElementById("btn");
const count = document.getElementById("count");

var cnt = 0;

btn.onclick = function ()
{
    cnt++;
    count.textContent = cnt;
}
