//Задание 1
// Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.
/*let name = ' ';

function p() {
  name = prompt('Ввидеите имя', 'Вано');
  return name; // я специально расписал функцию подробней, впорос целесообразно здесь использовать return?
};

function a() {
  alert('Hello ' + name);
};

function d() {
  debugger;
};

d();
p();
a(name);*/

//Задание 2
// Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:

/*let max = (a, b) => {
  return a > b ? a : b;
}
console.log( max(0, -1) );*/

//Задание 3
// Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

/*function min() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  };
  arr.sort();
  return arr[0];
};

console.log( min(0, -1, 100, 500, 100500) );*/

//Задание 4
// Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.


/*function newShift(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++ ) {
    newArr[i-1] = arr[i];
  };
  return newArr;
};
let arr = [1, 2, 3, 4];

console.log(newShift(arr));*/


//Задание 5
// Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

/*function newPush() {
  let newArr = [];
  for (let i = 0; i < arr.length; i++ ) {
    newArr[i] = arr[i];
  };
  for (let j = arr.length; j < (arr.length + arguments.length - 1); j++) {
    newArr[j] = arguments[(j - arr.length) + 1];
  }
  return newArr;
};

let arr = [1, 2, 3, 4];// проверка
console.log(newPush(arr, 5, 5, 5, 5, 5, 5)); */

//Задание 6
// Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

/*function analogObjassign() {
  for (let i = 1; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      arguments[0][key] = arguments[i][key];
  }
}
  return arguments[0];
};
let obj1 = {a:1, b:2};
let newobj = analogObjassign(obj1, {c:3}, {d:4}, {e:5});
console.log(newobj);*/

//Задание 7
// Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в HTML текст в виде:
// 				<имя_автора>, <дата>
// 				<текст_сообщения>

/*function setComment(date, message, author) {
  if (date == '' || message == ''|| date == null || message == null) {
    return alert('Данные переданы некорректно');
  } else {
    author = author || 'Anonymous';
  }
  document.body.innerHTML = (author + ', ' + date + '<br />' + message);
  return;
};
// let data  = prompt('Введите дату', new Date());
// let message = prompt('Введите сообщение');
// setComment(data, message);

setComment('2016-11-02', 'Everything is ok', 'John');
// John, 2016-12-22
// Everything is ok
//
//setComment('2016-11-02', 'You could do it better!');
//
// Anonymous, 2016-12-22
// You could do it better!*/


//Задание 8
// Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное, и возвращает их
//
// var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
// console.log( result ); // "542 -214"

/*function highAndLow() {
  let arr = arguments[0].split(' ');
  arr.sort((a, b) => a - b ); // не совсем понял как это работает.
  res = ('min = ' + arr[0] + ' max = ' + arr[arr.length - 1])
  return res;
}
let result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log(result);*/


//Задание 9
// Найдите и исправьте ошибки в коде:

/*function foo() {
	function bar(a) {
		const b = 3;  // неправильно указанна переменная.
		return b + a;
	}
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21*/
