function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push( name );

  return `Welcome, ${name}. You are number ${ katzDeliLine.indexOf(name) + 1 } in line.`;
}

function nowServing() {
  returnFirstPerson();
  katzDeliLine.shift();
  
  function returnFirstPerson() {
    return `Currently serving ${ katzDeliLine[0] }.`;
  }
}
// "There is nobody waiting to be served!"
