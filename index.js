// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)
  var i = 0

  while (i < katzDeliLine.length) {

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
    i++
  }



}

function nowServing(katzDeliLine){

    var emptyArray = []
    var deliLine = []

    deliLine.push(katzDeliLine)

      if(deliLine === emptyArray){
        return "There is nobody waiting to be served!"
      }
      else if(deliLine > 0){
        //deliLine.pop()
        return `Currently serving ${console.log(deliLine[0])}`
      }
}

function currentLine(katzDeliLine){





}
