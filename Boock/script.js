"use strict";
/*Сделать старничку, которая выводит "Я-javaScript"
alert('Я-javaScript');*/
/*Объявите две переменные: admin и name.
Запишите в name строку "Василий".
Скопируйте значение из name в admin.
Выведите admin (должно вывести «Василий»).
var name = "Vetal", admin;
admin=name;
alert( admin );*/
/*Создайте переменную для названия нашей планеты и присвойте ей значение "Земля". Правильное имя выберите сами.
Создайте переменную для имени посетителя со значением "Петя". Имя также на ваш вкус.
var ourPlanetName8; 
var userName = 'Петя';*/
/*Создайте страницу, которая спрашивает имя и выводит его.
var Name = prompt ('Как вас зовут?',"");
alert(Name);*/
/*Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
var nameJavaScript = prompt("Каково «официальное» название JavaScript?","");
	if (nameJavaScript == 'ECMAScript') 
		{alert("Верно!");}
	else {alert('Не знаете? «ECMAScript»!');}*/
/*	Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
 var value = prompt ('Введите любое значение','');
	if (value>0)
		{alert('1');}
	else if (value<0)	
		{alert('-1');}
	else if (value==0)	
		{alert('0');}*/
/*Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
var login = prompt('Введите логин','');
	if (login== null )
		{
			alert('Вход отменён');
		}	
	else if (login != 'Admin'  )
		{
			alert('Я вас не знаю');
		}
	else if (login == 'Admin' )
		{
			var pass = prompt('введите пароль','');
		}
	if (pass=="Чёрный Властелин")
		{
			alert("Добро пожаловать!");
		}
	else if (pass == null) 
		{ 
			alert( 'Вход отменён' );
		}
	else 
		{
			alert("Пароль неверен");
		}*/
/*Перепишите if с использованием оператора '?':
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
---------------------
var a=0, b=5;
var exz = (a + b < 4) ? 'Мало' : 'Много';
alert(exz);*/
/*Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости – оформляйте код в несколько строк.

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
  --------------
}

var login = prompt('Введите логин','');
var massage = (login=='Вася')? "Привет":
	(login=="Директор") ? "Здравствуйте":
	(login =='') ? 'Нет логина':"";
alert(massage);*/
/*Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

«Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.
var age = prompt("Введите возраст","");
if (age>=14 && age<=90)
	{
		alert('good');
	}
else
	{
		alert('bed');
	} */
/*Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.

Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.
if (age < 14 || age > 90);
if (!(age >= 14 && age <= 90));*/
/*При помощи цикла for выведите чётные числа от 2 до 10.
for (var i=2;i<=10;i++)
	if (i%2==0)
	{
		alert(i);
	}*/
/*Перепишите код, заменив цикл for на while, без изменения поведения цикла.
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );}
  --------------------
var i=0;
while (i<3)
{
	alert( "номер " + i + "!" );
	i++
}*/
/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
var num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);*/
/*Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.
var n=2;
for (var i=2;i<=10;i++)
{
	while (<n-1)
	{
		if (n%(n-1)=0)
		{
			alert(i);
		}
	}
	n++;
}*/
/*Напишите if..else, соответствующий следующему switch:*
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
	__________________________________________________
}

if (browser == "IE")
{
	alert( 'О, да у вас IE!' );
}	
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'  )
{
	    alert( 'Да, и эти браузеры мы поддерживаем' );
}
else 
{ 
	alert( 'Мы надеемся, что и в вашем браузере все ок!' ); 
}*/
/*Перепишите код с использованием одной конструкции switch:
var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
 
}
 ------------------------------------------
var a = +prompt('a?', '');
switch (a)
{
	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert('2,3');
		break;
}*/
/*Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
__________________________________-
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

Используя оператор '?'
Используя оператор ||

function checkAge(age)
{
  return (age > 18) ? true: confirm('Родители разрешили?');
}

function checkAge(age)
{
  return (age > 18) || confirm('Родители разрешили?');
}*/
/*Задача «Hello World» для функций :)

Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b
function minAB(a,b)
{
	return (a<b) ? a:b ;
}
minAB(2, 5);
minAB(3, -1);
minAB(1, 1); */
/*Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow(x, n)
{
  var result = x;

  for (var i = 1; i < n; i++) 
  {
    result *= x;
  }

  return result;
}
var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1)
{
  alert('Степень ' + n +'не поддерживается, введите целую степень, большую 1');
} else 
{
  alert( pow(x, n) );
}*/
/*
function sumTo(n)
{
	if(n>1)
	{
		return n + sumTo(n-1);
	}
	else
	{
		return n;
	}
}
alert(sumTo(4));

function sumTo(n)
{	
var nn=0;
if(n>1)
	{
		for (var i=0;i<=n;i++)
		{
			 nn +=i;
			 alert (nn);
		}	
	}
	else
		{
			return n;
		}
	return nn;
}
alert (sumTo(4));

function sumTo(n)
{
return n * (n + 1) / 2;
}
alert (sumTo(4))*/
/*Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!
function factorial(n)
{	
var i=2,nn=n;
if(n>1)
	{
		while(i<n)
		{
			nn*=n-1;
			n--;
			alert (nn);
		}
			return nn;
	}
	else
		{
			return n;
		}
	
}
alert (factorial(4));

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) );*/
/*Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
function fib(n)
{
	return (n>2) ? (fib(n-1) + fib(n-2)) : 1;
}
alert (fib(10));


function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert (fib(77));*/
//Создайте страницу которая предлагает ввести 2 чила и выводит их сумму
/*var numberOne, numberTwo;
numberOne=prompt('Input first number','');
numberTwo=prompt('Input Second number','');

alert (+numberOne + +numberTwo;);*/
// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
/*function getDecimal(num) 
{
  var str = "" + num;
  var zeroPos = str.indexOf(".");
  if (zeroPos == -1) return 0;
  str = str.slice(zeroPos);
  return +str;
}

alert( getDecimal(12.5) ); // 0.5
alert( getDecimal(-1.2) ); // 0.2*/
//Напишите функцию fibBinet(n), которая будет вычислять Fn, используя эту формулу. Проверьте её для значения F77 (должно получиться fibBinet(77) = 5527939700884757).
/*function fibBinet(n)
{
    var f;
    f = (1+Math.sqrt(5))/2;
    var fSpow = Math.pow(f, n);
    var result = fSpow / (Math.sqrt(5));
    return result;
    return Math.pow(((1+Math.sqrt(5))/2), n) / (Math.sqrt(5));
}
 alert(fibBinet(77)); */
 //Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.
