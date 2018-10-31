// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy


// proxy function calls : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply


function sum(a, b) {
    return a + b;
  }

  const handler1 = {
    apply: function(target, thisArg, argumentsList) {
      console.log(`Calculate sum: ${argumentsList}`);
      // expected output: "Calculate sum: 1,2"

      return target(argumentsList[0], argumentsList[1]) * 10;
    }
  };

  const proxy1 = new Proxy(sum, handler1);

  const handler2 = {
    apply: function(target, thisArg, argumentsList) {
        console.log(Array.isArray(argumentsList));
      console.log(`Calculate sum: ${argumentsList}`);
      // expected output: "Calculate sum: 1,2"

      return target.apply(thisArg, argumentsList);
    }
  };

  const proxy2 = new Proxy(sum, handler2);

  console.log('No proxy \n', sum(1, 2), '\n\n');
  // expected output: 3
  console.log('Proxy #1 \n', proxy1(1, 2), '\n\n');
  // expected output: 30
  console.log('Proxy #2 \n', proxy2(1, 2), '\n\n');
  // expected output: 3
