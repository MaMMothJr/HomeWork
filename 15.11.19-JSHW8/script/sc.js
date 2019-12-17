
//Задание 1
// Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

/* let coffeeMachine = {
  message: 'Your coffee is ready!',
  start: function() {
    setTimeout(() => alert(this.message), 3000);
  }
}
coffeeMachine.start(); */

//Задание 2
// Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

/*let calculator = {    // 2 и 3 задание смотреть вместе
  read: function() {
    this.x = +prompt('Введите первое число', 0);
    this.y = +prompt('Введите второе число', 0);
  },
  sum: function() {
    return  this.x + this.y;
  },
  multi: function() {
    return  this.x * this.y;
  },
  diff: function() {
    return this.x - this.y;
  },
  div: function() {
    return this.x / this.y;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

//Заднаие 3
// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.

let me = {
  x: calculator.x,
  y: calculator.y,
  getSum: function() {
    return  me.x + ' + ' + me.y + ' = ' + calculator.sum.call(me);
  },
  getMulti: function() {
    return  me.x + ' * ' + me.y + ' = ' + calculator.multi.call(me);
  },
  getDiff: function() {
    return me.x + ' - ' + me.y + ' = ' + calculator.diff.call(me);
  },
  getDiv: function() {
    return me.x + ' / ' + me.y + ' = ' + calculator.div.call(me);
  }
}

alert(me.getSum());
alert(me.getDiv());*/

//Задание 4
// Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.

/*function hello() {
  alert(`Hello, ${this.firstname} ${this.lastname}!`);
}

let firstPerson = {
  firstname: 'Jhon',
  lastname: 'Doe'
};

let secondPerson = {
  firstname: 'Adam',
  lastname: 'Smith'
};

hello.call(firstPerson);
hello.call(secondPerson);*/

// Задание 5
// Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

/*let counter = {
  count: 0,
  dec: function() {
    this.count--;
    return this;
  },
  inc: function() {
    this.count++;
    return this;
  },
  getValue: function() {
    return this.count;
  }
}

 var current = counter.inc().inc().dec().inc().dec().getValue();
 alert(current); // 1 */

//Задание 6
// Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.

/*let array = {
  value: [],
  setValue: function (arr) {
    this.value = arr;
    return this;
  },
  push: function (arg) {
      this.value.push(arg);
      return this;
  },
  pop: function() {
    this.value.pop();
    return this;
  },
  getValue: function () {
    return this.value;
  }
};

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]*/

//Задание 7
// Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

/*function sum (a, ...b) {
	return (b.length === 1) ? (a + b[0]) : (a + sum(...b) );
}
console.log(sum(1, 2, 3, 4, 5) ); // 15*/

//Задание 8
//Есть следующий код:

/*var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call(country, '',''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, '',''); // Kyiv
format.apply(country.capital, ['','']); // Kyiv
format.apply({}, ['','']); // undefined*/


//Задание 9
// Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

/*let user = {
  name: 'Jhon'
}

function format(start, end) {
    console.log(start + this.name + end);
}

// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().

let userFormat = (start, end) => { //1
  format.call(user, start, end);
}

let userFormat = format.bind(user);//2

userFormat('<<<', '>>>'); // <<<John>>>*/

//Задание 10
// Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

/*function concat(first, delimiter, last) {
  console.log(first + delimiter + last);
}
let hello = concat.bind(null, 'Hello', ' ');

hello('World'); // Hello World
hello('John'); // Hello John */
