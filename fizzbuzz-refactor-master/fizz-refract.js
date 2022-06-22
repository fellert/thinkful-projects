var x = prompt("Enter a number");
var parse = parseInt(x);

if(isNaN(x)) {
    alert("That wasn't a number - enter a number");
    
}
else {
    var i;
    for (i = 1; i <= parse; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.write("FizzBuzz <br />");
        }
        else if (i % 3 === 0) {
            document.write("Fizz <br />");
        }
        else if (i % 5 === 0) {
            document.write("Buzz <br />" );
        }
        else {
            document.write(i + " <br />")
        }
    }
}
    