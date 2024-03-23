const functions = () => {
  // * Task 1
  function countArgs(...args) {
    console.log(args.length);
  }

  countArgs(1);
  countArgs(1, 3);
  countArgs(1, 3, 'b');

  // * Task 2
  const compareNumbers = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };

  console.log(compareNumbers(4, 8));
  console.log(compareNumbers(8, 8));
  console.log(compareNumbers(9, 8));

  // * Task 3
  /* формула обчислення факторіалу числа n: 
  n! = n × (n - 1) × (n - 2) × ... × 2 × 1 це 5! = 5 × 4 × 3 × 2 × 1 = 120 */
  function factorial(n) {
    if (n < 0 || typeof n !== 'number') {
      return 'incorrect number';
    }

    return n != 1 ? n * factorial(n - 1) : 1;
  }

  console.log(factorial(5));
  console.log(factorial('Hello'));

  // * Task 4
  const joinNumbers = (a, b, c) => {
    return +(a.toString() + b.toString() + c.toString());
  };

  console.log(joinNumbers(1, 4, 9));

  // * Task 5
  const calcArea = (x, y = x) => {
    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0) {
      return 'Incorrect number';
    }

    if (!y) {
      return x * x;
    } else {
      return x * y;
    }
  };

  console.log(calcArea(4));
  console.log(calcArea(3, 5));
  console.log(calcArea(-2));
  console.log(calcArea('a', 8));

  // * Task 5
  const perfectNum = (num) => {
    if (typeof num !== 'number' || isNaN(num) || num <= 0) return 'Incorrect';

    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }

    return sum === num;
  };

  console.log(perfectNum(6));
  console.log(perfectNum(36));
  console.log(perfectNum(-10));

  const getPerfectNumInRange = (min, max) => {
    if (
      typeof min !== 'number' ||
      isNaN(min) ||
      typeof max !== 'number' ||
      isNaN(max) ||
      min > max
    )
      return 'Incorrect';

    const perfectNumList = [];
    for (let i = min; i <= max; i++) {
      if (perfectNum(i)) {
        perfectNumList.push(i);
      }
    }
    return perfectNumList;
  };

  console.log(getPerfectNumInRange(1, 50));
  console.log(getPerfectNumInRange(60, 50));
};

export default functions;
