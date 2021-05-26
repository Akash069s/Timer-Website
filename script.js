var time;
var flag = 0;

function Increase(hr = 0, min = 0, sec = 0) {
    console.log("Entered");
    var Time = document.getElementById("TimeLeft").innerText;
    console.log(Time);
    Time = Time.replace(/:/g, " ");
    Time = Time.replace(/ /g, "");
    console.log(Time);
    console.log(Time.slice(0, 2));
    var Hour = Time.slice(0, 2);
    console.log(Time.slice(2, 4));
    var Min = Time.slice(2, 4);
    console.log(Time.slice(4, ));
    var Sec = Time.slice(4, );

    if (hr == 1) {
        if (Hour < 23) {
            console.log(parseInt(Hour, 10) + 1);
            Hour = parseInt(Hour, 10) + 1;
        } else {
            console.log("Hour = 00");
            Hour = "00";
        }
        if (Hour < 10 && Hour != 0) {
            Hour = "0" + Hour;
        }
    } else if (min == 1) {
        if (Min < 59) {
            console.log("Min = " + parseInt(Min, 10) + 1);
            Min = parseInt(Min, 10) + 1;
        } else {
            console.log("Min = 00");
            Min = "00";
        }
        if (Min < 10 && Min != 0) {
            Min = "0" + Min;
        }
    } else if (sec == 1) {
        if (Sec < 59) {
            console.log("Sec = " + parseInt(Sec, 10) + 1);
            Sec = parseInt(Sec, 10) + 1;
        } else {
            console.log("Sec = 00");
            Sec = "00";
        }
        if (Sec < 10 && Sec != 0) {
            Sec = "0" + Sec;
        }
    }
    console.log(Hour + " :" + Min + " :" + Sec);
    setTimeout(function() {
        document.getElementById("TimeLeft").innerText = Hour + ": " + Min + ": " + Sec;
    }, 100);

}

function Decrease(hr = 0, min = 0, sec = 0) {
    console.log("Entered");
    var Time = document.getElementById("TimeLeft").innerText;
    console.log(Time);
    Time = Time.replace(/:/g, " ");
    Time = Time.replace(/ /g, "");
    console.log(Time);
    console.log(Time.slice(0, 2));
    var Hour = Time.slice(0, 2);
    console.log(Time.slice(2, 4));
    var Min = Time.slice(2, 4);
    console.log(Time.slice(4, ));
    var Sec = Time.slice(4, );

    if (hr == 1) {
        if (Hour > 0 && Hour != 0) {
            console.log(parseInt(Hour, 10) - 1);
            Hour = parseInt(Hour, 10) - 1;
        } else {
            console.log("Hour = 23");
            Hour = "23";
        }
        if (Hour < 10) {
            Hour = "0" + Hour;
        }
    } else if (min == 1) {
        if (Min > 0 && Min != 0) {
            console.log("Min = " + parseInt(Min, 10) - 1);
            Min = parseInt(Min, 10) - 1;
        } else {
            console.log("Min = 59");
            Min = "59";
        }
        if (Min < 10) {
            Min = "0" + Min;
        }
    } else if (sec == 1) {
        if (Sec > 0 && Sec != 0) {
            console.log("Sec = " + parseInt(Sec, 10) - 1);
            Sec = parseInt(Sec, 10) - 1;
        } else {
            console.log("Sec = 59");
            Sec = "59";
        }
        if (Sec < 10) {
            Sec = "0" + Sec;
        }
    }
    console.log(Hour + " :" + Min + " :" + Sec);
    setTimeout(function() {
        document.getElementById("TimeLeft").innerText = Hour + ": " + Min + ": " + Sec;
    }, 100);

}

function StartTimer() {
    document.getElementById("increase1").disabled = true;
    document.getElementById("increase2").disabled = true;
    document.getElementById("increase3").disabled = true;
    document.getElementById("decrease1").disabled = true;
    document.getElementById("decrease2").disabled = true;
    document.getElementById("decrease3").disabled = true;

    document.getElementById("Start").hidden = true;
    document.getElementById("Stop").hidden = false;
    flag = 0;
    var hour_chg = min_chg = sec_chg = 0;
    var time = document.getElementById("TimeLeft").innerText;
    console.log("Time = " + time);
    time = time.replace(/:/g, "");
    time = time.replace(/ /g, "");
    var hour = time.slice(0, 2);
    var min = time.slice(2, 4);
    var sec = time.slice(4, );

    if (hour == "00" && min == "00" && sec == "00") {
        console.log("Timer Over");
        flag = 1;
        document.getElementById("Alarm").play();
        document.getElementById("StopAlarm").hidden = false;
        document.getElementById("increase1").disabled = false;
        document.getElementById("increase2").disabled = false;
        document.getElementById("increase3").disabled = false;
        document.getElementById("decrease1").disabled = false;
        document.getElementById("decrease2").disabled = false;
        document.getElementById("decrease3").disabled = false;

        document.getElementById("Start").hidden = false;
        document.getElementById("Stop").hidden = true;
    } else {
        if (sec == "00") {
            sec = "59";
            if (min == "00" && hour != "00") {
                min = "59";
                hour = Number(hour) - 1;
                hour_chg = 1;
            } else {
                min = Number(min) - 1;
                min_chg = 1;
            }
        } else {
            sec = Number(sec) - 1;
            sec_chg = 1;
        }
    }

    if (hour < 10 && hour_chg == 1) {
        hour = "0" + hour;
    }
    if (min < 10 && min_chg == 1) {
        min = "0" + min;
    }
    if (sec < 10 && sec_chg == 1) {
        sec = "0" + sec;
    }
    time = hour + ": " + min + ": " + sec;
    if (hour == "00") {
        if (min == "00") {
            if (Number(sec) < 10 && sec != "00") {
                chk = 1;
                console.log("Crimson")
                document.getElementById("TimerRing").style.backgroundColor = "red";
            } else
                document.getElementById("TimerRing").style.backgroundColor = "#E4D00A";
        }
    }
    if (time == "00: 00: 00")
        document.getElementById("TimerRing").style.backgroundColor = "#228B22";
    setTimeout(function() {
        document.getElementById("TimeLeft").innerText = time;
        if (flag == 0)
            StartTimer();
    }, 1000);

}

function StopTimer() {
    flag = 1;

    document.getElementById("increase1").disabled = false;
    document.getElementById("increase2").disabled = false;
    document.getElementById("increase3").disabled = false;
    document.getElementById("decrease1").disabled = false;
    document.getElementById("decrease2").disabled = false;
    document.getElementById("decrease3").disabled = false;

    document.getElementById("Start").hidden = false;
    document.getElementById("Stop").hidden = true;
}

function Cancel() {

    flag = 1;
    setTimeout(function() {
        time = "00: 00: 00";
        document.getElementById("TimeLeft").innerText = time;
    }, 1000);
    document.getElementById("TimerRing").style.backgroundColor = "#228B22";
    console.log("Timer Cancelled");
    StopTimer();
}

function StopAlarm() {

    document.getElementById("Alarm").pause();
    document.getElementById("Alarm").load();
    document.getElementById("StopAlarm").hidden = true;
}