'use strict';
// calendar library
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// alert library
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
//
const inputEl = document.getElementById('datetime-picker');
const button = document.querySelector('button');
button.setAttribute('disabled', '');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let intervalId = null;
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() > Date.now()) {
      userSelectedDate = selectedDates[0].getTime();
      button.removeAttribute('disabled');
      console.log('userSelectedDate', userSelectedDate);
    } else {
      button.setAttribute('disabled', '');
      alert('Please choose a date in the future');
    }
  },
});

button.addEventListener('click', () => {
  if (userSelectedDate) {
    button.setAttribute('disabled', '');
    inputEl.setAttribute('disabled', '');
  }
  intervalId = setInterval(timer, 1000);
});
//
function timer(intervalId) {
  const currentTime = Date.now();
  const difference = userSelectedDate - currentTime;
  const { days, hours, minutes, seconds } = convertMs(difference);
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
  if (difference <= 0) {
    clearInterval(intervalId);
    daysEl.textContent = '00';
  hoursEl.textContent = '00';
  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
  }
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
//  my code is up
// Глобальная переменная для выбранной даты
// let userSelectedDate = null;
// let intervalId = null;

// const inputEl = document.getElementById('datetime-picker');
// const button = document.querySelector('button');
// button.setAttribute('disabled', '');
// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');

// // Инициализация плагина Flatpickr
// flatpickr('#datetime-picker', {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() > Date.now()) {
//       userSelectedDate = selectedDates[0].getTime();
//       button.removeAttribute('disabled');
//     } else {
//       button.setAttribute('disabled', '');
//       alert('Пожалуйста, выберите дату в будущем');
//     }
//   },
// });

// // Обработчик клика по кнопке
// button.addEventListener('click', () => {
//   if (userSelectedDate) {
//     button.setAttribute('disabled', '');
//     inputEl.setAttribute('disabled', '');

//     if (intervalId) {
//       clearInterval(intervalId);
//     }

//     intervalId = setInterval(updateTimer, 1000);
//   }
// });

// // Функция для обновления таймера
// function updateTimer() {
//   const now = Date.now();
//   const ms = userSelectedDate - now;

//   if (ms <= 0) {
//     clearInterval(intervalId);
//     daysEl.textContent = '00';
//     hoursEl.textContent = '00';
//     minutesEl.textContent = '00';
//     secondsEl.textContent = '00';
//     return;
//   }

//   const { days, hours, minutes, seconds } = convertMs(ms);
//   daysEl.textContent = addLeadingZero(days);
//   hoursEl.textContent = addLeadingZero(hours);
//   minutesEl.textContent = addLeadingZero(minutes);
//   secondsEl.textContent = addLeadingZero(seconds);
// }

// // Функция для преобразования миллисекунд в дни, часы, минуты и секунды
// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// // Функция для добавления ведущего нуля
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
