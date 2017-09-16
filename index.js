// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){

    var emptyArray = []
    var i = 0

  //  deliLine.push(katzDeliLine)
emptyArray = [...emptyArray, katzDeliLine]
//katzDeliLine.push(katzDeliLine)

 while(i < emptyArray.length) {

    return `Currently serving ${emptyArray[i]}.`
    emptyArray.pop()
    i++
  }
return emptyArray
}

function currentLine(katzDeliLine){





}
