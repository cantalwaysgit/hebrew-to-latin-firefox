

// document.body.style.border = "5px solid red";

var text = document.body.innerHTML;

//text = text.replace(//g, "h");
var a = [
    [/א/g, "a"],
    [/ב/g, "b"],
    [/ג/g, "g"],
    [/ד/g, "d"],
    [/ה/g, "h"],
    [/ו/g, "o"],
    [/ז/g, "c"],
    [/ח/g, "H"],
    [/ט/g, "T"],
    [/י/g, "i"],
    [/כ/g, "k"],
    [/ך/g, "k"],
    [/ל/g, "l"],
    [/מ/g, "m"],
    [/ם/g, "m"],
    [/נ/g, "n"],
    [/ן/g, "n"],
    [/ס/g, "s"],
    [/ע/g, "e"],
    [/פ/g, "p"],
    [/ף/g, "p"],
    [/צ/g, "z"],
    [/ץ/g, "z"],
    [/ק/g, "q"],
    [/ר/g, "r"],
    [/ש/g, "S"],
    [/ת/g, "t"]
];
for (i = 0; i < a.length; i++) {
    text = text.replace(a[i][0], a[i][1]);
}

document.body.innerHTML = text;
