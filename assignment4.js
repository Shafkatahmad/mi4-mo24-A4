function calculateTax(income, expenses) {
          if(income < 0 || expenses < 0 || expenses > income) {
            return "Invalid Input";
          }

          return (income - expenses) * .20;

}



function sendNotification(email) {
          if(email.includes('@') === false) {
            return "Invalid Email";
          }

          const names = email.split("@");
          return names[0] + ' sent you an email from ' + names[1];
}



function checkDigitsInName(name) {
          if(typeof(name) !== 'string'){
            return "Invalid Input";
          }
          for(let i = 0; i < name.length; i++) {
            if(isNaN(parseInt(name[i])) === false) {
              return true;
            }
          }
          return false;  
}
