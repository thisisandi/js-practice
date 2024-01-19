


//  document.addEventListener("DOMContentLoaded", function() {
//      console.log(user); 
//      console.log(age); 
//      alert(message); // вывод сообщения в окне
//      let user = 'John';
//      let age = 25;
//      let message = 'Hello';

//      let $ = 1; // переменная с именем $
//      let _ = 2; // и переменная с именем _
//      alert($ + _); // 3

//      alert( 1 / 0 ); // бесконечность

//      alert( "не число" / 2 + 5 ); // вычислительная ошибка NaN

//      const bigInt = 1234567890123456789012345678901234567890n; // работа с числами большой длины с n в конце

//      let name = "Иван";
//      alert( `Привет, ${name}!` ); // пример использования обратных кавычек
//      alert( `результат: ${1 + 2}` );

//      let isGreater = 4 > 1;
//      alert( isGreater ); // пример булевого типа данных (может принимать значения true и false)

//      let x = 5;
//      let y = 10;
//      let isGreater = x > y;
//      alert(isGreater);

//      let temperature = 25;
//      let isHot = temperature > 30 ? "Горячо" : "Не горячо";  // тернарный оператор
//      alert(isHot);

//      let age;
//      alert(age); // undefined тк не присвоено значением


//      let age = prompt('Сколько тебе лет?');
//      alert(`Тебе ${age} лет!`); // показывает текст, указанный в поле ввода или же null при отмене

//      let userName = prompt("Введите ваше имя:");
//      console.log("Привет, " + userName + "!");

//      let userAge = prompt("Введите ваш возраст:");
//      let ageNextYear = parseInt(userAge) + 1;
//      console.log("В следующем году вам будет " + ageNextYear + " лет.");

//      let userAnswer = prompt("Вы согласны с условиями использования? (да/нет)");
//          if (userAnswer.toLowerCase() === "да") {
//      console.log("Спасибо за согласие!");
//          } else if (userAnswer === null) {
//      console.log("Операция отменена");
//          } else {
//      console.log("Вы отказались от условий использования.");
//      }

//      let isCool = confirm("Ты крутой?");
//      alert( isCool ); // true, если нажата OK, false если отмена

//      alert( 2 > 1 ); // операторы сравнения
//      alert( 2 == 1 ); 
//      alert( 2 != 1 );

//      alert( 'Я' > 'А' ); // алфавитный порядок сравнения в строках

//      alert( '' == false ); // будет true так как строка пуста

//      let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//      if (year == 2015) {
//      alert( "Правильно!" );
//      alert( "Вы такой умный!" );
//      }

//      let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//      if (year == 2015) {
//      alert( 'Да вы знаток!' );
//      } else {
//       alert( 'А вот и нет!' ); // если значение, кроме 2015
//      }

//      let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//      if (year < 2015) {
//      alert( 'Это слишком рано...' );
//      }
//      else if (year > 2015) {
//      alert( 'Это поздновато' );
//      }
//      else {
//      alert( 'Верно!' );
//      }

//      let age = prompt('Сколько Вам лет?', 18);
//      let message = (age < 3) ? 'Привет, малыш!' :
//      (age < 18) ? 'Привет!' :
//      (age < 100) ? 'Здравствуйте!' :
//      'Какой необычный возраст!';
//      alert( message );

//      let hour = 9;
//      if (hour < 10 || hour > 18) {
//      alert( 'Офис закрыт.' );
//      }

//      let x;
//      false || (x = 1);
//      alert(x); 

//      let hour = 12;
//      let minute = 30;
//      if (hour == 12 && minute == 30) {
//      alert( 'The time is 12:30' );
//      }

//      let user = {
//      name: "Аня",
//      age: 18
//      };
//      let key = prompt("Что вы хотите узнать о пользователе?", "name");
//      alert( user[key] );

//      let num1 = 5;
//      let num2 = "5";
//      console.log(num1 == num2); 
//      console.log(num1 === num2); 

//      let userInput = prompt("Введите число:");
//      let number = 10;
//      if (userInput == number) {
//      console.log("Вы ввели число 10 или строку '10'.");
//      } else {
//      console.log("Вы ввели другое значение.");
//      }

//  });


