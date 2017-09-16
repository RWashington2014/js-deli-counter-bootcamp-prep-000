// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){

    var i = 0


    if (katzDeliLine.length < 1) {
      return "There is nobody waiting to be served!"
    } // end if

     while(katzDeliLine.length > i){
       katzDeliLine.slice(1)
      return `Currently serving ${katzDeliLine[i]}.`
      i++

} // end while
    
    return katzDeliLine

//return emptyArray
}

function currentLine(array){

  var i = 0

  if (array < 1) {
    return "The line is currently empty."
  } //end if statement

  while(array.length > i) {

    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
    i++
  } //end while loop

} // end function
