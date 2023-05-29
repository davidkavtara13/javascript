function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
  
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
      var next = sequence[i - 1] + sequence[i - 2];
      sequence.push(next);
    }
  
    return sequence;
  }
  
  var n = 10;
  var result = fibonacci(n);
  console.log(result);


  function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  }
  
  for (var i = 1; i <= 20; i++) {
    console.log(fizzBuzz(i));
  }




  function num() {
    var num1 = parseInt(prompt("Enter the first number:"));
    var num2 = parseInt(prompt("Enter the second number:"));
  
    var start = Math.min(num1, num2);
    var end = Math.max(num1, num2);
  
    for (var i = start; i <= end; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  

  num();