function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let result;
  if (someNumber <= 400){
    result = "This one is on me!";
  }
  else if (someNumber <= 1500){
    result = "That will be twenty bucks.";
  }
  else if (someNumber <= 2500){
    result = "I will gladly take your thirty bucks.";
  }
  else {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(someCity){
  // Write your code here!
  let result;
  if (someCity === "NYC"){
    result = "Ok, sounds good."
  }
  if (someCity === "Pittsburgh"){
    result = "No go.";
  }

  return result;
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  let response;
  switch(someTip){
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    case 'thanks for everything':
      response = "Bye."
      break;
  }
  return response;
    
}