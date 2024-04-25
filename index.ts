import inquirer from "inquirer"


const currency:any= {
    USD:1,
    EUR:0.92,
    GBP:0.72,
    INR:74.4,
    PKR:280
}

let student_answer = await inquirer.prompt([{
    name:"from",
    type:"list",
    message:"pleas type your from currency",
    choices:['USD','EUR','GBP','INR','PKR']

},
{
    name:"to",
    type:"list",
    message:"pleas type your from currency",
    choices:['USD','EUR','GBP','INR','PKR']
},
{
    name:"amount",
    type:"number",
    message:"please type the amount you want to convert"
}])

let fromRate=currency[student_answer.from];
let toRate=currency[student_answer.to]
let amountConvert=student_answer.amount;
let baseCurrency=amountConvert /fromRate;
let convertedAmount= baseCurrency * toRate;
console.log(convertedAmount)
