// * Task 1
const sum = 0.1 + 0.2;
console.log('The sum is equal:', sum.toFixed(1));

// * Task 2
const firstNumber = 2;
const secondNumber = Number('1');
console.log('Answer:', firstNumber + secondNumber);

// * Task 3
// 1 GB is equal to 1024 megabytes
const flashDriveCapacityGB = Number(
  prompt('Specify the volume of the flash drive in GB')
);
const fileSizeMB = 820;
const flashDriveCapacityMB = flashDriveCapacityGB * 1024;
const totalFiles = Math.floor(flashDriveCapacityMB / fileSizeMB);
console.log(
  `A flash drive with a capacity of ${flashDriveCapacityGB} GB can store about ${totalFiles} files with a size of ${fileSizeMB} MB`
);

// * Task 4
const amountOfMoney = Number(
  prompt('Enter the amount of money in your wallet')
);
const productPrice = Number(prompt('Specify the price of the chocolate bar'));
const productQuantity = Math.floor(amountOfMoney / productPrice);
console.log(
  'The quantity of goods you will receive',
  productQuantity,
  'and your remaining balance is',
  amountOfMoney - productPrice * productQuantity
);

// * Task 5
let digit = Number(prompt('Enter a three-digit number:'));

if (isNaN(digit) || digit < 100 || digit > 999) {
  console.log('The number is incorrect, enter a three-digit number');
} else {
  const lastDigit = digit % 10;
  digit = Math.floor(digit / 10);

  const secondDigit = digit % 10;
  digit = Math.floor(digit / 10);

  const firstDigit = digit;

  const reversedNumber = '' + lastDigit + secondDigit + firstDigit;
  console.log('Number backwards:', reversedNumber);
}

// * Task 6
// відсотки = сума_вкладу * (процентна_ставка / 100) * (кількість_місяців / 12)
const depositAmount = Number(prompt('Enter the amount of your bank deposit'));
const numberOfMonths = 2;
const depositInterest = 5;
let accruedInterest =
  depositAmount * (depositInterest / 100) * (numberOfMonths / 12);
console.log(
  `Amount of accrued interest for ${numberOfMonths} months: ${accruedInterest.toFixed(
    2
  )}`
);
