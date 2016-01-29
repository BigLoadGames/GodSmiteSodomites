/* Things to not forgot, that I will forget if I don't write down.

localStorage.setItem(")
localStorage.getItem()
JSON.stringify()
JSON.parse()
*/

/* Global Vars */
var one = {name:"Nokuy", population:5000, followers:0, blasphemists:0};
var two = {name:"Tsewhtron", population:5000, followers:0, blasphemists:0};
var three = {name:"Tuvanun", population:5000, followers:0, blasphemists:0};
var four = {name:"Adanac Ruof", population:5000, followers:0, blasphemists:0};
var five = {name:"Airotciv", population:5000, followers:0, blasphemists:0};
var six = {name:"Sknab", population:5000, followers:0, blasphemists:0};
var seven = {name:"Adanac Neves", population:5000, followers:0, blasphemists:0};
var eight = {name:"Niffab", population:5000, followers:0, blasphemists:0};
var nine = {name:"Trela", population:5000, followers:0, blasphemists:0};
var ten = {name:"Etuloser", population:5000, followers:0, blasphemists:0};
var eleven = {name:"Eremselle", population:5000, followers:0, blasphemists:0};
var twelve = {name:"Aibmuloc Hsitirb", population:5000, followers:0, blasphemists:0};
var thirteen = {name:"Atrebla", population:5000, followers:0, blasphemists:0};
var fourteen = {name:"Nawehctaksas", population:5000, followers:0, blasphemists:0};
var fifteen = {name:"Abotinam", population:5000, followers:0, blasphemists:0};
var sixteen = {name:"Oiratno", population:5000, followers:0, blasphemists:0};
var seventeen = {name:"Cebeuq", population:5000, followers:0, blasphemists:0};
var eighteen = {name:"Sllaf Llihcruhc", population:5000, followers:0, blasphemists:0};
var nineteen = {name:"Snhojts", population:5000, followers:0, blasphemists:0};
var twenty = {name:"Kciwsnurb", population:5000, followers:0, blasphemists:0};
var twentyOne = {name:"I.E.P.", population:5000, followers:0, blasphemists:0};
var twentyTwo = {name:"Aitocs Avon", population:5000, followers:0, blasphemists:0};
var twentyThree = {name:"Adanac Eerht Ytnewt", population:5000, followers:0, blasphemists:0};
var twentyFour = {name:"Adanac Ruof Ytnewt", population:5000, followers:0, blasphemists:0};
var money = 500;
var compMoney = 500;
var turn = 0;