/*var max = prompt ('Input max','');
alert( Math.random() * max  );*/
//Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
/*
function ucFirst(str)
{
  var first = str.charAt(0).toUpperCase();
  str = first + str.slice(1);
  return str;
}
alert(ucFirst(""));
*/
//Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

 /*function checkSpam(str)
{
    str =  str.toLowerCase();
    var m =  ((str.indexOf('xxx') > 0) || (str.indexOf('viagra') > 0) ) ?   true:   false;
    return m;
}
alert (checkSpam(''));*/
//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
//Результатом функции должна быть (при необходимости) усечённая строка
/*function truncate(str, maxlength)
{
    if (str.length < maxlength)
    { 
        return str
    }
    else
    {
        return  str.slice(0,maxlength-3) + "...";
    }
}*/

// Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.
/*function extractCurrencyValue(str)
{
    return +str.slice(1);
}
*/
//Создайте пустой объект user.
/*Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта.*/

/*var obj = {};
obj= {name : 'Vasa'};
obj.username = "petrov";
obj.name = 'Sergey';
delete obj.name;*/

//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
/*function isEmpty(obj) 
{
    var count=0;
    for (var key in obj)
    {
        ++count; 
    }
    return (count>0) ?  false : true;
}*/

//Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
//Если объект пустой, то результат должен быть 0.
/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var sum=0;
for (var key in salaries)
    {
        sum += salaries[key];
    }
alert(sum);*/

//Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 
/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n)
{
     return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric (obj)
{
    for (var key in obj)
        {
            if (isNumeric(obj[key])==true)
                {
                    obj[key]*=2;
                }
        }
}
(multiplyNumeric(menu));
alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
*/
//Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.

/*function filterRangeInPlace (arr,a,b)
{
    for (var i=0;i<arr.length;i++)
        {
            if ((a >= arr[i]) ||(arr[i] >= b))
                {
                   arr.splice(i--,1); 
                }
        }   
}

var arr=[1,2,3,8,9]
filterRangeInPlace(arr,1,4);
console.log(arr);
*/

/*var arr = [5, 2, 1, -10, 8];

arr.sort(function (a,b)
        {
            //return a>b ? -1:1;
            return b-a;
        });

alert( arr ); */
//Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
/*var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice(0);
arrSorted.sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)*/
/*var arr = [1, 2, 3, 4, 5];

arr.sort(function (a,b)
        {
            var min = -1;
            var max = 1;
          return  (min + Math.random () * (max - min) );
        }
        );
alert( arr );


var arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRandom);

alert( arr );*/
//Напишите код, который отсортирует массив объектов people по полю age.
/*
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
people.sort(function (a,b)
            {
                for (var i=0; i < people.length ; i++)
                    {
                        return (people[i].age > people[i++].age) ? -1:1;
                    }
            }
);
// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) ;
----------------
// Наша функция сравнения
function compareAge(personA, personB) {
  return personA.age - personB.age;
}

// проверка
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);

// вывести
for(var i = 0; i < people.length; i++) {
  alert(people[i].name); // Вовочка Маша Вася
}*/
//Код ниже получает из массива строк новый массив, содержащий их длины:
/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLenght  = arr.map(function (item)
        {
            return item.length;
        });

alert( arrLength ); // 4,5,2,5*/



