// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){

    var emptyArray = []
    var i = 0


    emptyArray = [...emptyArray, katzDeliLine]


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

function currentLine(katzDeliLine){





}
