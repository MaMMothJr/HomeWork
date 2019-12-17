//Задание 1
// Добавьте в прототип конструктора Date метод для форматирования даты по определенному формату: Date.prototype.format. Символы форматирования частей даты можете взять любые из существующих, в примере - отсюда

/*Date.prototype.format = function(value) {
  let result = '';
  let a = value.split('-');
  for (let i = 0; i < a.length; i++) {
  switch (a[i]) {
    case 'Y':
      let Y = this.getFullYear();
      result += Y + '-';
      break;
    case 'm':
      let m = this.getMonth()+1;
      m = m < 10? '0' + m : m;
      result += m + '-';
      break;
    case 'd':
      let d = this.getDate();
      d = d < 10? '0' + d : d;
      result += d + '-';
      break;
    case 'hh':
        let hh = this.getHours();
        hh = hh < 10? '0' + hh : hh;
        result += hh + '-';
      break;
    case 'mm':
      let mm = this.getMinutes();
      mm = mm < 10? '0' + mm : mm;
      result += mm + '-';
      break;
    default:
      result = 'Неверно введен формат, введите значение ввиде "Y-m-d-hh-mm"';
    }
  }
  return result.slice(0,-1); // нужно поработать над логикой...
};

var d = new Date('2018-09-10');
d = d.format('Y-m-d');
console.log(d); // 2018-09-10 */

// Задание 2
// Добавьте в прототип конструктора Array метод, позволяющий поменять элементы массива местами по индексам. Метод изменяет исходный массив

/*Array.prototype.swap = function (a, b) {
  let c = this[a];
  this[a] = this[b];
  this[b] = c;
  return this;
};

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]*/

//Задание 3
// В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. Игроки должны иметь свойство health - которое определяет базовые боевые возможности игрока (выносливость), и power - сила удара. Оба свойства определяются при создании экземпляра класса. Также игрок должен иметь метод hit для нанесения удара другому игроку. При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
// Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
// Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями. И напишите пример боя, используя соответствующие методы и свойства.

/*function Warrior(name, health, power) {
  this.name = name;
  this.health = health;
  this.power = power;
};

Warrior.prototype.hit = function(power) {
  return this.health = this.health - (power*Math.random()).toFixed(0);
}

Warrior.prototype.heal = function () {
  let bless = (Math.random() * 5).toFixed(0);
  return this.health + bless;
}

function fight(player1, player2) {
  let result = ' ';
  for (let i = 0; i < 10; i++ ) {
    player1.hit(player2.power);
    player1.heal();
    player2.hit(player1.power);
    player2.heal();
    if (player1.health <= 0) {
      result = console.log(`${player2.name} убил ${player1.name}`);
      i = 11;
    } else if (player2.health <= 0) {
      result = console.log(`${player1.name} убил ${player2.name}`);
      i = 11;
    } else {
      continue;
    }
  }
  if (player1.health > 0 && player2.health > 0){
    result = console.log('Боевая ничья, все живы');
  }
  return result;
}

let batman = new Warrior('Batman', 100, 30);
let superman = new Warrior('Superman', 150, 20);

fight(batman, superman);*/
