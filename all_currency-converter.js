// Descr: An application that takes in the currency you want to change,
// the currency you desire to get and the amount you desire to change.
// Return: Return the amount of the deired currency with the currency code you want to change
// concatinated after it.

alert("Hi there, welcome to currency converter");
var currency = prompt("What currency do you want to convert? e.g USD");
if(currency == "USD"){
    var currency = prompt("what currency do you want to convert to?");
        if(currency == "naira"){
            var amount = prompt("How much do you want to convert?");
            alert ("your money is" + " " + amount * 700 + "#"); 
        }else if(currency == "GBP"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount * 800 + "GBP");
        }else if(currency == "CNY"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount * 63 + "CYN");
        }

}else if (currency == "naira"){
    var currency = prompt("what currency do you want to convert to?");
        if(currency == "USD"){
            var amount = prompt("How much do you want to convert?");
            alert ("your money is" + " " + amount/700 + "USD");
        }else if(currency == "GBP"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount/800 + "GBP");
        }else if(currency == "CNY"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount * 0.14 + "CYN");
        }
    }else if (currency == "#"){
        var currency = prompt("what currency do you want to convert to?");
            if(currency == "USD"){
                var amount = prompt("How much do you want to convert?");
                alert ("your money is" + " " + amount/700 + "USD");
            }else if(currency == "GBP"){
                var amount = prompt("How much do you want to convert?");
                alert("your money is" + " " + amount/800 + "GBP");
            }else if(currency == "CNY"){
                var amount = prompt("How much do you want to convert?");
                alert("your money is" + " " + amount * 0.14 + "CYN");
            }

    }else if (currency == "GBP"){
    var currency = prompt("what currency do you want to convert to?");
        if(currency == "USD"){
            var amount = prompt("How much do you want to convert?");
            alert ("your money is" + " " + amount * 1.18 + "USD");
        }else if(currency == "naira"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount * 800 + "#");
        }else if(currency == "#"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount * 800 + "#");
        }else if(currency == "CNY"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount * 8.4 + "CYN");
        }

}else if (currency == "CYN"){
    var currency = prompt("what currency do you want to convert to?");
        if(currency == "USD"){
            var amount = prompt("How much do you want to convert?");
            alert ("your money is" + " " + amount/63 + "USD");
        }else if(currency == "naira"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount /0.14+ "#");
        }else if(currency == "#"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount /0.14+ "#");
        }else if(currency == "GBP"){
            var amount = prompt("How much do you want to convert?");
            alert("your money is" + " " + amount/8.4 + "GBP");
        }

}else alert("error, please enter the correct currency code e.g #");