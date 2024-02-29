let $ = (id) => {
    return document.getElementById(id);
}

let $days = $('bDays');
let $hours = $('bHours');
let $minutes = $('bMinutes');
let $seconds = $('bSeconds');
let nowDate = new Date();

let targetDate = new Date(nowDate.getTime() + (10*24*60*60*1000));
dateformat = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.querySelector('.duedate').textContent = targetDate.toLocaleDateString('en-US', dateformat);

let countDowntimer = () => {
    let timeinsec = Math.floor((targetDate.valueOf() - new Date().valueOf()) / 1000

    );

    if (timeinsec < 0){
        timeinsec = 0;
    }

    let seconds = Math.floor(
        timeinsec % 60
    );
    let minutes = Math.floor(
        (timeinsec / 60 ) % 60
    );
    let hours = Math.floor(
        (timeinsec / 60 / 60) % 24
    );
    let days = Math.floor(
        timeinsec /60 / 60 / 24
    );

    let format= (num) => {
        return `${num}` .padStart(2, '0'); //used to ensure that there is a consistent two-digit display for each unit of time
    };

    $seconds.textContent = format(seconds);
    $minutes.textContent = format(minutes);
    $hours.textContent = format(hours);
    $days.textContent = format(days);

};

setInterval(countDowntimer, 1000);

