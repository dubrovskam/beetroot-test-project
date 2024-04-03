import numValidator from './num-validator.js';

const objects = () => {
  // * Task 1
  const car = {
    brend: 'Nissan',
    model: 'Rogue',
    yearOfProduction: 2017,
    averageSpeed: 100, // km/h
    fuelTankVolume: 50, // liters
    fuelConsumptionPer: 6, // liters/100km
    drivers: ['Mariia'],

    // Метод для виведення характеристик про автомобіль
    showInfo: function () {
      Object.keys(this).forEach((key) => {
        if (typeof this[key] !== 'function') {
          console.log(`${key}: ${this[key]}`);
        }
      });
    },

    // Додавання ім’я водія у список
    addDriver: function (driverName) {
      this.drivers.push(driverName);
      console.log(`Driver ${driverName} added.`);
    },

    // Перевірка водія на наявність його ім’я у списку
    checkDriver: function (driverName) {
      if (this.drivers.includes(driverName)) {
        console.log(`Driver ${driverName} is in the list.`);
      } else {
        console.log(`Driver ${driverName} is not in the list.`);
      }
    },

    // Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
    // Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
    calculateTimeAndFuel: function (distance) {
      const hours = distance / this.averageSpeed;
      const breaks = Math.floor(hours / 4);
      const totalHours = hours + breaks;
      const fuelNeeded = (distance / 100) * this.fuelConsumptionPer;
      console.log(
        `For the distance of ${distance} km: time required - ${totalHours} hours, fuel needed - ${fuelNeeded} liters`
      );
    },
  };

  car.addDriver('Vlad');
  car.addDriver('Anton');

  car.showInfo();

  car.checkDriver('Vlad');
  car.checkDriver('Misha');

  car.calculateTimeAndFuel(400);

  // * Task 2
  const time = {
    hours: 14,
    minutes: 30,
    seconds: 45,

    // Функція для виведення часу на екран
    showTime: function () {
      if (
        numValidator(this.hours) ||
        numValidator(this.minutes) ||
        numValidator(this.seconds)
      )
        return 'incorrect input';

      return `${this.hours}:${this.minutes}:${this.seconds}`;
    },

    // Збільшення годин/хвилин +1 при умові що хвилини/сукунди >= 60
    changedTime() {
      if (this.seconds >= 60);
      this.minutes = this.minutes + Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;

      if (this.minutes >= 60);
      this.hours = this.hours + Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;

      if (this.hours >= 24) {
        this.hours -= 24;
      }
    },

    // Функція для зміни часу на передану кількість секунд
    secondsChange: function (seconds) {
      if (numValidator(seconds)) return 'Incorrect number';

      this.seconds += seconds;
      this.changedTime();
    },

    // Функція для зміни часу на передану кількість хвилин
    minutesChange: function (minutes) {
      if (numValidator(minutes)) return 'Incorrect number';

      this.minutes += minutes;
      this.changedTime();
    },

    // Функція для зміни часу на передану кількість годин
    hoursChange: function (hours) {
      if (numValidator(hours)) return 'Incorrect number';

      this.hours += hours;
      this.changedTime();
    },
  };

  console.log(time.showTime());
  time.secondsChange(25);
  console.log(time.showTime());
  time.minutesChange(65);
  console.log(time.showTime());
  time.hoursChange(2);
  console.log(time.showTime());

  // * Task 3
  const fraction = {
    add: function (numerator1, denominator1, numerator2, denominator2) {
      const newNumerator =
        numerator1 * denominator2 + numerator2 * denominator1;
      const newDenominator = denominator1 * denominator2;
      return simplifyFraction(newNumerator, newDenominator);
    },

    subtract: function (numerator1, denominator1, numerator2, denominator2) {
      const newNumerator =
        numerator1 * denominator2 - numerator2 * denominator1;
      const newDenominator = denominator1 * denominator2;
      return simplifyFraction(newNumerator, newDenominator);
    },

    multiply: function (numerator1, denominator1, numerator2, denominator2) {
      const newNumerator = numerator1 * numerator2;
      const newDenominator = denominator1 * denominator2;
      return simplifyFraction(newNumerator, newDenominator);
    },

    divide: function (numerator1, denominator1, numerator2, denominator2) {
      const newNumerator = numerator1 * denominator2;
      const newDenominator = denominator1 * numerator2;
      return simplifyFraction(newNumerator, newDenominator);
    },
  };

  function simplifyFraction(numerator, denominator) {
    const gcd = findGCD(numerator, denominator); // Функція findGCD призначена для знаходження найбільшого спільного дільника (НСД) двох чисел
    const simplifiedNumerator = numerator / gcd;
    const simplifiedDenominator = denominator / gcd;
    return {
      numerator: simplifiedNumerator,
      denominator: simplifiedDenominator,
    };
  }

  function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }

  // Приклад використання
  console.log('Addition:', fraction.add(3, 4, 2, 5));
  console.log('Subtraction:', fraction.subtract(3, 4, 2, 5));
  console.log('Multiplication:', fraction.multiply(3, 4, 2, 5));
  console.log('Division:', fraction.divide(3, 4, 2, 5));
};

export default objects;
