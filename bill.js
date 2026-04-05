//Bijli Bill - Description on Graphic

// unit              price
//upto 100            4.2rs
//101-200             6rs
//201-400             8rs
//more than 400       13rs

let unit = 800;
let bill = 0;

if(unit<=100){
    bill = 4.2 *unit
}else if(unit>100 && unit<=200){
    bill=(4.2*100)+(unit-100)*6
}else if(unit>200 && unit<=400){
    bill=(4.2*100)+(6*100)+(unit-200)*8
}else if(unit>400){
    bill = (4.2*100)+(6*100)+(8*200)+(unit-400)*13
}

console.log(bill);