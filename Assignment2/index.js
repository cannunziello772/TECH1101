const income = document.getElementById("income");
const taxOwed = document.getElementById("taxOwed");
const taxRate = document.getElementById("taxRate");
const earnings = document.getElementById("earnings");

function calculateTax(income){
    let taxAmount = 0;
    if(income <= 48535){
        taxAmount = income * .15;
    }else{
        taxAmount += 48535 * .15;
        if(income <= 97069){
            taxAmount += (income - 48535) * .205;
        }else{
            taxAmount += 48534 * 20.5;
            if(income <= 150473){
                taxAmount += (income - 97069) * .26;
            }else{
                taxAmount += 53404 * 26;
                if(income <= 214368){
                    taxAmount += (income - 150473) * .29;
                }else{
                 taxAmount += 63895 * .29 + (income - 214368) * .33;
                }
            }
        }
    }
    return taxAmount;
}
function submitOnclick(){
    if(document.getElementById("error") != null){
        document.getElementById("error").remove();
    }
    if(isNaN(income.value)){
        let error = document.createElement("DIV");
        let errorMsg = document.createTextNode("Please enter a number :)");
        error.setAttribute("id", "error");
        error.appendChild(errorMsg);
        document.body.appendChild(error);
    }else{
        const taxAmount = calculateTax(income.value);
        taxOwed.textContent = taxAmount.toFixed(2);
        taxRate.textContent = (taxAmount/income.value*100).toFixed(2);
        earnings.textContent = (income.value - taxAmount).toFixed(2);
    }
}
function clearOnclick(){
    income.value = "";
    taxOwed.textContent = "";
    taxRate.textContent = "";
    earnings.textContent = "";
    document.getElementById("error").remove();
}

submit.addEventListener("click", submitOnclick);
clear.addEventListener("click", clearOnclick);

