
let Button1 = document.querySelector(".HexBtn1")
let Button2 = document.querySelector(".HexBtn2")
let copyDiv = document.querySelector(".copycode")

let color1 = "#2FC9FD"
let color2 = "#0319E7"

//function to generate color hex codes

const GenerateHex = () =>{
    const HexCodes = "0123456789ABCDEF";
    let color = "#";
    for(let i =0; i < 6; i++){
      color = color + (HexCodes[Math.floor(Math.random() * 16)]);   
     
    }
    return color;     
}
const GenerateBtn1 = () => {
    color1 = GenerateHex();
    Button1.innerHTML = color1
    Button1.style.backgroundColor = color1
    document.body.style.backgroundImage = `linear-gradient(to right top, ${color1}, ${color2})`;
    copyDiv.innerHTML = `background: linear-gradient(to right top, ${color1}, ${color2})`;
}

const GenerateBtn2 = () => {
    color2 = GenerateHex();
    Button2.innerHTML = color2
    Button2.style.backgroundColor = color2
    document.body.style.backgroundImage = `linear-gradient(to right top, ${color1}, ${color2})`;
    copyDiv.innerHTML = `background: linear-gradient(to right top, ${color1}, ${color2})`;
}

Button1.addEventListener("click", GenerateBtn1)
Button2.addEventListener("click", GenerateBtn2)

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
});

//make child buttons in div

for(let i = 1; i <= 5; i++){
    //<button><button>
    let tile = document.createElement("button");
    //assign (id = "Btn1-Btn5") in button
    tile.id = `Btn${i}`;
    document.querySelector(".Btn").appendChild(tile).innerHTML = i;

}


//function for Btn1 
const ClickBtn1 = () => {
    Button1.innerHTML = "#FD1D1D"
    Button1.style.backgroundColor =  "#FD1D1D"
    Button2.innerHTML = "#FDBB2D"
    Button2.style.backgroundColor = "#FDBB2D"
    document.body.style.backgroundImage = `linear-gradient(to right top, #FD1D1D, #FDBB2D)`;
    copyDiv.innerHTML = `background: linear-gradient(to right top, #FD1D1D, #FDBB2D)`;
}

//function for Btn2 
const ClickBtn2 = () => {
    Button1.innerHTML = "#051037"
    Button1.style.backgroundColor =  "#051037"
    Button2.innerHTML = "#D612EB"
    Button2.style.backgroundColor = "#D612EB"
    document.body.style.backgroundImage = `linear-gradient(to right top, #051037, #D612EB)`;
    copyDiv.innerHTML = `background: linear-gradient(to right top, #051037, #D612EB)`;
}

//function for Btn3 
const ClickBtn3 = () => {
    Button1.innerHTML = "#1D4350"
    Button1.style.backgroundColor =  "#1D4350"
    Button2.innerHTML = "#A8EB12"
    Button2.style.backgroundColor = "#A8EB12"
    document.body.style.backgroundImage = `linear-gradient(to right top, #1D4350, #A8EB12)`;
    copyDiv.innerHTML = `background: linear-gradient(to right top,  #1D4350, #A8EB12)`;
}

//function for Btn4 
const ClickBtn4 = () => {
    Button1.innerHTML = "#F5E906"
    Button1.style.backgroundColor =  "#F5E906"
    Button2.innerHTML = "#217A00"
    Button2.style.backgroundColor = "#217A00"
    document.body.style.backgroundImage = `linear-gradient(to right top, #F5E906, #217A00)`;
    copyDiv.innerHTML = `background: linear-gradient(to right top, #F5E906, #217A00)`;
}

//function for Btn5
const ClickBtn5 = () => {
    Button1.innerHTML = "#D815EC"
    Button1.style.backgroundColor =  "#D815EC"
    Button2.innerHTML = "#C1E703"
    Button2.style.backgroundColor = "#C1E703"
    document.body.style.backgroundImage = `linear-gradient(to right top, #D815EC, #C1E703)`;
    copyDiv.innerHTML = `background: linear-gradient(to right top, #D815EC, #C1E703)`;
}

document.getElementById("Btn1").addEventListener("click", ClickBtn1)
document.getElementById("Btn2").addEventListener("click", ClickBtn2)
document.getElementById("Btn3").addEventListener("click", ClickBtn3)
document.getElementById("Btn4").addEventListener("click", ClickBtn4)
document.getElementById("Btn5").addEventListener("click", ClickBtn5)




