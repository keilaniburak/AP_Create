function oregon() {
    if ((document.getElementById('screen1').value >= 3.6) && (document.getElementById('screen2').value >= 620) && (document.getElementById('screen3').value >= 610) && (document.getElementById('screen5').value >= 27) && (document.getElementById('screen7').value >= 27) && (document.getElementById('screen8').value >= 28)) {
        return "High Chances! ";
    }
    else if ((document.getElementById('screen1').value >= 3.0) && (document.getElementById('screen2').value >= 500) && (document.getElementById('screen3').value >= 500) && (document.getElementById('screen5').value >= 22) && (document.getElementById('screen7').value >= 21) && (document.getElementById('screen8').value >= 21)) {
        return "Could go either way.";
    }
    else {
        return "Low chances. Try an easier school.";
    }
}

function washington() {
    if ((document.getElementById('screen1').value >= 3.7) && (document.getElementById('screen2').value >= 660) && (document.getElementById('screen3').value >= 710) && (document.getElementById('screen4').value >= 650) && (document.getElementById('screen5').value >= 31) && (document.getElementById('screen6').value >= 9) && (document.getElementById('screen7').value >= 27) && (document.getElementById('screen8').value >= 28)) {
        retun "High Chances!";
    }
    else if ((document.getElementById('screen1').value >= 3.4) && (document.getElementById('screen2').value >= 540) && (document.getElementById('screen3').value >= 580) && (document.getElementById('screen4').value >= 530) && (document.getElementById('screen5').value >= 26) && (document.getElementById('screen6').value >= 8) && (document.getElementById('screen7').value >= 26) && (document.getElementById('screen8').value >= 25)) {
        return "Could go either way.";
    }
    else {
        return "Low chances. Try an easier school, like the University of Oregon.";
        washington();
    }
}

    var gpa = document.getElementById('screen1').value;
    var sat1 = document.getElementById('screen2').value;
    var sat2 = document.getElementById('screen3').value;
    var sat3 = document.getElementById('screen4').value;
    var act1 = document.getElementById('screen5').value;
    var act2 = document.getElementById('screen6').value;
    var act3 = document.getElementById('screen7').value;
    var act4 = document.getElementById('screen8').value;

function oregon() {
    if ((gpa >= 3.6) && (sat1 >= 620) && (sat2 >= 610) && (act1 >= 27) && (act3 >= 27) && (act4 >= 28)) {
        return "High Chances!";
    }
    else if ((gpa >= 3.0) && (sat1 >= 500) && (sat3 >= 500) && (act1 >= 22) && (act3>= 21) && (act4 >= 21)) {
        return "Could go either way.";
    }
    else {
        return "Low chances. Try an easier school.";
    }
}
