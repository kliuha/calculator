const button = document.querySelector(".inpb");
console.log(button)
button.addEventListener("click",function (){
    let input = document.querySelector(".inpt");
    document.querySelector(".block").innerHTML =  input.value;
})