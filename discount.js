//Shop discount - Description on Graphic

//0-5000======>0%
//5001-7000===>5%
//7001-9000===>10%
//more than 9000==>20%

let amount = 7000;
let dis = 0;

if(amount>0 && amount<=5000){
    dis = 0
}else if(amount>5000 && amount<=7000){
    dis= 5
}else if(amount>7000 && amount<=9000){
    dis = 10
}else if(amount>9000){
    dis = 20
}

amount = amount - (dis*amount)/100;
console.log(amount)