// * Task 1
const age = Number(prompt('How old you are'));

if (isNaN(age) || age === null || age < 0) {
  console.log('Incorrect');
} else {
  switch (age > 0) {
    case age >= 0 && age <= 11: {
      console.log('you are a kid');
      break;
    }
    case age >= 12 && age <= 17: {
      console.log('you are a teenager');
      break;
    }
    case age >= 18 && age <= 59: {
      console.log('you are an adult');
      break;
    }
    default: {
      console.log('you are a pensioner');
    }
  }
}

// * Task 2
const digit = +prompt('Enter a digit from 0 to 9:');

if (digit >= 0 && digit <= 9) {
  switch (digit) {
    case 0: {
      console.log('Special character for 0: )');
      break;
    }
    case 1: {
      console.log('Special character for 1: !');
      break;
    }
    case 2: {
      console.log('Special character for 2: @');
      break;
    }
    case 3: {
      console.log('Special character for 3: #');
      break;
    }
    case 4: {
      console.log('Special character for 4: $');
      break;
    }
    case 5: {
      console.log('Special character for 5: %');
      break;
    }
    case 6: {
      console.log('Special character for 6: ^');
      break;
    }
    case 7: {
      console.log('Special character for 7: &');
      break;
    }
    case 8: {
      console.log('Special character for 8: *');
      break;
    }
    case 9: {
      console.log('Special character for 9: (');
      break;
    }
  }
} else {
  console.log('you entered an incorrect digit');
}

// * Task 3
const purchaseAmount = +prompt('Enter the purchase amount:');

if (purchaseAmount >= 0) {
  let discount = '';

  if (purchaseAmount >= 200 && purchaseAmount <= 300) {
    discount = 3;
  } else if (purchaseAmount > 300 && purchaseAmount <= 500) {
    discount = 5;
  } else {
    discount = 7;
  }

  const discountedAmount = purchaseAmount * (1 - discount / 100);

  console.log(
    `Amount to be paid with a discount ${discount} %:
    ${discountedAmount.toFixed(2)}`
  );
} else {
  console.log('You entered an incorrect amount');
}

// * Task 4
const daysOfWeek = [      
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  "Fri",
  'Sat',
  'Sun',
];

let index = 0;

// Цикл для відображення днів тижня та запиту у користувача
while (true) {
  // Вивести поточний день тижня та запитати користувача
  let userResponse = confirm(
    `${daysOfWeek[index]}. Хочеш побачити наступний день?`
  );

  // Якщо користувач відмовився або досягнуто кінця тижня, вийти з циклу
  if (!userResponse) {
    break;
  }

  // Перейти до наступного дня тижня
  index++;
}
