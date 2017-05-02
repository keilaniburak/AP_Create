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

function checkChances() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    var result1 = checkHawaii();
    var result2 = checkOregon();
    var result3 = checkWashington();
    var result4 = checkBerkeley();
    var result5 = checkHarvard();
    return result1;
    return result2;
    return result3;
    return result4;
    return result5;
}

function checkHarvard() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    if ((studentApplicant.WeightedGPA >= Harvard.WeightedGPA75Pct) && (studentApplicant.SATCriticalReading == Harvard.SATCriticalReading75Pct) && (studentApplicant.SATMath == Harvard.SATMath75Pct) && (studentApplicant.ACTComposite >= Harvard.ACTComposite75Pct) && (studentApplicant.ACTMath >= Harvard.ACTMath75Pct) && (studentApplicant.ACTEnglish >= Harvard.ACTEnglish75Pct)) {
        document.getElementById("Harvard").innerHTML = "Top applicant, but Harvard is VERY competitive.";
    }
    else if ((studentApplicant.WeightedGPA >= Harvard.WeightedGPA25Pct) && (studentApplicant.SATCriticalReading >= Harvard.SATCriticalReading25Pct) && (studentApplicant.SATMath >= Harvard.SATMath25Pct) && (studentApplicant.ACTComposite >= Harvard.ACTComposite25Pct) && (studentApplicant.ACTMath >= Harvard.ACTMath25Pct) && (studentApplicant.ACTEnglish >= Harvard.ACTEnglish25Pct)) {
        document.getElementById("Harvard").innerHTML = "Would be sufficient at most other schools but might not be enough.";
    }
    else {
        document.getElementById("Harvard").innerHTML = "Little to no chance.";
    }
}

function checkBerkeley() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    if ((studentApplicant.WeightedGPA >= Berkeley.WeightedGPA75Pct) && (studentApplicant.SATCriticalReading >= Berkeley.SATCriticalReading75Pct) && (studentApplicant.SATMath >= Berkeley.SATMath75Pct) && (studentApplicant.ACTComposite >= Berkeley.ACTComposite75Pct) && (studentApplicant.ACTMath >= Berkeley.ACTMath75Pct) && (studentApplicant.ACTEnglish  >= Berkeley.ACTEnglish75Pct)) {
        document.getElementById("Berkeley").innerHTML = "Top applicant, but Cal is still competitive.";
    }
    else if ((studentApplicant.WeightedGPA >= Berkeley.WeightedGPA25Pct) && (studentApplicant.SATCriticalReading >= Berkeley.SATCriticalReading25Pct) && (studentApplicant.SATMath >= Berkeley.SATMath25Pct) && (studentApplicant.ACTComposite >= Berkeley.ACTComposite25Pct) && (studentApplicant.ACTMath >= Berkeley.ACTMath25Pct) && (studentApplicant.ACTEnglish >= Berkeley.ACTEnglish25Pct)) {
        document.getElementById("Berkeley").innerHTML = "Would be sufficient at another school, but won't be enough.";
    }
    else {
        document.getElementById("Berkeley").innerHTML = "Little to no chance.";
    }
}

function checkWashington() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    if ((studentApplicant.WeightedGPA >= Washington.WeightedGPA75Pct) && (studentApplicant.SATCriticalReading >= Washington.SATCriticalReading75Pct) && (studentApplicant.SATMath >= Washington.SATMath75Pct) && (studentApplicant.ACTComposite >= Washington.ACTComposite75Pct) && (studentApplicant.ACTMath >= Washington.ACTMath75Pct) && (studentApplicant.ACTEnglish >= Washington.ACTEnglish75Pct)) {
        document.getElementById("Washington").innerHTML = "Top applicant. High chances. ";
    }
    else if ((studentApplicant.WeightedGPA >= Washington.WeightedGPA25Pct) && (studentApplicant.SATCriticalReading >= Washington.SATCriticalReading25Pct) && (studentApplicant.SATMath >= Washington.SATMath25Pct) && (studentApplicant.ACTComposite >= Washington.ACTComposite25Pct) && (studentApplicant.ACTMath >= Washington.ACTMath25Pct) && (studentApplicant.ACTEnglish >= Washington.ACTEnglish25Pct)) {
        document.getElementById("Washington").innerHTML = "Could go either way.";
    }
    else {
        document.getElementById("Washington").innerHTML = "Little to no chance.";
    }
}

