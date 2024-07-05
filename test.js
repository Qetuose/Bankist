const Converting_and_Checking_Numbers = function () {
  console.log(23 === 23.0);

  //Conversion
  console.log(Number('23'));
  console.log(+'23');

  //Parsing
  console.log(Number.parseInt('30px', 10));
  console.log(Number.parseInt('2.5rem', 10));
  console.log(Number.parseFloat('2.5rem', 10));

  console.log(Number.isNaN(20));
  console.log(Number.isNaN(+'20X'));
  console.log(Number.isNaN(23 / 0));

  //Check if value is a number
  console.log(Number.isFinite(20));
  console.log(Number.isFinite('20'));
  console.log(Number.isFinite(+'20X'));
  console.log(Number.isFinite(23 / 0));

  console.log(Number.isInteger(23));
  console.log(Number.isInteger(23.0));
  console.log(Number.isInteger(23 / 0));
};

// Converting_and_Checking_Numbers();

const Math_and_Rounding = function () {
  console.log(Math.sqrt(25));
  console.log(8 ** (1 / 3));

  console.log(Math.max(5, 16, 15, 66, 12));
  console.log(Math.max(5, 16, '15', '66', 12));
  console.log(Math.max(5, 16, '15', '66px', 12));

  console.log(Math.min(5, 16, 15, 66, 12));

  console.log(Math.PI * Number.parseFloat('10px') ** 2);
  console.log(Math.floor(Math.random() * 6 + 1));

  const randomInt = (min, max) =>
    Math.trunc(Math.random() * (max - min) + 1) + min;
  randomInt(1, 10);

  //Rounding integers
  console.log(Math.round(23.3));
  console.log(Math.round(23.9));

  console.log(Math.ceil(23.3));
  console.log(Math.ceil(23.9));

  console.log(Math.floor(23.3));
  console.log(Math.floor(23.9));

  console.log(Math.trunc(-23.3));
  console.log(Math.floor(-23.9));

  //Rouding decimals
  console.log((2.7).toFixed(0));
  console.log((2.7).toFixed(3));
  console.log(+(2.755).toFixed(2));
};

// Math_and_Rounding();

const Remainder_Operator = function () {
  console.log(5 % 2);
  console.log(5 / 2);

  console.log(8 % 3);
  console.log(8 / 3);

  console.log(6 % 2);
  console.log(6 / 2);

  console.log(7 % 2);
  console.log(7 / 2);

  const isEven = n => n % 2 === 0;
  console.log(isEven(8));
  console.log(isEven(13));

  labelBalance.addEventListener('click', () => {
    [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
      if (i % 2 === 0) row.style.backgroundColor = 'orangered';
      if (i % 3 === 0) row.style.backgroundColor = 'blue';
    });
  });
};

// Remainder_Operator();

const Numeric_Separators = function () {
  //
  const diameter = 284_721_512_500;
  console.log(diameter);

  const priceCents = 345_99;
  console.log(priceCents);

  const transferFee = 15_00;

  const PI = 3.1415;
  console.log(PI);

  console.log(Number('230_000'));
  console.log(parseInt('230_000'));
};

// Numeric_Separators();

const Working_BigInt = function () {
  console.log(2 ** 53 - 1);
  console.log(Number.MAX_SAFE_INTEGER);

  console.log(53295823502309235412412411231232n);
  console.log(BigInt(53295823502309235412412411231232));

  console.log(10000n + 10000n);
  console.log(82148472148127841232632623n * 13512512512n);

  const huge = 233515215215215n;
  const num = 23;

  console.log(huge * BigInt(num));

  //Exceptions
  console.log(20n > 15);
  console.log(20n === 20);
  console.log(typeof 20n);
  console.log(20n == 20);

  console.log(huge + ' Is really big');

  //Divisions

  console.log(11n / 3n);
  console.log(10 / 3);
};

// Working_BigInt();

const Creating_Dates = function () {
  //Create a date
  const now = new Date();
  console.log(now);

  console.log(new Date('Jul 04 2024 16:32:12'));
  console.log(new Date('December 24, 2015'));
  console.log(new Date(account1.movementsDates[0]));

  console.log(new Date(2037, 10, 19, 15, 23, 6));
  console.log(new Date(2037, 10, 31));
  console.log(new Date(0));
  console.log(new Date(3 * 24 * 60 * 60 * 1000));

  //Working with dates

  const future = new Date(2037, 10, 19, 15, 23, 6);
  console.log(future);
  console.log(future.getFullYear());
  console.log(future.getMonth());
  console.log(future.getDate());
  console.log(future.getDay());
  console.log(future.getHours());
  console.log(future.getMinutes());
  console.log(future.getSeconds());
  console.log(future.toISOString());
  console.log(future.getTime());
  console.log(new Date(2142249786000));
  console.log(Date.now());
  future.setFullYear(2056);
  console.log(future);
};
// Creating_Dates();

const operation_dates = function () {
  const future = new Date(2037, 10, 19, 15, 23, 6);
  console.log(+future);

  const daysPassed = (date1, date2) =>
    Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
  const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4, 10, 8));
  console.log(days1);
};

// operation_dates();

const Internationalizing_Numbers = function () {
  const num = 3683464.12;

  const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'EUR',
    // useGrouping: false,
  };

  console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
  console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
  console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
  console.log(
    'Browser: ',
    new Intl.NumberFormat(navigator.language, options).format(num)
  );
};
// Internationalizing_Numbers();

const ingredients = ['olives', 'spinach'];

const Timers = function () {
  //SetTimeout
  const pizzaTimer = setTimeout(
    (ing1, ing2) =>
      console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
  );
  console.log('Waiting...');

  if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

  //SetInterval
  setInterval(() => {
    const now = new Date();
    const clock = {
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    };
    console.log(`${clock.hour}:${clock.minute}:${clock.second}`);
  }, 1000);
};

// Timers();
