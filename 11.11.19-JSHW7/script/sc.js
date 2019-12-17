//Задание 1
// Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:
// Отфильтруйте пользователей младше 18 лет
// Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
// Сформируйте новый массив, который содержит только полное имя пользователей

/*let arr = [
  {firstname: 'Petya', lastname: 'Pyatochkin', age: 15 },
  {firstname: 'Sergey', middlename: 'Sergeevich', lastname: 'Sergeev', age: 30 },
  {firstname: 'Nikolay', lastname: 'Nikolaev', age: 12 },
  {firstname: 'Jhony', lastname: 'Stone', age: 22 },
  {firstname: 'Vova', middlename: 'Flash', lastname: 'Vladimirskiy', age: 27 },
  {firstname: 'Marsel', lastname: 'Puante', age: 33 },
  {firstname: 'Oliver', lastname: 'Snow', age: 54 },
  {firstname: 'Janna', middlename:'Adolfovna', lastname: 'Friski', age: 30 },
  {firstname: 'Nasta', middlename:'Olegovna', lastname: 'Potapchenko', age: 18 },
  {firstname: 'Amelie', lastname: 'Smith', age: 16 },
];

function adultsFilter(item) {
  if (item.age > 18) {
    return true;
  } return false;
}

let adults = arr.filter(adultsFilter);

arr.forEach(function (element) {
  if (element.middlename === undefined) {
    element.fullName = element.firstname + ' ' + element.lastname;
  } else {
    element.fullName = element.firstname + ' ' + element.middlename + ' ' + element.lastname;
  }
});

let onlyFullName = newArr.map(function(arr2) {  //в задании четко не сказанно должен ли это быть массив объектов или просто массив полных имен.
  return arr2.fullName ;
});*/

//console.log(onlyFullName); //проверки
//console.log(arr);
//console.log(adults);

//Задание 2
// Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
//1. Вариант
/*function cube (x) {
  let result = x;
  if (typeof(x) === 'number') {
    for (let i = 0; i < 2; i++) {
      result = result * x;
    }  return result;
  } return;
};
console.log( cube(2) ); // 8
2. Вариант
function cube(x, n) { // не смог сделать рекурсию без второго параметра.
  if (n == 1) {
    return x;
  } else {
    return x * cube(x, n - 1);
  }
};
console.log( cube(2, 3) ); // 8 */

//Задание 3
// Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.

/*function extraCube(x) {
  if (typeof(x) === 'number') {
    return cube(x);
  } else if (Array.isArray(x)) {
    for (let i = 0; i < x.length; i++) {
      x[i] = cube(x[i]);
    }; return x;
  } else {
    return console.log('fail');
  }
};

console.log( extraCube(2) ); // 8
console.log( extraCube([0, 1, 2, 3]) ); // [0, 1, 8, 27]*/

//Задание 4
// Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback

/*function ask (question, defaultValue, callback) {
  callback(prompt(question, defaultValue));
};

ask('How old are you?', '10', function(response) {
console.log(response);
});*/

//Задание 5
// Создайте объект, описывающий html-разметку. Напишите функцию, которая добавляет разметку в произвольный контейнер на странице.

/*let objDOM = {
  tag: 'section',
  children: [
    {
    tag: 'article',
    children: [
      {
      tag: 'h1',
      content: 'Array.prototype.every()'
    }, {
      tag: 'p',
      content:'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.'
    }
  ]
  },  {
    tag: 'article',
    children: [
      {
      tag: 'h1',
      content: 'Array.prototype.some()'
    }, {
      tag: 'p',
      content:'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.'
    }
  ]
  }, {
    tag: 'article',
    children: [
      {
      tag: 'h1',
      content: 'Array.prototype.reduce()'
    }, {
      tag: 'p',
      content:'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.'
    }
  ]
  }, {
    tag: 'article',
    children: [
      {
      tag: 'h1',
      content: 'Array.prototype.reduceRight()'
    }, {
      tag: 'p',
      content:'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.'
      }
    ]
    }
  ]
};

function addToDOM(obj, newTag) {
  let target = document.body;
  //let target = newTag === undefined ? document.body : document.querySelector(newTag); // не работает .

	let	newObjItem = document.createElement(obj.tag);

	if ('content' in obj) {
		newObjItem.innerText = obj.content;
	}

	if ('children' in obj && Array.isArray(obj.children)
		&& obj.children.length > 0) {
		let childrenItems = obj.children;

		for (let i = 0; i < childrenItems.length; i++) {
			addToDOM(childrenItems[i], newObjItem);
		}
	}

	target.appendChild(newObjItem);
}

addToDOM(objDOM); */

// <section id="methods">
// 	<article>
// 		<h1>Array.prototype.every()</h1>
// 		<p>Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.some()</h1>
// 		<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.reduce()</h1>
// 		<p>Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.reduceRight()</h1>
// 		<p>Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.</p>
// 	</article>
// </section>

//Задание 6
// Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте метод every или some


/*function checkNumber(arr) {
  return arr.every(elem => isFinite(elem));
}

console.log( checkNumber([1, 2, '3', 'a']) ); // false
console.log( checkNumber([1, 2, '3', '4']) ); // true*/

// Замыкания
//Задание 1
// Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:

/*function createTimer() {
let t0 = performance.now();
  return function() {
    let t1 = performance.now();
    let result = t1 - t0;
    return result;
  }
}

var timer = createTimer();
 alert('!');  // код, время выполнения которого нужно измерить
 alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()*/


//Задание 2
// Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

/*function createAdder(arg1) {
  return function(arg2) {
    return arg1 + arg2;
  }
}

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10*/

// Level Up
//
// <section id="methods">
// 	<article>
// 		<h1>Array.prototype.every()</h1>
// 		<p>Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.some()</h1>
// 		<p>Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.reduce()</h1>
// 		<p>Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.</p>
// 	</article>
// 	<article>
// 		<h1>Array.prototype.reduceRight()</h1>
// 		<p>Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.</p>
// 	</article>
// </section>
//
// Создайте представленную выше структуру в HTML. Средствами JS DOM API переберите структуру и создайте из нее объект данных. Распечатайте полученный объект в консоли:
//
