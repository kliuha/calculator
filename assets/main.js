const button = document.querySelector(".inpb");
button.addEventListener("click",function (){
    let input = document.querySelector(".inpt");
    document.querySelector(".block").innerHTML =  math.evaluate(input.value);
})