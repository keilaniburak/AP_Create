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
var Washington = new College(3.5, 3.9, 540, 660, 610, 710, 26, 31, 26, 32, 25, 32);
var Oregon = new College(3.0, 3.6, 500, 620, 500, 610, 22, 27, 21, 27, 21, 28);
var Hawaii = new College(3.0, 3.5, 480, 580, 490, 610, 20, 25, 20, 26, 19, 25);

var weightedGPA = document.getElementById('screen1').value;
var satcriticalReadng = document.getElementById('screen2').value;
var satMath = document.getElementById('screen3').value;
var actComposite = document.getElementById('screen4').value;
var actMath = document.getElementById('screen5').value;
var actEnglish = document.getElementById('screen6').value;

function checkHarvard() {
    if ((weightedGPA >= Harvard.WeightedGPA75Pct) && (satcriticalReadng == Harvard.SATCriticalReading75Pct) && (satMath == Harvard.SATMath75Pct) && (actComposite >= Harvard.ACTComposite75Pct) && (actMath >= Harvard.ACTMath75Pct) && (actEnglish >= Harvard.ACTEnglish75Pct)) {
        return "Top applicant, but Harvard is VERY competitive. ";
    }
    else if ((weightedGPA >= Harvard.WeightedGPA25Pct) && (satcriticalReadng >= Harvard.SATCriticalReading25Pct) && (satMath >= Harvard.SATMath25Pct) && (actComposite  >= Harvard.ACTComposite25Pct) && (actMath >= Harvard.ACTMath25Pct) && (actEnglish >= Harvard.ACTEnglish25Pct)) {
        return "Would be sufficient at another school, but won't be enough.";
    }
    else {
        return "Little to no chance. Try an easier school.";
    }
}

function checkBerkeley() {
    if ((weightedGPA >= Berkeley.WeightedGPA75Pct) && (satcriticalReadng == Berkeley.SATCriticalReading75Pct) && (satMath == Berkeley.SATMath75Pct) && (actComposite >= Berkeley.ACTComposite75Pct) && (actMath >= Berkeley.ACTMath75Pct) && (actEnglish >= Berkeley.ACTEnglish75Pct)) {
        return "Top applicant, but Harvard is VERY competitive. ";
    }
    else if ((weightedGPA >= Berkeley.WeightedGPA25Pct) && (satcriticalReadng >= Berkeley.SATCriticalReading25Pct) && (satMath >= Berkeley.SATMath25Pct) && (actComposite >= Berkeley.ACTComposite25Pct) && (actMath >= Berkeley.ACTMath25Pct) && (actEnglish >= Berkeley.ACTEnglish25Pct)) {
        return "Would be sufficient at another school, but won't be enough.";
    }
    else {
        return "Little to no chance. Try an easier school.";
    }
}

function checkWashington() {
    if ((weightedGPA >= Washington.WeightedGPA75Pct) && (satcriticalReadng == Washington.SATCriticalReading75Pct) && (satMath == Washington.SATMath75Pct) && (actComposite >= Washington.ACTComposite75Pct) && (actMath >= Washington.ACTMath75Pct) && (actEnglish >= Washington.ACTEnglish75Pct)) {
        return "Top applicant, but Harvard is VERY competitive. ";
    }
    else if ((weightedGPA >= Washington.WeightedGPA25Pct) && (satcriticalReadng >= Washington.SATCriticalReading25Pct) && (satMath >= Washington.SATMath25Pct) && (actComposite >= Washington.ACTComposite25Pct) && (actMath >= Washington.ACTMath25Pct) && (actEnglish >= Washington.ACTEnglish25Pct)) {
        return "Would be sufficient at another school, but won't be enough.";
    }
    else {
        return "Little to no chance. Try an easier school.";
    }
}

function checkOregon() {
    if ((weightedGPA >= Oregon.WeightedGPA75Pct) && (satcriticalReadng == Oregon.SATCriticalReading75Pct) && (satMath == Oregon.SATMath75Pct) && (actComposite >= Oregon.ACTComposite75Pct) && (actMath >= Oregon.ACTMath75Pct) && (actEnglish >= Oregon.ACTEnglish75Pct)) {
        return "Top applicant, but Harvard is VERY competitive. ";
    }
    else if ((weightedGPA >= Oregon.WeightedGPA25Pct) && (satcriticalReadng >= Oregon.SATCriticalReading25Pct) && (satMath >= oregon.SATMath25Pct) && (actComposite >= Oregon.ACTComposite25Pct) && (actMath >= Oregon.ACTMath25Pct) && (actEnglish >= Oregon.ACTEnglish25Pct)) {
        return "Would be sufficient at another school, but won't be enough.";
    }
    else {
        return "Little to no chance. Try an easier school.";
    }
}

function checkHawaii() {
    if ((weightedGPA >= Hawaii.WeightedGPA75Pct) && (satcriticalReadng == Hawaii.SATCriticalReading75Pct) && (satMath == Hawaii.SATMath75Pct) && (actComposite >= Hawaii.ACTComposite75Pct) && (actMath >= Hawaii.ACTMath75Pct) && (actEnglish >= Hawaii.ACTEnglish75Pct)) {
        return "Top applicant, but Harvard is VERY competitive. ";
    }
    else if ((weightedGPA >= Hawaii.WeightedGPA25Pct) && (satcriticalReadng >= Hawaii.SATCriticalReading25Pct) && (satMath >= Hawaii.SATMath25Pct) && (actComposite >= Hawaii.ACTComposite25Pct) && (actMath >= Hawaii.ACTMath25Pct) && (actEnglish >= Hawaii.ACTEnglish25Pct)) {
        return "Would be sufficient at another school, but won't be enough.";
    }
    else {
        return "Little to no chance. Try an easier school.";
    }
}
