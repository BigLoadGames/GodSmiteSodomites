/* Things to not forgot, that I will forget if I don't write down.

localStorage.setItem(")
localStorage.getItem()
JSON.stringify()
JSON.parse()
*/

/* Global Vars */
var one = {name:"Nokuy", population:5000, followers:0, blasphemists:0, missionaries:0};
var two = {name:"Tsewhtron", population:5000, followers:0, blasphemists:0, missionaries:0};
var three = {name:"Tuvanun", population:5000, followers:0, blasphemists:0, missionaries:0};
var four = {name:"Adanac Ruof", population:5000, followers:0, blasphemists:0, missionaries:0};
var five = {name:"Airotciv", population:5000, followers:0, blasphemists:0, missionaries:0};
var six = {name:"Sknab", population:5000, followers:0, blasphemists:0, missionaries:0};
var seven = {name:"Adanac Neves", population:5000, followers:0, blasphemists:0, missionaries:0};
var eight = {name:"Niffab", population:5000, followers:0, blasphemists:0, missionaries:0};
var nine = {name:"Trela", population:5000, followers:0, blasphemists:0, missionaries:0};
var ten = {name:"Etuloser", population:5000, followers:0, blasphemists:0, missionaries:0};
var eleven = {name:"Eremselle", population:5000, followers:0, blasphemists:0, missionaries:0};
var twelve = {name:"Aibmuloc Hsitirb", population:5000, followers:0, blasphemists:0, missionaries:0};
var thirteen = {name:"Atrebla", population:5000, followers:0, blasphemists:0, missionaries:0};
var fourteen = {name:"Nawehctaksas", population:5000, followers:0, blasphemists:0, missionaries:0};
var fifteen = {name:"Abotinam", population:5000, followers:0, blasphemists:0, missionaries:0};
var sixteen = {name:"Oiratno", population:5000, followers:0, blasphemists:0, missionaries:0};
var seventeen = {name:"Cebeuq", population:5000, followers:0, blasphemists:0, missionaries:0};
var eighteen = {name:"Sllaf Llihcruhc", population:5000, followers:0, blasphemists:0, missionaries:0};
var nineteen = {name:"Snhojts", population:5000, followers:0, blasphemists:0, missionaries:0};
var twenty = {name:"Kciwsnurb", population:5000, followers:0, blasphemists:0, missionaries:0};
var twentyOne = {name:"I.E.P.", population:5000, followers:0, blasphemists:0, missionaries:0};
var twentyTwo = {name:"Aitocs Avon", population:5000, followers:0, blasphemists:0, missionaries:0};
var twentyThree = {name:"Adanac Eerht Ytnewt", population:5000, followers:0, blasphemists:0, missionaries:0};
var twentyFour = {name:"Adanac Ruof Ytnewt", population:5000, followers:0, blasphemists:0, missionaries:0};
var money = 500;
var botMoney = 500;
var zero = 0;
var number = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
twentyOne, twentyTwo, twentyThree, twentyFour];

/* Load events */
leftMenu();

