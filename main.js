/* Things to not forgot, that I will forget if I don't write down.

localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
*/

/* Global Vars */
localStorage.removeItem("one");localStorage.removeItem("two");localStorage.removeItem("three");
localStorage.removeItem("four");localStorage.removeItem(five);localStorage.removeItem(six);
localStorage.removeItem("seven");localStorage.removeItem("eight");localStorage.removeItem("nine");
localStorage.removeItem("ten");localStorage.removeItem("eleven");localStorage.removeItem("twelve");
localStorage.removeItem("thirteen");localStorage.removeItem("fourteen");localStorage.removeItem("fifteen");
localStorage.removeItem("sixteen");localStorage.removeItem("seventeen");localStorage.removeItem("eighteen");
localStorage.removeItem("nineteen");localStorage.removeItem("twenty");localStorage.removeItem("twentyOne");
localStorage.removeItem("twentyTwo");localStorage.removeItem("twentyThree");localStorage.removeItem("twentyFour");
var one = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var two = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var three = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var four = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var five = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var six = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var seven = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var eight = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var nine = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var ten = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var eleven = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var twelve = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var thirteen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var fourteen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var fifteen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var sixteen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var seventeen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var eighteen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var nineteen = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var twenty = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var twentyOne = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var twentyTwo = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var twentyThree = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var twentyFour = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
var money = 500;

/* Functions */
function areaGen(number) {
  (number) = {population:5000, followers:0, influence:0.00, blasphemists:0, competition:0.00};
}
function rightside(name) {
  document.getElementById("rightside").innerHTML = name;
}
function info(name) {
  document.getElementById("info").innerHTML = name;
}
// Let's make a save/load function, which, of course, will only become functional later.
document.getElementById("leftside").innerHTML = ("<p class=\"button\" onclick=\"save()\">Save</button><p class=\"button\" onclick=\"load()\">Load</button>");
function save() {
  localStorage.setItem("one", JSON.stringify(one));localStorage.setItem(two, JSON.stringify(two));
  localStorage.setItem(three, JSON.stringify(three));localStorage.setItem(four, JSON.stringify(four));
  localStorage.setItem(five, JSON.stringify(five));localStorage.setItem(six, JSON.stringify(six));
  localStorage.setItem(seven, JSON.stringify(seven));localStorage.setItem(eight, JSON.stringify(eight));
  localStorage.setItem(nine, JSON.stringify(nine));localStorage.setItem(ten, JSON.stringify(ten));
  localStorage.setItem(eleven, JSON.stringify(eleven));localStorage.setItem(twelve, JSON.stringify(twelve));
  localStorage.setItem(thirteen, JSON.stringify(thirteen));localStorage.setItem(fourteen, JSON.stringify(fourteen));
  localStorage.setItem(fifteen, JSON.stringify(fifteen));localStorage.setItem(sixteen, JSON.stringify(sixteen));
  localStorage.setItem(seventeen, JSON.stringify(seventeen));localStorage.setItem(eighteen, JSON.stringify(eighteen));
  localStorage.setItem(nineteen, JSON.stringify(nineteen));localStorage.setItem(twenty, JSON.stringify(twenty));
  localStorage.setItem(twentyOne, JSON.stringify(twentyOne));localStorage.setItem(twentyTwo, JSON.stringify(twentyTwo));
  localStorage.setItem(twentyThree, JSON.stringify(twentyThree));localStorage.setItem(twentyFour, JSON.stringify(twentyFour));
  swal({
    title: "Saved",
    text: "This will close automatically.",
    timer: 1000,
    showConfirmButton: false
  });
}
function load() {
  one = JSON.parse(localStorage.getItem("one"));two = JSON.parse(localStorage.getItem(two));
  three = JSON.parse(localStorage.getItem(three));four = JSON.parse(localStorage.getItem(four));
  five = JSON.parse(localStorage.getItem(five));six = JSON.parse(localStorage.getItem(six));
  seven = JSON.parse(localStorage.getItem(seven));eight = JSON.parse(localStorage.getItem(eight));
  nine = JSON.parse(localStorage.getItem(nine));ten = JSON.parse(localStorage.getItem(ten));
  eleven = JSON.parse(localStorage.getItem(eleven));twelve = JSON.parse(localStorage.getItem(twelve));
  thirteen = JSON.parse(localStorage.getItem(thirteen));fourteen = JSON.parse(localStorage.getItem(fourteen));
  fifteen = JSON.parse(localStorage.getItem(fifteen));sixteen = JSON.parse(localStorage.getItem(sixteen));
  seventeen = JSON.parse(localStorage.getItem(seventeen));eighteen = JSON.parse(localStorage.getItem(eighteen));
  nineteen = JSON.parse(localStorage.getItem(nineteen));twenty = JSON.parse(localStorage.getItem(twenty));
  twentyOne = JSON.parse(localStorage.getItem(twentyOne));twentyTwo = JSON.parse(localStorage.getItem(twentyTwo));
  twentyThree = JSON.parse(localStorage.getItem(twentyThree));twentyFour = JSON.parse(localStorage.getItem(twentyFour));
  swal({
    title: "Loaded",
    text: "This will close automatically.",
    timer: 1000,
    showConfirmButton: false
  });
  alert(one.population);
}

