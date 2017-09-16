// Deli Counter Lab

var katzDeli = []

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number 1 in line.`

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
