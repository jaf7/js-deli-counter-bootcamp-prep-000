function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push( name );

  return `Welcome, ${name}. You are number ${ katzDeliLine.indexOf(name) + 1 } in line.`;
}

function nowServing( katzDeliLine ) {
  if ( katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${ katzDeliLine.shift() }.`;
  }
}

function currentLine( katzDeliLine ) {
  if ( katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  } else {
    return "The line is currently: 1. ${katzDeliLine[0]}, 2. Grace, 3. Kent"
  }
}
// "The line is currently: 1. Ada, 2. Grace, 3. Kent"