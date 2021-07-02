let number = 0;


let person = false;

function increment(){
    person = true;
    countdown();


}
function decrement(){
    person = false;
    countdown();

}
function countdown(){
    if(person == true){
        number = number + 1;

        document.getElementById("num").innerHTML = number;

    }
    if(person == false && number>0){
        number = number - 1;

        document.getElementById("num").innerHTML = number;
    }
    console.log(number);
}