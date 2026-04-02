// // Task 1: Number Methods Practice
// (1) Generates a random number between 1 and 100
 console.log(Math.random() * 101)

// (2) Uses Math.round(), Math.floor(), and Math.ceil() on a decimal number
var number=500.6532;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

// (3) Calculates the area of a circle with radius 7 using Math.PI
var radius=7;
var area = (Math.PI)*radius*radius;    //(Math.PI)*radius**2
console.log(area);

//  (4) Finds the maximum and minimum of 5 numbers using Math.max() and Math.min()
console.log(Math.max(15,60,45,100,0));
console.log(Math.min(15,60,45,100,0));

// (5) Converts a string "123.456" to a number with 2 decimal places
var str= "123.456";
var num=Number(parseFloat(str).toFixed(2));
console.log(num);




// // Task 2: Grade Calculator
// // Create a grade calculator that takes a score (0-100) and:
// // (1) Uses if...else if to assign letter grades (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60),
  var studentScore=+prompt("Enter Your Score");
   if(studentScore>=90 && studentScore<=100){
    console.log("Your Grade is A");    
   }
   else if(studentScore>=80 && studentScore<=89){
    console.log("Your Grade is B");    
   }
   else if(studentScore>=70 && studentScore<=79){
    console.log("Your Grade is C");    
   }
   else if(studentScore>=60 && studentScore<=69){
    console.log("Your Grade is D");    
   }
   else if(studentScore<=60){
    console.log("Your Grade is F");    
   }
   else{
    console.log("Invalid Student Grade please enter valid number");   
   }

// (2) Creates the same logic using a switch statement,
  switch(true){
    case studentScore>=90 && studentScore<=100 :
      console.log("Your Grade is A");  
      break;
    case studentScore>=80 && studentScore<=89 :
      console.log("Your Grade is B");  
      break;
    case studentScore>=70 && studentScore<=79 :
      console.log("Your Grade is C");  
      break;
    case studentScore>=60 && studentScore<=69 :
      console.log("Your Grade is D");  
      break;
    case studentScore<=60 :
      console.log("Your Grade is F");  
      break;
    default:
      console.log("Invalid Student Grade please enter valid number");   
  }


// // (3) Creates a one-line version using nested ternary operators,
(studentScore >= 90 && studentScore <= 100) ? console.log("Your Grade is A"): (studentScore >= 80 && studentScore <= 89) ? console.log("Your Grade is B") : (studentScore >= 70 && studentScore <= 79) ? console.log("Your Grade is C") : (studentScore >= 60 && studentScore <= 69) ? console.log("Your Grade is D") : (studentScore < 60 && studentScore >= 0) ? console.log("Your Grade is F") : console.log("Invalid Student Grade please enter valid number");
  

//  (4) Adds pass/fail status (pass >= 60) using a ternary operator.
var grade =(studentScore>=60) ? "pass" : "fail";
console.log(grade);


// Task 3: Day Checker
// Create a program with a day number (1-7):
//  (1) Use a switch statement to print the day name
var dayNumber=+prompt("Enter a day number");
var dayName="";
switch(dayNumber){
  case 1 :
    console.log("Saturday");
    break;
  case 2 :
    console.log("Sunday");
    break;
  case 3 :
    console.log("Monday");
    break;
  case 4 :
    console.log("Tuesday");
    break;
  case 5 :
    console.log("Wednesday");
    break;
  case 6 :
    console.log("Thursday");
    break;
  case 7 :
    console.log("Friday");
    break;
  // default :
  //   console.log("invalid day number ");
  //   break;  
}
//  (2) Use another switch with fall-through to classify as "Weekday" or "Weekend"
var dayName;
switch(dayNumber){
  case 1:
    dayName = "Saturday";
    break;
  case 2:
    dayName = "Sunday";
    break;
  case 3:
    dayName = "Monday";
    break;
  case 4:
    dayName = "Tuesday";
    break;
  case 5:
    dayName = "Wednesday";
    break;
  case 6:
    dayName = "Thursday";
    break;
  case 7:
    dayName = "Friday";
    break;
  // default:
  //   dayName = "invalid day number";
  //   break;
}
if(dayName=="Friday"){
  console.log(dayName + "is a Weekend ");
}
else{
  console.log(dayName + "is a Weekday ");
}


//  (3) Use if...else to check if it's a valid day (1-7) or invalid
if(dayNumber<=7 && dayNumber>=1){
  if(dayNumber==1){
    console.log("Saturday");
  }
  else if(dayNumber==2){
    console.log("Sunday");
  }
  else if(dayNumber==3){
    console.log("Monday");
  }
  else if(dayNumber==4){
    console.log("Tuesday");
  }
  else if(dayNumber==5){
    console.log("Wednesday");
  }
  else if(dayNumber==6){
    console.log("Thursday");
  }
  else{
    console.log("Friday");
  }
}
else{
  console.log("invalid day number ");
}

//  (4) Create a function that returns true if it's a weekend, false otherwise (using ternary).

var isWeekend = (dayName=="Friday") ? "true" : "false" ;
console.log(isWeekend);


