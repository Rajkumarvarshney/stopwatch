let hour = 00;
let min = 00;
let sec = 00;
let timer = false;
let count = 0;
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
btn3.addEventListener('click', () => {
    timer = false;
    hour = 00;
    min = 00;
    sec = 00;
    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;


})
btn1.addEventListener("click", () => {
    timer = true;
    stopwatch();
});
btn2.addEventListener("click", () => {
    timer = false;
});
function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 00;
        }
        if (min == 60) {
            hour++;
            min = 00;
            sec = 00;
        }
        let secstr = sec;
        let minstr = min;
        let hrstr = hour;
        if (sec < 10) secstr = "0" + sec;
        if (min < 10) minstr = "0" + min;
        if (hour < 10) hrstr = "0" + hour;
        document.getElementById("hr").innerHTML = hrstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("sec").innerHTML = secstr;
        setTimeout(stopwatch, 10);
    }
}
