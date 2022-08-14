/* Function of a reverse number*/
function reverseNum(num) {
    let revNumber = num.toString().split("").reverse().join("");
    revNumber = parseInt(revNumber);
    return revNumber;
}
var num = prompt("Enter the number you want to reverse: ");
console.log("Reversed number is "+reverseNum(num))
//___________________________________________________________________________________________________________________

//FUNCTION OF PALINDROME:
function checkPalindrome(word){
    let reversedWord = word.split("").reverse().join("");
    if (reversedWord===word){
     console.log(word + " is " + " Palindrome");
    }
     else{
         console.log(word + " is " + "Not palindrome")
     }
 }
 var palindrome = prompt("ENTER THE WORD YOU WANT TO BE CHECKED")
 console.log(checkPalindrome(palindrome));
//___________________________________________________________________________________________________________________

//3. COMBINATION OF STRINGS
function combination(str){
    let arr = [];
    for(var i = 0; i < str.length; i++){
        for (var j = i+1; j<str.length+1; j++){
            var sliced = str.slice(i,j);
            arr.push(sliced);
            var joinedString = arr.join();  
        }      
    }
    return joinedString;    
}
var whatever = prompt("Enter the string you want to check combination of: ");
console.log("Combination of "+ whatever + " is: " + combination(whatever));
//___________________________________________________________________________________________________________________

//4. ALPHABETICAL ORDER:
function alphabeticalOrder(str){
    str = prompt("Enter word of Alphabetical order: ");
    var newstr = str.split("").sort().join("");
    return newstr;
}
console.log("Alphabetical order is " + alphabeticalOrder());
//____________________________________________________________________________________________________________________

//5. Converts the first letter of each word of the string in upper case:
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
var xyz = prompt("Enter word to convert first letter of each word in upper case:")
console.log("uppercase is " + uppercase(xyz));
//______________________________________________________________________________________________________________________

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string:
function longestWord(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var abc = prompt("Enter the string for longest word: ")
console.log("The longest word of given input is "+longestWord(abc));
//___________________________________________________________________________________________________________________________

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowelCount(str1)
{
  var vowelList = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowelList.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
var vowel = prompt("Enter the word to count its vowel: ")
console.log("Number of vowel is" + vowelCount(vowel));
//____________________________________________________________________________________________________________________________

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
var primeNum = +prompt("enter prime number: ")
console.log(test_prime(primeNum));