/* Functions */
function influence(name) {
  return (name).followers/(name).population;
}
function competition(name) {
  return (name).blasphemists/(name).population;
}
function percent(name) {
  return "Influence: " + round(influence(name)*100, 2) + "%" + "</br>" + "Competition: " + round(competition(name)*100, 2) + "%";
}
function rename(name) {
  return (name).name = prompt("Rename city?");
}
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function userMPT() {
  for (var i=1; i<=24; i++) {
    money += (20*influence(number[i])*100);
  }
  money+=20;
}
function botMPT() {
  for (var i=1; i<=24; i++) {
    botMoney += (20*competition(number[i])*100);
  }
  botMoney+=20;
}
function populationIncrease() {
  for (var i=1; i<=24; i++) {
    (number[i]).population +=10;
    (number[i]).followers += round((influence(number[i])*10), 0);
    (number[i]).blasphemists += round((competition(number[i])*10), 0);
  }
}
function buyMenu(name, item) {
  if (competition(name)+influence(name)<1) {
    if (money>=50 && item == 1) {
      (name).followers += 1;
      money -= 50;
    }
    else if (money>=100 && item == 2) {
      (name).followers += 3;
      money -= 100;
    }
    else if (money>=200 && item == 3) {
      (name).followers +=5;
      money -= 200;
    }
    else if (money>=450 && item == 4) {
      (name).followers += 10;
      money -= 450;
    }
    else if (money>=950 && item == 5) {
      (name).followers += 20;
      money -= 950;
    }
    else if (money>=2450 && item == 6) {
      (name).followers += 50;
      money -= 2450;
    }
    else if (money>=12450 && item == 7) {
      (name).followers += 250;
      money -= 12450;
    }
    else if (money>=49950 && item == 8) {
      (name).followers += 1000;
      money -= 49950;
    }
    else if (money>=50000 && item == 9) {
      (name).followers -= (0.1*(name).followers);
      (name).followers = round((name).followers, 0);
      (name).missionaries += (0.1*(name).followers);
      (name).missionaries = round((name).missionaries, 0);
      money -= 50000;
    }
    else if (item == 10) {
      
    }
  }
  else {
    return;
  }
}
function botBuyMenu(name) {
  if (competition(name)+influence(name)<1) {
    if (botMoney>=49950) {
      (name).blasphemists += 1000;
      botMoney -= 49950;
    }
    else if (botMoney>=12450) {
      (name).blasphemists += 250;
      botMoney -= 12450;
    }
    else if (botMoney>=2450) {
      (name).blasphemists += 50;
      botMoney -= 2450;
    }
    else if (botMoney>=950) {
      (name).blasphemists += 20;
      botMoney -= 950;
    }
    else if (botMoney>=450) {
      (name).blasphemists += 10;
      botMoney -= 450;
    }
    else if (botMoney>=200) {
      (name).blasphemists += 5;
      botMoney -= 200;
    }
    else if (botMoney>=100) {
      (name).blasphemists += 3;
      botMoney -= 100;
    }
    else if (botMoney>=50) {
      (name).blasphemists += 1;
      botMoney -= 50;
    }
    else {
      return;
    }
  }
  else {
    return;
  }
}
function bot() {
  botMPT();
  var x = Math.floor((Math.random() * 24) + 1);
  botBuyMenu(number[x]);
}
function rightMenu(name) {
  rightSide((name).name + "</br></br>" + percent(name) + "</br>Missionaries: " + (name).missionaries
  + "</br>God particles: " + round(money, 0)
  + "<p class=\"button\" id=\"buy1\">Give an infant an odd dream (50)</p>"
  + "<p class=\"button\" id=\"buy2\">Possess a crow (100)</p>"
  + "<p class=\"button\" id=\"buy3\">Whisper to a toddler (200)</p>"
  + "<p class=\"button\" id=\"buy4\">Levitate a dog (450)</p>"
  + "<p class=\"button\" id=\"buy5\">Convince a schizoid of your existence (950)</p>"
  + "<p class=\"button\" id=\"buy6\">Write a cult page and spread on social media (2450)</p>"
  + "<p class=\"button\" id=\"buy7\">Virgin birth (12450)</p>"
  + "<p class=\"button\" id=\"buy8\">Create a messiah (49950)</p>"
  + "<p class=\"button\" id=\"buy9\">Convert 10% of your followers to missionaries (50000)</p>"
  + "<p class=\"button\" id=\"rename\">Rename City</p>");
  document.getElementById("rename").onclick = function() {rename(name);rightMenu(name);};
  document.getElementById("buy1").onclick = function() {buyMenu(name, 1);rightMenu(name);};
  document.getElementById("buy2").onclick = function() {buyMenu(name, 2);rightMenu(name);};
  document.getElementById("buy3").onclick = function() {buyMenu(name, 3);rightMenu(name);};
  document.getElementById("buy4").onclick = function() {buyMenu(name, 4);rightMenu(name);};
  document.getElementById("buy5").onclick = function() {buyMenu(name, 5);rightMenu(name);};
  document.getElementById("buy6").onclick = function() {buyMenu(name, 6);rightMenu(name);};
  document.getElementById("buy7").onclick = function() {buyMenu(name, 7);rightMenu(name);};
  document.getElementById("buy8").onclick = function() {buyMenu(name, 8);rightMenu(name);};
  document.getElementById("buy9").onclick = function() {buyMenu(name, 9);rightMenu(name);};
  if ((name).followers>(name).population) {
    (name).followers = (name).population;
  }
  else if ((name).blasphmists>(name).population) {
    (name).blasphmists = (name).population;
  }
  else {
    return;
  }
}
function leftMenu() {
  leftSide("<p class=\"button\" onclick=\"options()\">Options</p><p class=\"button\" onclick=\"nextTurn()\">Next Turn</p>");
}
function options() {
  leftSide("<p class=\"button\" onclick=\"save()\">Save</p><p class=\"button\" onclick=\"load()\">Load</p><p class=\"button\" onclick=\"leftMenu()\">Return</p>");
}
function nextTurn() {
  userMPT();
  bot();
  populationIncrease();
}
function rightSide(name) {
  document.getElementById("rightSide").innerHTML = name;
}
function info(name) {
  document.getElementById("info").innerHTML = (name).name + "</br><p class=\"stats\" style=\"color:lightgreen;\">" + (name).followers + "</p>" + "<p class=\"stats\">/" + (name).population + "/</p>" + "<p class=\"stats\" style=\"color:salmon;\">" + (name).blasphemists;
}
function leftSide(name) {
  document.getElementById("leftSide").innerHTML = name;
}
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
  localStorage.setItem("money", JSON.stringify(money));localStorage.setItem("botMoney", JSON.stringify(botMoney));
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
  money = JSON.parse(localStorage.getItem("money"));botMoney = JSON.parse(localStorage.getItem("botMoney"));
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
function Nokuy() {info(one);}
function Tsewhtron() {info(two);}
function Tuvanun() {info(three);}
function AdanacRuof() {info(four);}
function Airotciv() {info(five);}
function Sknab() {info(six);}
function AdanacNeves() {info(seven);}
function Niffab() {info(eight);}
function Trela() {info(nine);}
function Etuloser() {info(ten);}
function Eremselle() {info(eleven);}
function AibmulocHsitirb() {info(twelve);}
function Atrebla() {info(thirteen);}
function Nawehctaksas() {info(fourteen);}
function Abotinam() {info(fifteen);}
function Oiratno() {info(sixteen);}
function Cebeuq() {info(seventeen);}
function SllafLlihcruhc() {info(eighteen);}
function Snhojts() {info(nineteen);}
function Kciwsnurb() {info(twenty);}
function Iep() {info(twentyOne);}
function AitocsAvon() {info(twentyTwo);}
function AdanacEerhtYtnewt() {info(twentyThree);}
function AdanacRuofYtnewt() {info(twentyFour);}

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
