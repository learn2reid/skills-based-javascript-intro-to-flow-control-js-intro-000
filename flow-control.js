function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!';
  } else {
    return undefined;
  }
}

function teenager(age) {
  if (age > 12 && age < 20 ) {
    return 'You are a teenager!'
  } else {
    return 'You are not a teenager';
  }
}

function ageChecker(age) {
  if (age > 12 && age < 20 ) {
    return 'You are a teenager!';
  } else if (age <= 12){
    return 'You are a kid';
  } else if (age >=20) {
    return 'You are a grownup';
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch(age) {
    case age > 12:

    // case age < 20:
      return "You are a teenager";
      // break;
    default:
      return "You have an age";
      // return 'You are a teenager';
      // break;
  }
}
