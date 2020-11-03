
//Closures & Modules

//ex1

const StringFormatter = function() {
    
    const capitalizeFirst = str => console.log(str[0].toUpperCase() + str.substring(1).toLowerCase())
    
    const skewerCase = str => console.log(str.split(" ").join("-").toLowerCase())
   
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

//************************************************************************************************************

//ex2

const Bank = function(){
    
    let _money = 500

    const depositCash = cash => _money += cash
    
    const checkBalance = () => console.log(_money)

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }          
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//************************************************************************************************************