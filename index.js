// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){

    var i = 0


    //if (emptyArray.length === 1) {
    //  return "There is nobody waiting to be served!"

    //}
     do{
      return `Currently serving ${emptyArray}.`
      emptyArray.shift()
      i++
      return emptyArray

    } while(emptyArray.length > i);

//return emptyArray
}

function currentLine(array){

  var i = 0

  if (array < 1) {
    return "The line is currently empty."
  } //end if statement

  while(array.length > i) {
    //emptyArray = emptyArray.push(array)
    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
    i++
  } //end while loop

} // end function
