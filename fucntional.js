/**
 * Your online store likes to give out coupons for special occasions. 
 * Some customers try to cheat the system by entering invalid codes or using expired coupons.
 * 
 * Your mission: 
 * Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
 * A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"
 *  
 * PS: I know this not the most optmize solution but I'd like to make it more descriptive
 * 
*/
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatDate(date) {
    if (!date) return false;
    date = date.split(' ');
    return {
        month: date[0],
        day: parseFloat(date[1].replace(',', ''), 10),
        year: parseFloat(date[2], 10)
    }
}

function isExpired(currentDate, expirationDate) {
    currentDate = formatDate(currentDate);
    expirationDate = formatDate(expirationDate);

    if (currentDate.year > expirationDate.year) {
      
        return false;
    }
    if (currentDate.year == expirationDate.year) {
        
        if (months.indexOf(currentDate.month) > months.indexOf(expirationDate.month)) {
            return false;
        }

        if (months.indexOf(currentDate.month) === months.indexOf(expirationDate.month)) {
            
            if (currentDate.day > expirationDate.day) {
                return false
            }
        }
    }

    return true;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if(enteredCode !== correctCode) return false;
    return isExpired(currentDate, expirationDate);
}


/**
 * Another way to do it :)
 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
