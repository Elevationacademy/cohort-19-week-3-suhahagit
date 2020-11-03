
//Callbacks & Arrow Functions
//ex1

const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  const pushPull = func => func() // (solution)

  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"

//*****************************************************************************************************

//ex2

const returnTime = function (time) {
    alert('The current time is: ' + time)
  }

const getTime = function (func){
    const t = new Date()
    func(t)
}
  
getTime(returnTime)

//*****************************************************************************************************

//ex3

const logData = function (data){
    console.log(data);
}  

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

displayData(alert, logData, "I like to party")

//*****************************************************************************************************

//ex4

const arrowFunc = (param1, param2, param3) => param1 + param2 + param3

console.log(arrowFunc(23, 18, 56)) // 97

//*****************************************************************************************************

//ex5

const capitalize = name => console.log(name[0].toUpperCase() + name.substring(1).toLowerCase())

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

//*****************************************************************************************************

//ex6

const commentOnWeather = temp => console.log("It's" + " " + determineWeather(temp)) 

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//*****************************************************************************************************

//ex7

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")

//*****************************************************************************************************
