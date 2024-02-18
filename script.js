const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");
btn.addEventListener("click", Bulb);
function Bulb() {
    if(btn.textContent==="ON"){
        bulb.src="98765432.jpeg";
        bulb.width="200";
        bulb.height="200"
        btn.textContent="OFF";
    }
    else{
        bulb.src="sindhu1.jpg";
        btn.textContent="ON";
    }
}
