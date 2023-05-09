const submit = document.querySelector(".submit");
let resultDay = document.querySelector(".result-day");
let resultMonth = document.querySelector(".result-month");
let resultYear = document.querySelector(".result-year");
const errorMsgs = document.querySelectorAll(".error-msg");
let inputDay = document.querySelector(".day");
let inputMonth = document.querySelector(".month");
let inputYear = document.querySelector(".year");
const inputs = document.querySelectorAll("input");
const divs = document.querySelectorAll(".divs");
let success;

let date = new Date();

console.log(date.getFullYear());

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // day if
  if (inputDay.value == "") {
    let parent1 = inputDay.parentElement;
    parent1.style.color = "red";
    parent1.children[1].innerText = "This field is required";
    parent1.children[0].style.border = "1px solid red";
  } else if (parseInt(inputDay.value) > 31) {
    let parent1 = inputDay.parentElement;
    parent1.style.color = "red";
    parent1.children[1].innerText = "Must be a valid date";
    parent1.children[0].style.border = "1px solid red";
  } else {
    // let parent1 = inputDay.parentElement;
    // parent1.style.color = "";
    // parent1.children[1].innerText = "";
    // parent1.children[0].style.border = "1px solid green";
    // const actualDay = inputDay.value - date.getDate();
    // console.log(actualDay);
    // resultDay.innerText = actualDay;
    let parent1 = inputDay.parentElement;
    parent1.style.color = "";
    parent1.children[1].innerText = "";
    parent1.children[0].style.border = "1px solid green";
    //created a date object for birthDate, passed in the year, month and day as arguments; i subtarcted 1 from the month cos javasript date is 0 indexed 
    const birthDate = new Date(parseInt(inputYear.value), parseInt(inputMonth.value) - 1, parseInt(inputDay.value));
    //another object instance
    const currentDate = new Date();
    //get the difference between the current date and the birthdate
    const timeDiff = currentDate.getTime() - birthDate.getTime();
    //create a new date object from the time difference
    const actualAge = new Date(timeDiff);
    //
    const actualYear = actualAge.getUTCFullYear() - 1970;
    resultYear.innerText = actualYear;
    const actualMonth = actualAge.getUTCMonth();
    resultMonth.innerText = actualMonth;
    //subtracted 1 cos javascript ees the date has zero indexed
    const actualDay = actualAge.getUTCDate() - 1;
    resultDay.innerText = actualDay;
  }

  // month if
  if (inputMonth.value === "") {
    let parent2 = inputMonth.parentElement;
    parent2.style.color = "red";
    parent2.children[1].innerText = "This field is required";
    parent2.children[0].style.border = "1px solid red";
  } else if (parseInt(inputMonth.value) > 12) {
    let parent2 = inputMonth.parentElement;
    parent2.style.color = "red";
    parent2.children[1].innerText = "Must be a valid Month";
    parent2.children[0].style.border = "1px solid red";
  } else {
    // let parent2 = inputMonth.parentElement;
    // parent2.style.color = "green";
    // parent2.children[1].innerText = "";
    // parent2.children[0].style.border = "1px solid green";
    // const actualMonth = inputMonth.value - date.getMonth();
    // console.log(actualMonth);
    // resultMonth.innerText = actualMonth;
    let parent2 = inputMonth.parentElement;
    parent2.style.color = "green";
    parent2.children[1].innerText = "";
    parent2.children[0].style.border = "1px solid green";
  }

  // year if
  if (inputYear.value === "") {
    let parent3 = inputYear.parentElement;
    parent3.style.color = "red";
    parent3.children[1].innerText = "This field is required";
    parent3.children[0].style.border = "1px solid red";
  } else if (parseInt(inputYear.value) > date.getFullYear()) {
    let parent3 = inputYear.parentElement;
    parent3.style.color = "red";
    parent3.children[1].innerText = "Must be in the past";
    parent3.children[0].style.border = "1px solid red";
  } else {
    // let parent3 = inputYear.parentElement;
    // parent3.style.color = "";
    // parent3.children[1].innerText = "";
    // parent3.children[0].style.border = "1px solid green";
    // const actualYear = date.getFullYear() - inputYear.value;
    // console.log(actualYear);
    // resultYear.innerText = actualYear;
    //same process  i did for the day
    let parent3 = inputYear.parentElement;
    parent3.style.color = "";
    parent3.children[1].innerText = "";
    parent3.children[0].style.border = "1px solid green";
    const birthDate = new Date(
      parseInt(inputYear.value),
      parseInt(inputMonth.value) - 1,
      parseInt(inputDay.value)
      );
      const currentDate = new Date();
      const timeDiff = currentDate.getTime() - birthDate.getTime();
      const actualAge = new Date(timeDiff);
      const actualYear = actualAge.getUTCFullYear() - 1970;
      resultYear.innerText = actualYear;
      const actualMonth = actualAge.getUTCMonth();
      resultMonth.innerText = actualMonth;
      const actualDay = actualAge.getUTCDate() - 1;
      resultDay.innerText = actualDay;
  }

  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});
