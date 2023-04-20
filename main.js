const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const haracter = document.querySelector("#character")
const ans = document.querySelector("#ans")
const btn = document.querySelector("#btn")


btn.addEventListener("click", function () {
    let num3 =0;
    let num1 = +input1.value;
    let num2 = +input2.value;
    if(character.value == "+"){
        num3 = num1+num2;
    }
    if(character.value == "-"){
        num3 = num1-num2;
    }
    if(character.value == "*"){
        num3 = num1*num2;
    }
    if(character.value == "/"){
        num3 = num1/num2;
    }
    ans.innerHTML=num3;
});