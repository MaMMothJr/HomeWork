//Задание 1
// Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

/*let person  = {
  sex: 'Male',
  name: 'Boby',
  secondname: 'Smith',
  age: '18',
  height: '100',
  weight: '100'
};
let newKey = prompt('Какой параметр хотите узнать?', 'name');
if (newKey in person && newKey !== undefined) {
   alert(person[newKey]);
  } else {
    alert('Такого свойтва нет...')
    let answer = confirm('Желаете добавить?');
      if (answer) {
        let value = prompt('Введите значение свойства ' + newKey, 'something');
        person[newKey] = value;
        alert('Мы добавили новое свойство');
        //alert(newKey + ' ' + person[newKey]); проверка для себя.
      } else {
        alert('Ну ладно пока');
      }
  }*/

//Задание 2
// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

/*let mobile = {
  brand: ' ',
  model: ' ',
  weight: ' ',
  color: ' ',
  price: ' '
};

for (key in mobile) {
  mobile[key] = prompt('Введите значение для свойства ' + key, ' ');
};

person.mobile = mobile;*/

/*//Задание 3
//Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.

let newKey1 = ' ',
    newValue = ' ',
    decision = ' ';

for (let i = 0; ; i++) {
  decision = prompt('Введите что хотите сделать (delete/update)', 'update');
    if (decision === 'update') {
      newKey1 = prompt('Какое свойство добавим', 'bla bla');
        if (newKey1 in person) {
          alert('Такое свойство существует, давайте поменяем его значение.');
          newValue = prompt('Какое будет значение у ' + newKey1 + '?', '0');
          person[newKey1] = newValue;
        } else if (newKey1 === null) {
          break;
        } else {
          alert('Такого значения нет, секундочку создаем.')
          newValue = prompt('Какое будет значение у ' + newKey1 + '?', '0');
          person[newKey1] = newValue;
        }
    } else if (decision === null) {
     break;
    } else if (decision === 'delete') {
      newKey1 = prompt('Какое свойство удалим?', 'age');
        if (newKey1 in person) {
          delete person[newKey1];
        } else if (newKey1 === null) {
          break;
        } else {
          alert('Вы ошиблись такого свойства нет');
        }
   } else {
     alert('Синтаксическая ошибка, попробуйте еще раз');
     continue;
   }
}
console.log(person);*/

// Задание 4
// Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства.

/*let listElement = document.createElement('dl');
document.body.appendChild(listElement);

for (let key2 in person) {
	if (typeof person[key2] !== 'string') continue;

	let titleElement = document.createElement('dt');
	listElement.appendChild(titleElement);
	titleElement.innerText = key2;

	let defElement = document.createElement('dd');
	listElement.appendChild(defElement);
	defElement.innerText = person[key2];
}*/

// Задание 5
//Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

/*let d = new Date();

let dates = {
  firstdate: d.setDate(d.getDate()-2),
  //.toISOString().substring(0, 10); второй вариант.
  seconddate: d.setDate(d.getDate()-365)
};

let value = prompt('Введите значение в формате yyyy-MM-dd', '2019-08-05');
let datachek = Date.parse(value);


if (dates.seconddate < datachek && dates.firstdate > datachek) {
  alert('Дата попадает в диапазон');
} else {
  alert('Дата не попадает в дипазон');
};*/

//Задание 6
// Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.


/*let image = {
  src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
  style: "border: 1px solid #ccc",
  width:"200"
}

let listElement = document.createElement('img');
document.body.appendChild(listElement);

for (let key in image) {
  // if(image.length) Нужно ли делать проверку?

  let img = document.getElementsByTagName('img');
  img[0].setAttribute(key, image[key]);
} */
