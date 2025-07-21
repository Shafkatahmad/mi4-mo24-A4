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



function calculateFinalScore(obj) {
          if(typeof obj !== 'object' || Array.isArray(obj) === true) {
            return "Invalid Input";
          }

          if(obj.isFFamily === true) {
            if(obj.testScore + obj.schoolGrade >= 60) {
              return true;
            }
          }
          else if(obj.isFFamily === false) {
            if(obj.testScore + obj.schoolGrade >= 80) {
              return true;
            }
          }

          return false;
}