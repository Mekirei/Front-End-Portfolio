const calender = document.querySelector("#app-calender");

const isWeekend = day => {
    return true;
}





for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day);

    calender.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"  >${day}</div>`);
}

