//check the if the given number  is leap year or not

let year = 2000;

if(year % 400===0){
    console.log("leap year")
}else if(year%100===0){
    console.log("no leap year")
}else if(year %4===0){
    console.log("leap year");
}else{
    console.log("no leap year")
}