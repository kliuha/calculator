const button = document.querySelector(".inpb");
button.addEventListener("click",function (){
    let input = document.querySelector(".inpt");
    let cnt = 0;
    for (letter in input.value){
        cnt++
    }
    document.querySelector(".block").innerHTML =  cnt;
})