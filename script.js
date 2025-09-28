function getArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000); // Initial 3 second delay
      });
    }

    // Step 1: Filter out odd numbers
    function filterEvenNumbers(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter(num => num % 2 === 0);
          document.getElementById("output").textContent = evenNumbers;
          resolve(evenNumbers);
        }, 1000); // 1 second delay
      });
    }

    // Step 2: Multiply even numbers by 2
    function multiplyByTwo(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = arr.map(num => num * 2);
          document.getElementById("output").textContent = multiplied;
          resolve(multiplied);
        }, 2000); // 2 second delay
      });
    }

    // Execution with promise chaining
    getArray()
      .then(filterEvenNumbers)
      .then(multiplyByTwo);