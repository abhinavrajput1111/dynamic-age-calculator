const date = document.querySelector("#date");
const button = document.querySelector("#button");
const years_info = document.querySelector("#years-info");
const month_info = document.querySelector("#months-info");
const days_info = document.querySelector("#days-info");

button.addEventListener("click", () => {
  const Date_value = date.value;
  dobCalculate(Date_value);
});

function dobCalculate(date) {
  const dob = new Date(date);
  const newDate = new Date();
  let diffrence = newDate - dob;
  const age = diffrence / (365.25 * 24 * 60 * 60 * 1000);
  const real_age = Math.floor(age);
  years_info.innerText = real_age;

  const months = (age - real_age) * 12;
  const realMonths = Math.floor(months);
  month_info.innerText = realMonths;

  const days = (months - realMonths) * (365.25 / 12);
  const realDays = Math.floor(days);
  days_info.innerText = realDays;

  //   return days;
}

// console.log(dobCalculate("1999-06-06"));
