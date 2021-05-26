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

}