function checkOregon() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    if ((studentApplicant.WeightedGPA >= Oregon.WeightedGPA75Pct) && (studentApplicant.SATCriticalReading >= Oregon.SATCriticalReading75Pct) && (studentApplicant.SATMath >= Oregon.SATMath75Pct) && (studentApplicant.ACTComposite >= Oregon.ACTComposite75Pct) && (studentApplicant.ACTMath >= Oregon.ACTMath75Pct) && (studentApplicant.ACTEnglish >= Oregon.ACTEnglish75Pct)) {
        document.getElementById("Oregon").innerHTML = "Top applicant. High chances. ";
    }
    else if ((studentApplicant.WeightedGPA >= Oregon.WeightedGPA25Pct) && (studentApplicant.SATCriticalReading >= Oregon.SATCriticalReading25Pct) && (studentApplicant.SATMath >= Oregon.SATMath25Pct) && (studentApplicant.ACTComposite >= Oregon.ACTComposite25Pct) && (studentApplicant.ACTMath >= Oregon.ACTMath25Pct) && (studentApplicant.ACTEnglish >= Oregon.ACTEnglish25Pct)) {
        document.getElementById("Oregon").innerHTML = "Could go either way.";
    }
    else {
        document.getElementById("Oregon").innerHTML = "Little to no chance.";
    }
}

function checkHawaii() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    if ((studentApplicant.WeightedGPA >= Hawaii.WeightedGPA75Pct) && (studentApplicant.SATCriticalReading >= Hawaii.SATCriticalReading75Pct) && (studentApplicant.SATMath >= Hawaii.SATMath75Pct) && (studentApplicant.ACTComposite >= Hawaii.ACTComposite75Pct) && (studentApplicant.ACTMath >= Hawaii.ACTMath75Pct) && (studentApplicant.ACTEnglish >= Hawaii.ACTEnglish75Pct)) {
        document.getElementById("Hawaii").innerHTML = "Top applicant. High chances.";
    }
    else if ((studentApplicant.WeightedGPA >= Hawaii.WeightedGPA25Pct) && (studentApplicant.SATCriticalReading >= Hawaii.SATCriticalReading25Pct) && (studentApplicant.SATMath >= Hawaii.SATMath25Pct) && (studentApplicant.ACTComposite >= Hawaii.ACTComposite25Pct) && (studentApplicant.ACTMath >= Hawaii.ACTMath25Pct) && (studentApplicant.ACTEnglish >= Hawaii.ACTEnglish25Pct)) {
        document.getElementById("Hawaii").innerHTML = "Could go either way.";
    }
    else {
        document.getElementById("Hawaii").innerHTML = "Little to no chance.";
    }
}

function inputerrorCheck() {
    var studentApplicant = new Applicant(document.getElementById('screen1').value, document.getElementById('screen2').value, document.getElementById('screen3').value, document.getElementById('screen4').value, document.getElementById('screen5').value, document.getElementById('screen6').value);
    if ((studentApplicant.WeightedGPA < 0 || studentApplicant.WeightedGPA > 5) || (studentApplicant.SATCriticalReading > 800 || studentApplicant.SATCriticalReading < 200) || (studentApplicant.SATMath > 800 || studentApplicant.SATMath < 200) || (studentApplicant.ACTComposite > 36 || studentApplicant.ACTComposite < 0) || (studentApplicant.ACTMath > 36 || studentApplicant.ACTMath < 0) || (studentApplicant.ACTEnglish > 36 || studentApplicant.ACTEnglish < 0)) {
        throw new Error("ERROR: INVALID INPUTS. PLEASE CHECK INPUT VALUES.");
    }
    else {}
}
