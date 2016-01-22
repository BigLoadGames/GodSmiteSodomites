// Global Vars

// Functions
function rightside(name) {
    document.getElementById("rightside").innerHTML = name;
}
function info(name) {
    document.getElementById("info").innerHTML = name;
}
// Hover events
document.getElementById("1").addEventListener("mouseover", one);
document.getElementById("2").addEventListener("mouseover", two);
document.getElementById("3").addEventListener("mouseover", three);
document.getElementById("4").addEventListener("mouseover", four);
document.getElementById("5").addEventListener("mouseover", five);
document.getElementById("6").addEventListener("mouseover", six);
document.getElementById("7").addEventListener("mouseover", seven);
document.getElementById("8").addEventListener("mouseover", eight);
document.getElementById("9").addEventListener("mouseover", nine);
document.getElementById("10").addEventListener("mouseover", ten);
document.getElementById("11").addEventListener("mouseover", eleven);
document.getElementById("12").addEventListener("mouseover", twelve);
document.getElementById("13").addEventListener("mouseover", thirteen);
document.getElementById("14").addEventListener("mouseover", fourteen);
document.getElementById("15").addEventListener("mouseover", fifteen);
document.getElementById("16").addEventListener("mouseover", sixteen);
document.getElementById("17").addEventListener("mouseover", seventeen);
document.getElementById("18").addEventListener("mouseover", eighteen);
document.getElementById("19").addEventListener("mouseover", nineteen);
document.getElementById("20").addEventListener("mouseover", twenty);
document.getElementById("21").addEventListener("mouseover", twentyone);
document.getElementById("22").addEventListener("mouseover", twentytwo);
document.getElementById("23").addEventListener("mouseover", twentythree);
document.getElementById("24").addEventListener("mouseover", twentyfour);

// Click events
document.getElementById("1").addEventListener("click", oneC);
document.getElementById("2").addEventListener("click", twoC);
document.getElementById("3").addEventListener("click", threeC);
document.getElementById("4").addEventListener("click", fourC);
document.getElementById("5").addEventListener("click", fiveC);
document.getElementById("6").addEventListener("click", sixC);
document.getElementById("7").addEventListener("click", sevenC);
document.getElementById("8").addEventListener("click", eightC);
document.getElementById("9").addEventListener("click", nineC);
document.getElementById("10").addEventListener("click", tenC);
document.getElementById("11").addEventListener("click", elevenC);
document.getElementById("12").addEventListener("click", twelveC);
document.getElementById("13").addEventListener("click", thirteenC);
document.getElementById("14").addEventListener("click", fourteenC);
document.getElementById("15").addEventListener("click", fifteenC);
document.getElementById("16").addEventListener("click", sixteenC);
document.getElementById("17").addEventListener("click", seventeenC);
document.getElementById("18").addEventListener("click", eighteenC);
document.getElementById("19").addEventListener("click", nineteenC);
document.getElementById("20").addEventListener("click", twentyC);
document.getElementById("21").addEventListener("click", twentyoneC);
document.getElementById("22").addEventListener("click", twentytwoC);
document.getElementById("23").addEventListener("click", twentythreeC);
document.getElementById("24").addEventListener("click", twentyfourC);

// Hover functions
function one() {info("Nokuy");}
function two() {info("Tsewhtron");}
function three() {info("Tuvanun");}
function four() {info("Adanac Ruof");}
function five() {info("Airotciv");}
function six() {info("Sknab");}
function seven() {info("Adanac Neves");}
function eight() {info("Niffab");}
function nine() {info("Trela");}
function ten() {info("Etuloser");}
function eleven() {info("Eremselle");}
function twelve() {info("Aibmuloc Hsitirb");}
function thirteen() {info("Atrebla");}
function fourteen() {info("Nawehctaksas");}
function fifteen() {info("Abotinam");}
function sixteen() {info("Oiratno");}
function seventeen() {info("Cebeuq");}
function eighteen() {info("Sllaf Llihcruhc");}
function nineteen() {info("Snhojts");}
function twenty() {info("Kciwsnurb");}
function twentyone() {info("I.E.P.");}
function twentytwo() {info("Aitocs Avon");}
function twentythree() {info("Adanac Eerht Ytnewt");}
function twentyfour() {info("Adanac Ruof Ytnewt");}

// Click functions
function oneC() {rightside("Nokuy");localStorage.setItem('prompt', prompt("Save game test."));}
function twoC() {rightside("Tsewhtron");}
function threeC() {rightside("Tuvanun");}
function fourC() {rightside("Adanac Ruof");}
function fiveC() {rightside("Airotciv");}
function sixC() {rightside("Sknab");}
function sevenC() {rightside("Adanac Neves");}
function eightC() {rightside("Niffab");}
function nineC() {rightside("Trela");}
function tenC() {rightside("Etuloser");}
function elevenC() {rightside("Eremselle");}
function twelveC() {rightside("Aibmuloc Hsitirb");}
function thirteenC() {rightside("Atrebla");}
function fourteenC() {rightside("Nawehctaksas");}
function fifteenC() {rightside("Abotinam");}
function sixteenC() {rightside("Oiratno");}
function seventeenC() {rightside("Cebeuq");}
function eighteenC() {rightside("Sllaf Llihcruhc");}
function nineteenC() {rightside("Snhojts");}
function twentyC() {rightside("Kciwsnurb");}
function twentyoneC() {rightside("I.E.P.");}
function twentytwoC() {rightside("Aitocs Avon");}
function twentythreeC() {rightside("Adanac Eerht Ytnewt");}
function twentyfourC() {rightside("Adanac Ruof Ytnewt");}


var b = localStorage.getItem('prompt');
rightside(b);
