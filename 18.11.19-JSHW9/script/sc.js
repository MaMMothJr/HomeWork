//Задание 1
// Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых создает соответствующую фигуру. Пример создания экземпляров каждого класса и параметры фигур:
//
// var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
// var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
//
// Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами (координаты, размеры, цвет).
//
// Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, в котором инициализируется элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. В этом классе есть метод add, который и отображает созданные вами фигуры на странице. Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком. Также у класса есть свойства width и height, которые можно передать при вызове конструктора и которые меняют размер элемента canvas в html. Если в конструктор не передать значения для ширины/высоты, то элементу canvas устанавливаются значения по умолчанию

function Figure(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

}

function Line(x, y, x1, y1, color) {
  Figure.call(this, x, y, color);
  this.x1 = x1;
  this.y1 = y1;
  this.draw = function(ctx) {
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.moveTo(x, y);
     ctx.lineTo(x1, y1);
     ctx.stroke();
  }
}

function Circle(x, y, r, color)  {
  Figure.call(this, x, y, color);
  this.r = r;
  this.draw = function(ctx) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x, y, r, 0, 2*Math.PI, false);
      ctx.stroke();
      ctx.fill();
  }
}

function Rect (x, y, w, h, color) {
  Figure.call(this, x, y, color);
  this.w = w;
  this.h = h;
  this.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
}

function Canvas(id, width, height) {
  this.width  = width || 400;
  this.height = height || 200;
  let canvasElement = document.createElement('canvas');
  canvasElement.setAttribute('id',id);
  document.body.appendChild(canvasElement);
  let canvas = document.getElementById(id);
  let ctx = canvas.getContext('2d');

  this.add = function() {
    for (let i = 0; i < arguments.length; i++) {
			arguments[i].draw(ctx);
    }
  }
}

var line = new Line(0, 0, 100, 100, 'red'); // x, y, x1, y2, color
console.log(line);
var circle = new Circle(100, 100, 50, 'green'); // x, y, r, color
console.log(circle);
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
console.log(rect);


var drawArea = new Canvas('canvasID', 600, 600);
console.log(drawArea);
//drawArea.add(line); // не понял почему так...
drawArea.add(circle, rect, line);
