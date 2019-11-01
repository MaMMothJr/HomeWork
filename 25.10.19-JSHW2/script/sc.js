/*//Задание 1.
//Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел. Запишите алгоритм программно: создайте три переменные с любыми числовыми значениями; используя только вложенные условные операторы if (НЕ логические операторы), найдите минимальное число и отобразите на экране его значение.
let x = +prompt('Enter X', 1),
    y = +prompt('Enter Y', 1),
    z = +prompt('Enter Z', 1);

    if (x < y) {
      if (x < z) {
        alert('x');
      } else {
        alert('z');
      }
    } else {
      if (y < z) {
        alert('y');
      } else {
        alert('z');
      }
    }*/

/*//Задание 2.
//По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. Проверить и вывести на экран, улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная, отрицательная или ноль).
let x = +prompt('Введите скорость улитки', 0);

if (x == 0) {
  alert('Похоже улитка стоит на месте');
} else if (x > 0) {
  alert('Похоже улитка мчится вперед со скоростью - ' + x + ' км в час');
} else if (x < 0){
  alert('Похоже улитка катиться назад');
} else {
  alert('Похоже Вы задали не правильное значение')
}*/

/*// Задание 3.
// У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

let x = +prompt('Сколько у Вас денег?', 0),
    y = +prompt('Сколько у Вашего друга денег?',0);

const tiketToMalta = 500;
const beer = 20;

if ((x + y) < tiketToMalta && (x + y) >= beer ) {
  alert('Идем за пивом!');
} else if ((x + y) >= beer) {
  alert('Летим на Мальту!')
} else {
  alert('Пошли работать, нищеброд.');
}*/

/*// Задание 4.
// В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 30, в alert выводится “Выслать повестку”.

let age = +prompt('Введите возраст', 18 );

age >= 20 && age <= 30 ? alert('Выслать повестку'): alert('хаха, гуляем');*/

/*// Задание 5.
// Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете

let busNumber = +prompt('Введите номер подъехавшей маршрутки', 7);
const busToHome1 = 7;
const busToHome2 = 225;
const busToHome3 = 255;

busNumber == busToHome1 || busNumber == busToHome2 || busNumber == busToHome3 ? alert('Я їду додому!') : alert('Не наша, ждем-с.');*/

/*// Задание 6.
// В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.

let today = new Date('2019-10-31');
let day = today.getDay();

day == 6 || day == 0 ? alert('Выходные - отдыхаем') : alert('Бегом работать, раб!');*/ // TODO: Спросить за getday;

// Задание 7.
// Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.

// let name = prompt('Введите имя', 'Нина');
//
// isNaN(name) ? alert('Привет: ' + name) : alert ('Ошибка ввода');

/*//Задание 8
//Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.

let question = prompt('Что будем конвертировать: USD, RUB, EUR, PLN, GBP?', 'USD'),
    currency = question.toUpperCase(),
    value = +prompt('Сколько?'),
    result;

switch (currency) {
  case 'USD':
    result = value * 24.95;
    alert('Вы получите ' + result + ' грн.');
  break;
  case 'RUB':
    result = value * 0.39;
    alert('Вы получите ' + result + ' грн.');
  break;
  case 'EUR':
    result = value * 27.85;
    alert('Вы получите ' + result + ' грн.');
  break;
  case 'PLN':
    result = value * 6.61;
    alert('Вы получите ' + result + ' грн.');
  break;
  case 'GBP':
    result = value * 32.71;
    alert('Вы получите ' + result + ' грн.');
  break;
  default:
    alert('Неправильно указана валюта');
}*/

/*//Задание 9.
// Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.

let greeting = ' ',
    question = prompt('Choose your language (ru, en, de)', 'en'),
    lang = question.toLowerCase();

// if-else
    // if (lang == 'ru') {
    //   greeting = 'Приветствую!';
    // } else if (lang == 'en') {
    //   greeting = 'Greeting!';
    // } else if (lang == 'de') {
    //   greeting = 'Grüße!';
    // } else {
    //   greeting = 'Wrong language';
    // }
    // alert(greeting);
switch (lang) {
  case 'ru':
  greeting = 'Приветствую!';
  break;
  case 'de':
  greeting = 'Grüße!';
  break;
  case 'en':
  greeting = 'Greeting!';
  break;
  default:
  greeting = 'Wrong language';
}
alert(greeting);*/

/*//Задание 10.
//В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = new Date().getMonth();

if (month == 0 || month == 1 || month == 11) {
  alert('Сейчас Зима!');
} else if (month == 2 || month == 3 || month == 4) {
  alert('Сейчас Весна!');
} else if (month == 5 || month == 6 || month == 7) {
  alert('Сейчас Лето!');
} else {
  alert('Сейчас Осень!');
}*/

/*// Задние 11.
// Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.

let lang = prompt('Choose your language ru or en', 'ru');
    day = +prompt('What day of the week (0-6)', 5 ),
    result = ' ';

if (lang == 'ru') {
  switch (day) {
    case 0:
      result = 'Воскресенье';
    break;
    case 1:
      result = 'Понедельник';
    break;
    case 2:
      result = 'Вторник';
    break;
    case 3:
      result = 'Среда';
    break;
    case 4:
      result = 'Четверг';
    break;
    case 5:
      result = 'Пятница';
    break;
    case 6:
      result = 'Суббота';
    break;
    default:
      result = 'Непарвильно введeн день!';
  }
} else if ( lang == 'en') {
    switch (day) {
      case 0:
        result = 'Sunday';
      break;
      case 1:
        result = 'Monday';
      break;
      case 2:
        result = 'Tuesday';
      break;
      case 3:
        result = 'Wednesday';
      break;
      case 4:
        result = 'Thursday';
      break;
      case 5:
        result = 'Friday';
      break;
      case 6:
        result = 'Saturday';
      break;
      default:
        result = 'Wrong day!';
  }
} else {
  result = 'something пошло не так...';
}
alert(result);*/

/*//Задание 12.
//Найти ошибку.

var x = +prompt('x', 0); // нужно привести к числу или свитч не заработает.
var error = null;

if (isNaN(x)) {
    error =  'Не математическая операция';
} else {
switch (x) {
    case 0: error = 'На ноль делить нельзя'; break; //отсуствовал break
    case 1: error = 'На единицу делить бессмысленно'; break;
   }
}

if (x == 0 || x == 1 || isNaN(x)) { //неправильно было заданно условие. 
    alert(error);
} else {
    alert(100 / x);
}*/ // 12 задание не решенно.

// в тесте вопросы по свитчам не согласен // TODO: спросить на занятии.
