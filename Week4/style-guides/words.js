// const words = ['hey', 'here', 'you'];

// function wordsToSentence(words) {
//     var salute = "";
//     for (let i = 0; i < words.length; i++) {
//         salute = salute + words[i] + " ";
//     };
//     return salute;
// };
    
// console.log(wordsToSentence(['Hello', 'how', 'are', 'doing']));

//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

// function wordsToSentence(words) {
//     var salute = "";
//       for (let i = 0; i < words.length; i++) {
//           salute = salute + words[i] + " ";
//       }
//       return salute;
//   };
  
//   console.log('results', wordsToSentence(['hey', 'there']));
  
//   if (typeof module !== 'undefined') {
//     module.exports = {
//       wordsToSentence,
//     };
//   }
  
// function calculator (value1, operator, value2) {
//     switch (operator) {
//       case '+':
//         const result = value1 + value2;
//         console.log(result);
//         break;
//       default:
//         console.log("Not matched")
//   }
// }

// function compareCities(c1, c2) {
//     // Add your code here
//     const city1 = Object.keys(c1);
//     const city2 = Object.keys(c2);
//     if (city1.length == city2.length) {
//         return true;
//     } else {
//         return false;
//     }
// }
  
//   //uncomment next lines to console log results
//   console.log(compareCities({},{}))
//   console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
//   console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))
//   console.log(compareCities({name:'San Jose'},{otherkey:'San Jose', morekey: 'house'}))


// var contacts = [{name:'amy', email:'amy@mit.edu', course: 'web dev'}, {name:'fred', email:'fred@mit.edu', course: 'web dev'}, {name:'anne', email:'anne@mit.edu', course: 'web dev'}];

// for (let i = 0; i < contacts.length; i++){
//     if(contacts[i].name === 'anne'){
//         contacts[i].course= 'frontend dev'
//     }
// };

// contacts[contacts.length + 1] = {name:'Nico', email:'Nico@mit.edu', course: 'FullStack dev'}
// contacts[contacts.length + 1] = {name:'caro', email:'car@mit.edu', course: 'FullStack dev'}

// 

// function arrayFlattener(array) {
//     var flatArray = [];

//     flatten(array);
  
//     function flatten(array) {
//       for (var i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//           flatten(array[i]);
//         } else {
//           flatArray.push(array[i]);
//         }
//       }
//     };
  
//     return flatArray;
//   };
//   arrayFlattener([1, [2], [3, [[4]]]]);


var arrayToFlat = [1,[2,3],4,5];

function arrayFlattener(a) {
    
    let flattenedArray = [];
    flatThisArray(a);

    function flatThisArray(a) {
        for (let i = 0; i < arrayToFlat.length; i++) {
            if (Array.isArray(a[i])) {
                flatThisArray(a[i]);
            } else {
                flattenedArray.push(a[i]);
            }
        }
    }
    console.log(flattenedArray);
    return flattenedArray;
};
arrayFlattener(arrayToFlat);