/* Functions */
function influence(name) {
  return (name).followers/(name).population;
}
function competition(name) {
  return (name).blasphemists/(name).population;
}
function percent(name) {
  return "Influence: " + influence(name)*100 + "%" + "</br>" + "Competition: " + competition(name)*100 + "%";
}
function rename(name) {
  return (name).name = prompt("Rename city?");
}
function userMoneyPerTurn(name) {
  return money = money * (Math.pow((1 + (influence(name))), turn));
}
function userMoney() {
  return (userMoneyPerTurn(one))+(userMoneyPerTurn(two))-(money);
}
function rightMenu(name) {
  rightSide((name).name + "</br></br>" + percent(name) + "</br><p class=\"button\" id=\"rename\">Rename City</p>");
  document.getElementById("rename").onclick = function() {rename(name);rightMenu(name);};
}
function rightSide(name) {
  document.getElementById("rightSide").innerHTML = name;
}
function info(name) {
  document.getElementById("info").innerHTML = name;
}
function leftSide(name) {
  document.getElementById("leftSide").innerHTML = name;
}
leftSide(("<p class=\"button\" onclick=\"save()\">Save</button><p class=\"button\" onclick=\"load()\">Load</button>"));
// Let's make a save/load function, which, of course, will only become functional later.
function save() {
  localStorage.removeItem("one");localStorage.removeItem("two");localStorage.removeItem("three");
  localStorage.removeItem("four");localStorage.removeItem("five");localStorage.removeItem("six");
  localStorage.removeItem("seven");localStorage.removeItem("eight");localStorage.removeItem("nine");
  localStorage.removeItem("ten");localStorage.removeItem("eleven");localStorage.removeItem("twelve");
  localStorage.removeItem("thirteen");localStorage.removeItem("fourteen");localStorage.removeItem("fifteen");
  localStorage.removeItem("sixteen");localStorage.removeItem("seventeen");localStorage.removeItem("eighteen");
  localStorage.removeItem("nineteen");localStorage.removeItem("twenty");localStorage.removeItem("twentyOne");
  localStorage.removeItem("twentyTwo");localStorage.removeItem("twentyThree");localStorage.removeItem("twentyFour");
  localStorage.setItem("one", JSON.stringify(one));localStorage.setItem("two", JSON.stringify(two));
  localStorage.setItem("three", JSON.stringify(three));localStorage.setItem("four", JSON.stringify(four));
  localStorage.setItem("five", JSON.stringify(five));localStorage.setItem("six", JSON.stringify(six));
  localStorage.setItem("seven", JSON.stringify(seven));localStorage.setItem("eight", JSON.stringify(eight));
  localStorage.setItem("nine", JSON.stringify(nine));localStorage.setItem("ten", JSON.stringify(ten));
  localStorage.setItem("eleven", JSON.stringify(eleven));localStorage.setItem("twelve", JSON.stringify(twelve));
  localStorage.setItem("thirteen", JSON.stringify(thirteen));localStorage.setItem("fourteen", JSON.stringify(fourteen));
  localStorage.setItem("fifteen", JSON.stringify(fifteen));localStorage.setItem("sixteen", JSON.stringify(sixteen));
  localStorage.setItem("seventeen", JSON.stringify(seventeen));localStorage.setItem("eighteen", JSON.stringify(eighteen));
  localStorage.setItem("nineteen", JSON.stringify(nineteen));localStorage.setItem("twenty", JSON.stringify(twenty));
  localStorage.setItem("twentyOne", JSON.stringify(twentyOne));localStorage.setItem("twentyTwo", JSON.stringify(twentyTwo));
  localStorage.setItem("twentyThree", JSON.stringify(twentyThree));localStorage.setItem("twentyFour", JSON.stringify(twentyFour));
  swal({
    title: "Saved",
    text: "This will close automatically.",
    timer: 1000,
    showConfirmButton: false
  });
}
function load() {
  one = JSON.parse(localStorage.getItem("one"));two = JSON.parse(localStorage.getItem("two"));
  three = JSON.parse(localStorage.getItem("three"));four = JSON.parse(localStorage.getItem("four"));
  five = JSON.parse(localStorage.getItem("five"));six = JSON.parse(localStorage.getItem("six"));
  seven = JSON.parse(localStorage.getItem("seven"));eight = JSON.parse(localStorage.getItem("eight"));
  nine = JSON.parse(localStorage.getItem("nine"));ten = JSON.parse(localStorage.getItem("ten"));
  eleven = JSON.parse(localStorage.getItem("eleven"));twelve = JSON.parse(localStorage.getItem("twelve"));
  thirteen = JSON.parse(localStorage.getItem("thirteen"));fourteen = JSON.parse(localStorage.getItem("fourteen"));
  fifteen = JSON.parse(localStorage.getItem("fifteen"));sixteen = JSON.parse(localStorage.getItem("sixteen"));
  seventeen = JSON.parse(localStorage.getItem("seventeen"));eighteen = JSON.parse(localStorage.getItem("eighteen"));
  nineteen = JSON.parse(localStorage.getItem("nineteen"));twenty = JSON.parse(localStorage.getItem("twenty"));
  twentyOne = JSON.parse(localStorage.getItem("twentyOne"));twentyTwo = JSON.parse(localStorage.getItem("twentyTwo"));
  twentyThree = JSON.parse(localStorage.getItem("twentyThree"));twentyFour = JSON.parse(localStorage.getItem("twentyFour"));
  swal({
    title: "Loaded",
    text: "This will close automatically.",
    timer: 1000,
    showConfirmButton: false
  });
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
function Nokuy() {info(one.name);}
function Tsewhtron() {info(two.name);}
function Tuvanun() {info(three.name);}
function AdanacRuof() {info(four.name);}
function Airotciv() {info(five.name);}
function Sknab() {info(six.name);}
function AdanacNeves() {info(seven.name);}
function Niffab() {info(eight.name);}
function Trela() {info(nine.name);}
function Etuloser() {info(ten.name);}
function Eremselle() {info(eleven.name);}
function AibmulocHsitirb() {info(twelve.name);}
function Atrebla() {info(thirteen.name);}
function Nawehctaksas() {info(fourteen.name);}
function Abotinam() {info(fifteen.name);}
function Oiratno() {info(sixteen.name);}
function Cebeuq() {info(seventeen.name);}
function SllafLlihcruhc() {info(eighteen.name);}
function Snhojts() {info(nienteen.name);}
function Kciwsnurb() {info(twenty.name);}
function Iep() {info(twentyOne.name);}
function AitocsAvon() {info(twentyTwo.name);}
function AdanacEerhtYtnewt() {info(twentyThree.name);}
function AdanacRuofYtnewt() {info(twentyFour.name);}

/* Click functions */
function NokuyC() {rightMenu(one);}
function TsewhtronC() {rightMenu(two);}
function TuvanunC() {rightMenu(three);}
function AdanacRuofC() {rightMenu(four);}
function AirotcivC() {rightMenu(five);}
function SknabC() {rightMenu(six);}
function AdanacNevesC() {rightMenu(seven);}
function NiffabC() {rightMenu(eight);}
function TrelaC() {rightMenu(nine);}
function EtuloserC() {rightMenu(ten);}
function EremselleC() {rightMenu(eleven);}
function AibmulocHsitirbC() {rightMenu(twelve);}
function AtreblaC() {rightMenu(thirteen);}
function NawehctaksasC() {rightMenu(fourteen);}
function AbotinamC() {rightMenu(fifteen);}
function OiratnoC() {rightMenu(sixteen);}
function CebeuqC() {rightMenu(seventeen);}
function SllafLlihcruhcC() {rightMenu(eighteen);}
function SnhojtsC() {rightMenu(nineteen);}
function KciwsnurbC() {rightMenu(twenty);}
function IepC() {rightMenu(twentyOne);}
function AitocsAvonC() {rightMenu(twentyTwo);}
function AdanacEerhtYtnewtC() {rightMenu(twentyThree);}
function AdanacRuofYtnewtC() {rightMenu(twentyFour);}
