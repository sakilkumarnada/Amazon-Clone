const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  // Check if the input is empty
  if (birthdayValue === "") {
    resultEl.innerText = "Please enter your birthday.";
    resultEl.style.color = "red";
    return;
  }

  const ageDetails = getAgeDetails(birthdayValue);

  // Check for future dates
  if (ageDetails.age < 0) {
    resultEl.innerText = "The date cannot be in the future!";
    resultEl.style.color = "red";
    return;
  }

  // Display the result in the required format
  resultEl.innerText = `Your age is ${ageDetails.age} years ${ageDetails.months} months ${ageDetails.days} days ${ageDetails.hours} hours ${ageDetails.minutes} minutes and ${ageDetails.seconds} seconds.`;
  resultEl.style.color = "green";
}

function getAgeDetails(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  // Calculate the total difference in milliseconds
  const ageInMilliseconds = currentDate - birthdayDate;

  // Calculate each component (years, months, days, hours, minutes, seconds)
  const totalSeconds = Math.floor(ageInMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalMonths = Math.floor(totalDays / 30.4375);  // Average month length in days
  const totalYears = Math.floor(totalMonths / 12);

  // Calculate remaining values after subtracting full years and months
  const remainingMonths = totalMonths % 12;
  const remainingDays = totalDays % 30.4375;
  const remainingHours = totalHours % 24;
  const remainingMinutes = totalMinutes % 60;
  const remainingSeconds = totalSeconds % 60;

  return {
    age: totalYears,
    months: remainingMonths,
    days: Math.floor(remainingDays),
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
}

// Event listener for button click
btnEl.addEventListener("click", calculateAge);
