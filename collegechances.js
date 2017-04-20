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

function washington() {
    if ((document.getElementById('screen1').value >= 3.7) && (document.getElementById('screen2').value >= 660) && (document.getElementById('screen3').value >= 710) && (document.getElementById('screen4').value >= 31) && (document.getElementById('screen5').value >= 32) && (document.getElementById('screen6').value >= 32)) {
        return "High Chances! ";
    }
    else if ((document.getElementById('screen1').value >= 3.4) && (document.getElementById('screen2').value >= 540) && (document.getElementById('screen3').value >= 710) && (document.getElementById('screen4').value >= 26) && (document.getElementById('screen5').value >= 26) && (document.getElementById('screen6').value >= 25)) {
        return "Could go either way.";
    }
    else {
        return "Low chances. Try an easier school.";
    }
}
