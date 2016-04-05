/* This file is for math functions */

function influence(name) {
  return (name).followers/(name).population;
}
function competition(name) {
  return (name).blasphemists/(name).population;
}
function percent(name) {
  return "Influence: " + round(influence(name)*100, 2) + "%" + "</br>" + "Competition: " + round(competition(name)*100, 2) + "%";
}
function primeGen(x) {
  var primes = [2,3];
  var num = 5;
  while (primes.length < x) {
    var prime = true;
    for (var i = 0; i < primes.length; i++) {
      if (num % primes[i] == 0) {
        prime = false;
      }
    }
    if (prime == true) {
      primes.push(num);
    }
    num++;
  }
  return primes[x-1];
}
function factor(num) {
  var root = Math.sqrt(num),
  result = arguments[1] || [],
  x = 2;

  if(num % x) {
   x = 3;
   while((num % x) && ((x = x + 2) < root)){}
  }
  x = (x <= root) ? x : num;
  result.push(x);

  return (x === num) ? result : factor(num/x, result) ;
}
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function reverse(x) {
  var rev = [];
  var last = x.toString().length - 1;
  for (var i = 0; i < x.toString().length; i++)
  {
    rev.push(x.toString()[last]);
    last--;
  }
  return rev.join("");
}
function palindrome(num) {
  var x = [];
  var y = [];
  var pals = [];
  var prods = [];
  for (var i = Math.pow(10, (num - 1)); i.toString().length < num + 1; i++) {
    for (var j = Math.pow(10, (num - 1)); j.toString().length < num + 1; j++) {
      x.push(i * j);
      y.push([i, j]);
    }
  }
  for (number in x) {
    if (x[number] == reverse(x[number])) {
      pals.push(x[number]);
      prods.push(y[x.indexOf(x[number])]);
    }
  }
  return Math.max.apply(Math, pals) + " : " + prods[pals.indexOf(Math.max.apply(Math, pals))];
}
function userMPT() {
  for (var i=1; i<=24; i++) {
    money += (20*influence(num[i])*100);
  }
  money+=20;
}
function botMPT() {
  for (var i=1; i<=24; i++) {
    botMoney += (20*competition(num[i])*100);
  }
  botMoney+=20;
}
function populationIncrease() {
  for (var i=1; i<=24; i++) {
    (num[i]).population +=10;
    (num[i]).followers += round((influence(num[i])*10), 0);
    (num[i]).blasphemists += round((competition(num[i])*10), 0);
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
  botBuyMenu(num[x]);
}