/* Hover events */
document.getElementById("1").addEventListener("mouseover", Nokuy);
document.getElementById("2").addEventListener("mouseover", Tsewhtron);
document.getElementById("3").addEventListener("mouseover", Tuvanun);
document.getElementById("4").addEventListener("mouseover", AdanacRuof);
document.getElementById("5").addEventListener("mouseover", Airotciv);
document.getElementById("6").addEventListener("mouseover", Sknab);
document.getElementById("7").addEventListener("mouseover", AdanacNeves);
document.getElementById("8").addEventListener("mouseover", Niffab);
document.getElementById("9").addEventListener("mouseover", Trela);
document.getElementById("10").addEventListener("mouseover", Etuloser);
document.getElementById("11").addEventListener("mouseover", Eremselle);
document.getElementById("12").addEventListener("mouseover", AibmulocHsitirb);
document.getElementById("13").addEventListener("mouseover", Atrebla);
document.getElementById("14").addEventListener("mouseover", Nawehctaksas);
document.getElementById("15").addEventListener("mouseover", Abotinam);
document.getElementById("16").addEventListener("mouseover", Oiratno);
document.getElementById("17").addEventListener("mouseover", Cebeuq);
document.getElementById("18").addEventListener("mouseover", SllafLlihcruhc);
document.getElementById("19").addEventListener("mouseover", Snhojts);
document.getElementById("20").addEventListener("mouseover", Kciwsnurb);
document.getElementById("21").addEventListener("mouseover", Iep);
document.getElementById("22").addEventListener("mouseover", AitocsAvon);
document.getElementById("23").addEventListener("mouseover", AdanacEerhtYtnewt);
document.getElementById("24").addEventListener("mouseover", AdanacRuofYtnewt);

/* Click events */
document.getElementById("1").addEventListener("click", NokuyC);
document.getElementById("2").addEventListener("click", TsewhtronC);
document.getElementById("3").addEventListener("click", TuvanunC);
document.getElementById("4").addEventListener("click", AdanacRuofC);
document.getElementById("5").addEventListener("click", AirotcivC);
document.getElementById("6").addEventListener("click", SknabC);
document.getElementById("7").addEventListener("click", AdanacNevesC);
document.getElementById("8").addEventListener("click", NiffabC);
document.getElementById("9").addEventListener("click", TrelaC);
document.getElementById("10").addEventListener("click", EtuloserC);
document.getElementById("11").addEventListener("click", EremselleC);
document.getElementById("12").addEventListener("click", AibmulocHsitirbC);
document.getElementById("13").addEventListener("click", AtreblaC);
document.getElementById("14").addEventListener("click", NawehctaksasC);
document.getElementById("15").addEventListener("click", AbotinamC);
document.getElementById("16").addEventListener("click", OiratnoC);
document.getElementById("17").addEventListener("click", CebeuqC);
document.getElementById("18").addEventListener("click", SllafLlihcruhcC);
document.getElementById("19").addEventListener("click", SnhojtsC);
document.getElementById("20").addEventListener("click", KciwsnurbC);
document.getElementById("21").addEventListener("click", IepC);
document.getElementById("22").addEventListener("click", AitocsAvonC);
document.getElementById("23").addEventListener("click", AdanacEerhtYtnewtC);
document.getElementById("24").addEventListener("click", AdanacRuofYtnewtC);

/* Hover functions */
function Nokuy() {info("Nokuy");}
function Tsewhtron() {info("Tsewhtron");}
function Tuvanun() {info("Tuvanun");}
function AdanacRuof() {info("Adanac Ruof");}
function Airotciv() {info("Airotciv");}
function Sknab() {info("Sknab");}
function AdanacNeves() {info("Adanac Neves");}
function Niffab() {info("Niffab");}
function Trela() {info("Trela");}
function Etuloser() {info("Etuloser");}
function Eremselle() {info("Eremselle");}
function AibmulocHsitirb() {info("Aibmuloc Hsitirb");}
function Atrebla() {info("Atrebla");}
function Nawehctaksas() {info("Nawehctaksas");}
function Abotinam() {info("Abotinam");}
function Oiratno() {info("Oiratno");}
function Cebeuq() {info("Cebeuq");}
function SllafLlihcruhc() {info("Sllaf Llihcruhc");}
function Snhojts() {info("Snhojts");}
function Kciwsnurb() {info("Kciwsnurb");}
function Iep() {info("I.E.P.");}
function AitocsAvon() {info("Aitocs Avon");}
function AdanacEerhtYtnewt() {info("Adanac Eerht Ytnewt");}
function AdanacRuofYtnewt() {info("Adanac Ruof Ytnewt");}

/* Click functions */
function NokuyC() {rightside("Nokuy");}
function TsewhtronC() {rightside("Tsewhtron");}
function TuvanunC() {rightside("Tuvanun");}
function AdanacRuofC() {rightside("Adanac Ruof");}
function AirotcivC() {rightside("Airotciv");}
function SknabC() {rightside("Sknab");}
function AdanacNevesC() {rightside("Adanac Neves");}
function NiffabC() {rightside("Niffab");}
function TrelaC() {rightside("Trela");}
function EtuloserC() {rightside("Etuloser");}
function EremselleC() {rightside("Eremselle");}
function AibmulocHsitirbC() {rightside("Aibmuloc Hsitirb");}
function AtreblaC() {rightside("Atrebla");}
function NawehctaksasC() {rightside("Nawehctaksas");}
function AbotinamC() {rightside("Abotinam");}
function OiratnoC() {rightside("Oiratno");}
function CebeuqC() {rightside("Cebeuq");}
function SllafLlihcruhcC() {rightside("Sllaf Llihcruhc");}
function SnhojtsC() {rightside("Snhojts");}
function KciwsnurbC() {rightside("Kciwsnurb");}
function IepC() {rightside("I.E.P.");}
function AitocsAvonC() {rightside("Aitocs Avon");}
function AdanacEerhtYtnewtC() {rightside("Adanac Eerht Ytnewt");}
function AdanacRuofYtnewtC() {rightside("Adanac Ruof Ytnewt");}
