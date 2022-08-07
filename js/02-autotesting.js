//---- 3/32-----------

// function checkStorage(available, ordered) {
//     // Change code below this line
    
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//     return "The order is accepted, our manager will contact you";
    
  
    
//     // Change code above this line
//   }
  

//   console.log(checkStorage (5, 1));

//   console.log(checkStorage (0, 5));

//   console.log(checkStorage (1, 0));
  

//---------   4/32 --------

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruit [i];
    
// }
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[2];
// console.log (firstElement);

//----9/32---------

// function getExtremeElements(array) {
//     // Change code below this line
   
//     return [array[0], array[array.length - 1]];
//    }
  
   
//     // Change code above this line

  
//   console.log(getExtremeElements([1, 2, 3, 4, 5]));
//   console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//   console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
  


//--------------11/32--------------


// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
   
//     const array = message.split(' ') ;
//    console.log(array);

//    const total = array.length * pricePerWord;
//    console.log(total);
//     return total;
//     // Change code above this line
//  }
//  calculateEngravingPrice("JavaScript is in my blood", 10)


//-------13/32-----------------

// function slugify(title) {
//     // Change code below this line
//    const toNormalised = title.toLowerCase();
  
//     const words = toNormalised.split(' ');
  
//     const slug = words.join('-');
  
//   return slug;
//     // Change code above this line
//   }
  
//   console.log(slugify("Arrays for begginers"));
//   console.log(slugify("English for developer"));
//   slugify("Ten secrets of JavaScript");
//   slugify("How to become a JUNIOR developer in TWO WEEKS");
  

//----------16/32-------------+


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const allArray = firstArray.concat(secondArray);

//   if (allArray.length > maxLength) {
    
//   return allArray.slice(0, maxLength);    
//   }
// return allArray;
//     // Change code above this line
//   }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


//---------------- 18/32 ----


// function calculateTotal(number) {
//     // Change code below this line
//    let total = 0;
//    for (let i = 0; i <= number; i += 1) {
//      total += i;  
//    }
     
//    return total;
//      // Change code above this line
//    }
   
   

//   console.log(calculateTotal(18));
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);


//-----------19/32------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


//--------------20/32---------

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i=0; i < order.length; i += 1){
//       total += order[i]
//     }
//     // Change code above this line
//     return total;
//   }
  
//   // Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//---- 21/32-----

//     function findLongestWord(string) {
//         // Change code below this line
//         let words = string.split(" ");
//         let longWord = words[0];
      
//         for (let word of words) {
//           if (word.length > longWord.length) {
//             longWord = word;
//           }
          
//         }
//     console.log(longWord);
//     // Change code above this line
//   }

//   findLongestWord("The quick brown fox jumped over the lazy dog");

//--------22/32-----

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//         for (let i = min; i < max +1; i += 1){
//           numbers.push(i);
//         }
//         // Change code above this line
//         console.log(numbers);
//       }
      
//     // Change code above this line
   
    
//   createArrayOfNumbers(1, 3);

//   createArrayOfNumbers(14, 17);

//---------------23/32-----------


// function filterArray(numbers, value) {
//     // Change code below this line
//   let bigNumbers = [];
//    for (i = 0; i < numbers.length; i +=1) {
//      if (numbers[i] > value) {
//        bigNumbers.push(numbers[i]);
//      }
//    }
//  return bigNumbers;
 
//    // Change code above this line
//  }

//  console.log(filterArray([12, 24, 8, 41, 76], 38));

//-----25/32---------

// function getCommonElements(array1, array2) {
//     // Change code below this line
//   let array = []
//     for (let elements of array1) {
//     if (array2.includes(elements) && array2.includes(elements)) {
//       array.push(elements);
//     }  }
//   return array;
  
//    // Change code above this line
//   }
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


//-- 26/32 ----

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let variable of order) {
//       total += variable;
//     }
  
//     // Change code above this line
//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));



//----27/32 --- 

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let number of numbers) {
        
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
  
//   console.log(filterArray([1, 2, 3, 4, 5], 3));


//--------------28/32---------


// function getEvenNumbers (start, end) {
// let numbers = [];
// for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//         numbers.push(i);
//     }
    
// }
// return numbers;
// }



// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(8, 8));


//---------------32/32------------


function includes(array, value) {
for (let i = 0; i < array.length; i+=1) {
    
    if(array[i] === value){
    return true;
}
}
return false;
}

console.log(includes([1, 2, 3, 4, 5], 0));