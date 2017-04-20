function harvard() {
    if ((document.getElementById('screen1').value >= 4.5) && (document.getElementById('screen2').value == 800) && (document.getElementById('screen3').value == 800) && (document.getElementById('screen4').value >= 35) && (document.getElementById('screen5').value >= 35) && (document.getElementById('screen6').value >= 35)) {
        return "Top applicant, but Harvard is VERY competitive. ";
    }
    else if ((document.getElementById('screen1').value >= 4.1) && (document.getElementById('screen2').value >= 700) && (document.getElementById('screen3').value >= 700) && (document.getElementById('screen4').value >= 32) && (document.getElementById('screen5').value >= 31) && (document.getElementById('screen6').value >= 33)) {
        return "Would be sufficient at another school, but won't be enough.";
    }
    else {
        return "Little to no chance. Try an easier school.";
    }
}

function berkeley() {
    if ((document.getElementById('screen1').value >= 4.39) && (document.getElementById('screen2').value >= 740) && (document.getElementById('screen3').value >= 770) && (document.getElementById('screen4').value >= 34) && (document.getElementById('screen5').value >= 35) && (document.getElementById('screen6').value >= 35)) {
        return "Top applicant, but Cal is highly competitive. ";
    }
    else if ((document.getElementById('screen1').value >= 4.0) && (document.getElementById('screen2').value >= 610) && (document.getElementById('screen3').value >= 640) && (document.getElementById('screen4').value >= 30) && (document.getElementById('screen5').value >= 29) && (document.getElementById('screen6').value >= 31)) {
        return "You did well, but don't get your hopes up. ";
    }
    else {
        return "Would be sufficient at another school, but won't be enough.";
    }
}

function washington() {
    if ((document.getElementById('screen1').value >= 3.7) && (document.getElementById('screen2').value >= 660) && (document.getElementById('screen3').value >= 710) && (document.getElementById('screen4').value >= 31) && (document.getElementById('screen5').value >= 32) && (document.getElementById('screen6').value >= 32)) {
        return "High Chances! ";
    }
    else if ((document.getElementById('screen1').value >= 3.4) && (document.getElementById('screen2').value >= 540) && (document.getElementById('screen3').value >= 610) && (document.getElementById('screen4').value >= 26) && (document.getElementById('screen5').value >= 26) && (document.getElementById('screen6').value >= 25)) {
        return "Could go either way, make sure to have a safety.";
    }
    else {
        return "Low chances. Try an easier school.";
    }
}

function oregon() {
    if ((document.getElementById('screen1').value >= 3.6) && (document.getElementById('screen2').value >= 620) && (document.getElementById('screen3').value >= 610) && (document.getElementById('screen4').value >= 27) && (document.getElementById('screen5').value >= 27) && (document.getElementById('screen6').value >= 28)) {
        return "High Chances! ";
    }
    else if ((document.getElementById('screen1').value >= 3.0) && (document.getElementById('screen2').value >= 500) && (document.getElementById('screen3').value >= 500) && (document.getElementById('screen4').value >= 22) && (document.getElementById('screen5').value >= 21) && (document.getElementById('screen6').value >= 21)) {
        return "Could go either way.";
    }
    else {
        return "Low chances. Try an easier school.";
    }
}

function hawaii() {
    if ((document.getElementById('screen1').value >= 3.5) && (document.getElementById('screen2').value >= 580) && (document.getElementById('screen3').value >= 610) && (document.getElementById('screen4').value >= 25) && (document.getElementById('screen5').value >= 26) && (document.getElementById('screen6').value >= 25)) {
        return "High Chances! ";
    }
    else if ((document.getElementById('screen1').value >= 3.0) && (document.getElementById('screen2').value >= 480) && (document.getElementById('screen3').value >= 490) && (document.getElementById('screen4').value >= 20) && (document.getElementById('screen5').value >= 20) && (document.getElementById('screen6').value >= 19)) {
        return "Could go either way.";
    }
    else {
        return "Low chances. Try an easier school.";
    }
}

function harvardInputErrorCheck() {
    if ((document.getElementById('screen1').value > 5.0) || (document.getElementById('screen2').value > 800) || (document.getElementById('screen2').value < 200) || (document.getElementById('screen3').value > 800) || (document.getElementById('screen3').value < 200) || (document.getElementById('screen4').value > 36) || (document.getElementById('screen5').value > 36) || (document.getElementById('screen6').value > 36)) {
        return "ERROR INVALID INPUT. PLEASE CHECK INPUTS.";
    }
    else {
        return harvard();
    }
}

function berkeleyInputErrorCheck() {
    if ((document.getElementById('screen1').value > 5.0) || (document.getElementById('screen2').value > 800) || (document.getElementById('screen2').value < 200) || (document.getElementById('screen3').value > 800) || (document.getElementById('screen3').value < 200) || (document.getElementById('screen4').value > 36) || (document.getElementById('screen5').value > 36) || (document.getElementById('screen6').value > 36)) {
        return "ERROR INVALID INPUT. PLEASE CHECK INPUTS.";
    }
    else {
        return berkeley();
    }
}

function washingtonInputErrorCheck() {
    if ((document.getElementById('screen1').value > 5.0) || (document.getElementById('screen2').value > 800) || (document.getElementById('screen2').value < 200) || (document.getElementById('screen3').value > 800) || (document.getElementById('screen3').value < 200) || (document.getElementById('screen4').value > 36) || (document.getElementById('screen5').value > 36) || (document.getElementById('screen6').value > 36)) {
        return "ERROR INVALID INPUT. PLEASE CHECK INPUTS.";
    }
    else {
        return washington();
    }
}

function oregonInputErrorCheck() {
    if ((document.getElementById('screen1').value > 5.0) || (document.getElementById('screen2').value > 800) || (document.getElementById('screen2').value < 200) || (document.getElementById('screen3').value > 800) || (document.getElementById('screen3').value < 200) || (document.getElementById('screen4').value > 36) || (document.getElementById('screen5').value > 36) || (document.getElementById('screen6').value > 36)) {
        return "ERROR INVALID INPUT. PLEASE CHECK INPUTS.";
    }
    else {
        return oregon();
    }
}

function hawaiiInputErrorCheck() {
    if ((document.getElementById('screen1').value > 5.0) || (document.getElementById('screen2').value > 800) || (document.getElementById('screen2').value < 200) || (document.getElementById('screen3').value > 800) || (document.getElementById('screen3').value < 200) || (document.getElementById('screen4').value > 36) || (document.getElementById('screen5').value > 36) || (document.getElementById('screen6').value > 36)) {
        return "ERROR INVALID INPUT. PLEASE CHECK INPUTS.";
    }
    else {
        return hawaii();
    }
}
