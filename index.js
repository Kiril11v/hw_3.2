
    let message = '';
    const PITY_MESSAGE = "It's a pity you didn't enter ";
    const noEntered = "nothing is entered";
    const MAX_YEAR = 100;
    const MIN_YEAR = 1;
    const MAX_LENGTH = 15;
    const MIN_LENGTH = 2;

    const userName = prompt("your name:");
    if (userName === null) {
        message += PITY_MESSAGE + 'your name';
    }
        else if (!userName.trim()) {
            message += noEntered;
        }
        else if (!isNaN(userName) || +userName >= MAX_LENGTH || +userName < MIN_LENGTH) {
          message += "error: invalid name";
        }
    else {
        const name = userName.trim(); 
        message +=  `Your name is ${name}`; 
    }

    message += '\n';

    const userAge = prompt("your age:");
    if (userAge === null) {
        message +=PITY_MESSAGE + 'your age';
    }
    else if (!userAge.trim()) {
            message += noEntered;
        }
    else if (!Number.isInteger(+userAge) || +userAge >= MAX_YEAR || +userAge < MIN_YEAR) {
        message +="error: invalid age";
    }
    else {
        const age = userAge.trim();
        message += `You're ${age} old`;
    }

    message += '\n';

    if (confirm("enter OK if you a man")) {
  message += "You are a man";
} 
else {
  if (confirm("enter OK if you a woman")) {
  message += "You are a woman";
} 
else {
  message += `${PITY_MESSAGE} your gender`;
}
 }


alert (message);


    
    




