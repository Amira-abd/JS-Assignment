// // // Task 1: Loop Basics
// // //  (1) A for loop that prints numbers 1-20, skipping multiples of 3 using continue
  for(var i=1 ; i<=20 ; i++){
    if(i%3==0){
      continue;
    }
    else{
      console.log(i);
      
    }
  }

// // //  (2) A while loop that generates random numbers until it gets a number greater than 0.9
  var i = Math.random();
  while(i<0.9){
    console.log(i);
    i=Math.random();  
  }
  console.log("Final Number is " + i);

// //  (3) A for loop that counts backwards from 50 to 1, printing only even numbers
  for(var i=50 ; i>=1 ; i--){
    if(i%2==0){
      console.log(i);
    }
    else{
    continue;
    }
  }
// //  (4) A do...while loop that asks user for input until they type "exit"
  var userInput;
  do {
    userInput = prompt("Enter input");
  } while (userInput != "exit");

   

// // Task 2: Array Processing
// // Given array [12, 45, 67, 23, 89, 34, 56]: 
// // (1) Use for...of to calculate sum and average
  var arrayOfNumbers=[12, 45, 67, 23, 89, 34, 56];
  var sum= 0;
  var count=0;
   for(i=0 ; i<arrayOfNumbers.length ; i++){
    sum+=arrayOfNumbers[i];
    count++
   }
   console.log("The sum = " + sum);
   console.log("The average = " + sum/count);
   
// // (2) Find the largest number using a loop 
  var number=0;
   for(var i=0 ; i<arrayOfNumbers.length ; i++){  
    if(number<arrayOfNumbers[i])   
      number=arrayOfNumbers[i];
   }
   console.log(number);
   
// // (3) Count how many numbers are greater than 50     
    count=0;  // Reassigning a new value because its last value was 7, and when I finished, I added 3 to it, so the result I got was 10.
    for(var i=0 ; i<arrayOfNumbers.length ; i++){  
      number=arrayOfNumbers[i];
     if(number>50)
      count++;
    }
    console.log(count);
    
// (4) Create a new array with each number doubled 
    number=0;  // Reassigning
    var newArray = [];
    for(var i=0 ; i<arrayOfNumbers.length ; i++){ 
      number=arrayOfNumbers[i]*2;
      newArray[i]= number;           //newArray[i] = arrayOfNumbers[i] * 2;
    }
    console.log(newArray);
    
// (5) Use break to find first number divisible by 7
    number=0;  // Reassigning
    for(var i=0 ; i<arrayOfNumbers.length ; i++){  
      number=arrayOfNumbers[i];
     if(number%7 == 0)

       break;
    
    }
    console.log("first number divisible by 7 is   " + number);
    

// Task 3: Nested Loops & Patterns
//   (1) A 10x10 multiplication table using nested loops
       for(var i=10 ; i<=10 ; i++){
        for(var j=1 ; j<=i ; j++)
          console.log(i + "*" + j + "=" + i*j);
          
       }

//   (2) A pyramid pattern with 7 rows using stars (*)
      for(var i=1 ; i<=7 ;i++){
        var row ="";
        for(j=0 ; j<i ; j++){
          row +="* ";
        }
        console.log(row);
      }       

//   (3) A program that finds all pairs of numbers from two arrays [1,2,3] and [4,5,6] 
      var firArray = [1,2,3];
      var secArray = [4,5,6];
      for(var i =0 ; i<firArray.length ; i++){
        for(var j=0 ; j<secArray.length ; j++)
          console.log(firArray[i] + "," + secArray[j]);
          
      }
                
//   (4) Process a 2D array of student scores and calculate average for each student
      var studentScoreArray = [ [80, 90, 100, 70] , [60, 75, 85, 95] ];       
       for(var i =0 ; i<studentScoreArray.length ; i++){
        var sum = 0;
        var count = 0;
        for(var j =0 ; j<4 ; j++) {  //for(var j = 0; j < studentScoreArray[i].length; j++)
       sum+=studentScoreArray[i][j];
        count++;
        }       
        console.log(sum/count);   //   sum / studentScoreArray[i].length
       }
       

 
