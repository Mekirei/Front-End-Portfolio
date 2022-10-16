const calender = document.querySelector("#app-calender");

<<<<<<< HEAD
for (let day = 1; day < 32; day++) {
    calender.insertAdjacentHTML("beforeend", `<div class="day">${day}</div>` );
=======
const isWeekend = day => {
    return true;
}





for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day);

    calender.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"  >${day}</div>`);
>>>>>>> f8e7a3fef4c03dde5844b42be37e13be99fe17ea
}

