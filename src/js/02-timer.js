import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const mainInput = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button');
const days1 = document.querySelector('[data-days]');
const hours1 = document.querySelector('[data-hours]');
const min1 = document.querySelector('[data-minutes]');
const sec1 = document.querySelector('[data-seconds]');
const date = new Date();
startBtn.addEventListener('click', timeCount)



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if ( selectedDates[0] - date <= 0  ) {
            window.alert("Please choose a date in the future")
        }
        else
        {startBtn.disabled = false;}
    },

  };
  startBtn.disabled = true;
flatpickr(mainInput, options)

function timeCount (){setInterval(() => {console.log(convertMs(Date.parse(mainInput.value) - new Date()))
 
const { days, hours, minutes, seconds } = convertMs();

  days1.textContent = addZero(days);
  hours1.textContent = addZero(hours);
  min1.textContent = addZero(minutes);
  sec1.textContent = addZero(seconds);


  function addZero(value) {
    return value.toString().padStart(2, '0');
    
  }
},1000);




}

function convertMs(ms) {
        const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining daysd
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };


  }

 

  

