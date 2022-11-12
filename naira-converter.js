// descr: A programme that takes 
//in amount and currency and converts it to naira
// return: total amount after conversion

alert("Hello there,welcome to currency converter");
var currency = prompt("what currency do you want to convert?")
if(currency == "USD"){
    var amount = prompt("How much do you want to convert?");
    alert("your money is" + " " + amount * 700);

}else if (currency == "GBP"){
   var amount = prompt("how much do you want to convert?");
    alert("your money is" + " " + amount * 800);

}else alert("sorry, we do not convert such currency here");
