/* 1. Задание
Найдите и исправьте ошибки в коде

'use strict';

var x = prompt('Введите X','1'), не было запятой
    y = prompt('Введите Y','1');

alert('Сумма: ' + x + y);*/

/* 2. Задание
Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Распечатайте все три.

var x = 5,
    y = 3*x,
    z = x + y;

alert('x = ' + x +' y = ' + y + ' z = ' + z);*/

/* 3.Задание
Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов. Имя и фамилию выводите заглавными буквами независимо от того, как они были введены.

var firstName = prompt('Input First Name','John'),
    lastName = prompt('Input Last Name','Doe');

alert('What\'s up ' + firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase() + lastName.slice(1)); // можно было использовать символ с текста задания "’", он отличается от одинарных ковычек.*/

/* 4.Задание
Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.

var x = prompt('Введите X','1'),
    y = prompt('Введите Y','1');

alert("Произведение " + (x*y)); // TODO: спросить за модальное окно.
alert("Частное " + (x/y));
alert("Разность " + (x-y));
alert("Сложение " + (+x + +y));*/

/* 5.Задание
Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным (true/false). Результат отобразите в alert.
var x = prompt('Введите X','1'),
    y = x%2;
    if (y == 0) {
      alert('Четное');
    } else {
      alert('Нечетное');
    }*/

//6. калькулятор


/*7. Задание
У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt. Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.
var apples_start = prompt('У Чжуан-цзы были яблоки (укажите количество)','10'),
    apples_eated = prompt('Цзэн-Цзы съел несколько яблочек (укажите количество, оно должно быть меньше или равно количеству яблок Чжуан-цзы)','8');
alert('Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает');
alert('Сейчас мы посчитаем сколько всего яблок осталось и кто прав.')
var apples_left = apples_start - apples_eated;
alert('Ого-го у Чжуан-цзы осталось ' + apples_left + ' яблок(а)!')
if (apples_left == 0) {
  alert('Похоже Чжуан-цзы прав,  Цзэн-Цзы все захавал.');
} else {
  alert('Похоже  Цзэн-Цзы прав, Чжуан-цзы жлоб.');
}*/

/* 8. Задание
На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.

var first = prompt('Введите первый столбец','50px'),
    second = prompt('Введите второй столбец','30px'),
    third = prompt('Введите третий столбец','20px'),
    result = Math.max(parseInt(first), parseInt(second), parseInt(third));

alert('Больший столбец ' + result + 'px');*/

/* 9.Задание
Космический корабль летит с Земли на Луну. Расстояние равно 384,400 км. Скорость полета корабля определяется в prompt. Рассчитайте, за какое время ваш космический корабль доберется до Луны.

alert('Вы летите на Луну!');

var speed = prompt('Какова скорость Вашего коробля, км/ч: ','5000');
const distance = 384000;
var time = distance/speed;

alert('Вам потребуется ' + time.toFixed(2) + " часа(ов), чтобы добраться до Луны!")*/

/* 10.Задание
Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения. Расчеты сделайте в одном выражении! (То есть в скобках метода alert.)

var x = Math.random(),
    y = prompt('Введите y','3');

alert('x < y = ' + ((x = Math.round(100*x)) < y) + ' x = ' + x + ' y = ' + y);*/

//тест +x===0 1 и 2, typeof 3 и 4, остальные нет, let math?