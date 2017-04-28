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

function Applicant(WeightedGPA, SATCriticalReading, SATMath, ACTComposite, ACTMath, ACTEnglish) {

    this.WeightedGPA = WeightedGPA;

    this.SATCriticalReading = SATCriticalReading;

    this.SATMath = SATMath;

    this.ACTComposite = ACTComposite;

    this.ACTMath = ACTMath;

    this.ACTEnglish = ACTEnglish;
}

function College(WeightedGPA25Pct, WeightedGPA75Pct, SATCriticalReading25Pct, SATCriticalReading75Pct, SATMath25Pct, SATMath75Pct, ACTComposite25Pct, ACTComposite75Pct, ACTMath25Pct, ACTMath75Pct, ACTEnglish25Pct, ACTEnglish75Pct) {

    this.WeightedGPA25Pct = WeightedGPA25Pct;

    this.WeightedGPA75Pct = WeightedGPA75Pct;

    this.SATCriticalReading25Pct = SATCriticalReading25Pct;

    this.SATCriticalReading75Pct = SATCriticalReading75Pct;

    this.SATMath25Pct = SATMath25Pct;

    this.SATMath75Pct = SATCriticalReading75Pct;

    this.ACTComposite25Pct = ACTComposite25Pct;

    this.ACTComposite75Pct = ACTComposite75Pct;

    this.ACTMath25Pct = ACTMath25Pct;

    this.ACTMath75Pct = ACTMath75Pct;

    this.ACTEnglish25Pct = ACTEnglish25Pct;

    this.ACTEnglish75Pct = ACTEnglish75Pct;
}

var Harvard = new College(4.1, 4.5, 700, 800, 700, 800, 32, 35, 31, 35, 33, 35);

var Berkeley = new College(4.0, 4.4, 610, 740, 640, 770, 30, 34, 29, 35, 31, 35);

var Washington = new College(3.5. 3.9, 540, 660, 610, 710, 26, 31, 26, 32, 25, 32);

var Oregon = new College(3.0, 3.6, 500, 620, 500, 610, 22, 27, 21, 27, 21, 28);

var Hawaii = new College(3.0, 3.5, 480, 580, 490, 610, 20, 25, 20, 26, 19, 25);

function getApplicantData() {
    var weightedGPA = document.getElementById('screen1').value;
    var satcriticalReadng = document.getElementById('screen2').value;
    var satMath = document.getElementById('screen3').value;
    var actComposite = document.getElementById('screen4').value;
    var actMath = document.getElementById('screen5').value;
    var actEnglish = document.getElementById('screen6').value;
}

