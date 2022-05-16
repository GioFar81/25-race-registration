let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 18;


if (runnerAge > 18 && earlyRegister === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister === true) {
    console.log(`Your race will start at 9:30 am and your number is ${raceNumber}`);
} else if (runnerAge > 18 && earlyRegister === false) {
    console.log(`Your race will start at 11:00 am and your number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`Your race will start at 12:30 am and your number is ${raceNumber}`);
} else {
    console.log("Reach the registration desk for details about your race.");
}

