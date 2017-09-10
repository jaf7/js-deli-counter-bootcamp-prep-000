function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push( name );

  return `Welcome, ${name}. You are number ${ katzDeliLine.indexOf(name) } in line.`;
}

// `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)} in line.`
