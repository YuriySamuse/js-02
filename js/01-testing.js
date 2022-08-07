// ----- konspect -----

// -------of---for-----

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//------------------- breack

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Mango";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

//------------------- continue


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// const friends = ['Mango', 'Kivi', "Poly", "Ajax"];

// console.table(friends); 


//----------парные не парные + сумма ---------------

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 11, 18];

// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     if(number % 2 === 0){
//         console.log(`${number} - Парне!!!`)
//         total += number;
//     }
//     console.log (number);
    
// }

// console.log('Total: ', total);


//----------------- Poshuk logina ---


// const logins = ['m4nnjnkjhk', 'k1hnveuh', 'poly1scute', 'ajhfdwehik'];
// const loginToFind = 'poly1scute';
// let message = `Polzovatel ${loginToFind} ne znaydeno!`;
 //CASE1
// for(let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if(login ===loginToFind) {
//         message = `Polzovatel ${loginToFind} znaydeno!`;
//         break;
//     } 
// }

//CASE2
// for(login of logins){
//     if(login === loginToFind) {
//         message = `Polzovatel ${loginToFind} znaydeno!`;
//         break;
//     } 
// }


// CASE3

// const message = logins.includes(loginToFind) ? 'Da, est' : `Polzovatel ${loginToFind} ne znaydeno!`;



// console.log(message);


 
//---------------

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallesNumber = numbers[0];

// for (const number of numbers) {

//     if(number < smallesNumber) {
//         smallesNumber = number;
//     }
// }

// console.log("SmallesNamber:", smallesNumber);


//----------------------

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
//     let string = '';
//     for (const friend of friends) {
//         string += friend + ',';
//     }
//         string = string.slice(0, string.length - 1);
//     console.log(string);

    // console.log(friends.join(','));



// Должно получиться 'Mango,Poly,Kiwi,Ajax'


////----------------------------------07

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
//  */
//     const string = "JavaScript";
//     const letters = string.split("");
//     let invertedString = '';

//     console.log(letters);

//         for (const letter of letters) {
//             console.log(letter);

//             // if(letter === letter.toLocaleLowerCase()) {
//             //     console.log ('Ця буква в нижньому регістрі', letter);
//             //     invertedString += letter.toUpperCase();
//             // }else {
//             //     invertedString += letter.toLocaleLowerCase();
//             // }
        
//             invertedString += 
//             letter === letter.toLocaleLowerCase() ? 
//             letter.toUpperCase() : 
//             letter.toLocaleLowerCase();
//         }

//         console.log('invertedString: ', invertedString);


///-----08

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */


// const title = 'Top 10 benefits of React framework';
// const slug = title.toLocaleLowerCase().split(" ").join('-');
// console.log(slug);


// Должно получиться top-10-benefits-of-react-framework

////-----------------09

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);

// for (const number of numbers) {

//     total += number;
    
// }

// console.log(total);



////--------------------10


/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */


// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];
  
//   console.table(cards);
  
  /*
   * Удаление (по индексу), метод indexOf()
   */
  
//  const cardToRemove = 'Карточка-3';
//  const index = cards.indexOf(cardToRemove);
//  console.log(index);
// cards.splice(index, 1);


// console.table(cards);


  
  /*
   * Добавление (по индексу)
   */
   
//   const cardToInsert = 'Карточка-6';
//   const index = 3;
//   cards.splice(2,0, cardToInsert);
  
//   console.table(cards);
  /*
   * Обновление (по индексу)
   */
//   const cardToUpdate = 'Карточка-4';
//   const index = cards.indexOf(cardToUpdate);

//   console.log(index);
//   cards.splice(index, 1, 'new card - 4');

//   console.table(cards);

//------

// const cart =[54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);


// const calculateTotalPrice = function(items) {
//     console.log('items in function: ', items);
//     let total = 0;

//     for (const item of items) {
//             total += item;
//         }


//     return total;
// };


// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

//---------------------------------------

// /*
//  * Напиши функцию logItems(items) для перебора и логирования массива
//  */
//     const logItems = function (items) {
//         for (const item of items) {
//             console.log(item);
            
//         }
//     };

  
//   logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
//   logItems([1, 2, 3, 4, 5]);
//   logItems(['клавиатура', 'наушники', 'часы']);



////-------------

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
    
//     for (const login of allLogins) {
//             if (login === loginToFind) {
//                 return `Пользователь ${loginToFind} найден.`;
//             }
//         }

//         return `Пользователь ${loginToFind} не найден.`;
// };


// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));


//---------------------------------


/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
  
//     for (const number of numbers) {
//       if (number < smallestNumber) {
//         smallestNumber = number;
//       }
//     }
//     return smallestNumber;
//     }

//   console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
//   console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
//   console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4


//---------------------


/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

    
    
//     let invertedString = '';

// for (const letter of letters){
//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }


//   console.log ('invertedString: ', invertedString);


//   const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//             const isInLowerCase = letter === letter.toLowerCase();
        
//             invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//         }

//         return invertedString;
//   };
  
//   console.log(changeCase('qweRTY')); // QWErty
//   console.log(changeCase('mAnGo')); // MaNgO
//   console.log(changeCase('AjAx')); // aJaX


  ///--------------------------------

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */



// const title = 'Top 10 benefits of React framework';
// const slug = title.toLocaleLowerCase().split(" ").join('-');
// console.log(slug);


// const slugify = function(string) {
//     // const slug = string.toLocaleLowerCase().split(" ").join('-');

//     return string.toLocaleLowerCase().split(" ").join('-');
// }

// // Должно получиться top-10-benefits-of-react-framework
  
//   console.log(slugify('Top 10 benefits of React framework'));
//   console.log(slugify('Azure Static Web Apps are Awesome'));
//   console.log(slugify('Technical writing tips for non-native English speakers'));

//--------------------

/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//     console.log(arguments);
//     const args = Array.from(arguments);
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//----------

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...args) {
//     console.log(args);
//     let total = 0;
  
//     for (const arg of args) {
//       total += arg;
//     }
  
//     return total;
//   };
  
//   console.log(add(1, 2, 3));
//   console.log(add(1, 2, 4, 5, 6));
  
  /*
   * Напиши функцию filterNumbers(array [, number1, ...]) которая:
   * - первым аргументом принимает массив чисел
   * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
   * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
   *   для которых есть аналог в оригинальном массиве.
   */
  
//   const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log ('args: ', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         // console.log(args.includes(element));

//         if(args.includes(element)){
//             uniqueElements.push(element);
//             console.log( `${element} est' vezde`);
//         }
//     }

//     return uniqueElements;
//   };
  
//   console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
//   console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
//   console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]