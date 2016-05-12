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
// I didn't write this function.
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
  return x.toString().split("").reverse().join("");
}
function FNRL(string) {
  var start = new Date().getTime();
  var split = string.split("").sort();
  var orig = string;
  var cL = "";
  for (var i = 0; i < split.length; i++) {
    if (split[i] == split[i+1]) {
      cL = split[i];
      for (x in orig) {
        orig = orig.replace(cL, "");
      }
    }
  }
  var end = new Date().getTime();
  var time = end - start;
  return orig[0] + ", executed in " + time + "ms";
}
function palindrome(dig) {
  var start = new Date().getTime();
  var rep = Math.pow(10, (dig - 1)).toString().replace(/0/g, "9").replace(/1/g, "9");
  function min() {
    if (dig == 2) {return 1.088;}
    else if (dig == 3) {return 1.095;}
    else if (dig == 4) {return 1.01;}
    else if (dig == 5) {return 1.0032;}
    else if (dig == 6) {return 1.001;}
    else if (dig == 7) {return 1.00024;}
    else {console.log("Anything higher than 7 WILL crash your browser.");return;}
  }
  var x = [];
  var y = [];
  var pals = [];
  var mults = [];
  for (var i = rep; i > rep / min(); i--) {
    for (var j = rep; j > rep / min(); j--) {
      x.push(i * j);
      y.push([i, j]);
    }
  }
  for (number in x) {
    if (x[number] == reverse(x[number])) {
      pals.push(x[number]);
      mults.push(y[x.indexOf(x[number])]);
    }
  }
  var end = new Date().getTime();
  var time = end - start;
  return Math.max.apply(Math, pals) + " : " + mults[pals.indexOf(Math.max.apply(Math, pals))] + " : executed in " + time + "ms";
}
function sumSquareDiff(num) {
  var x = 0;
  var y = 0;
  for (var i = 0; i <= num; i++) {
    x += Math.pow(i, 2);
    y += i;
  }
  return Math.pow(y, 2) - x;
}
// I didn't write this either, I just found it, but it might be useful later.
Object.defineProperty(Array.prototype, 'group', {
    value: function(chunkSize) {
        var array=this;
        return [].concat.apply([],
            array.map(function(elem,i) {
                return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
            })
        );
    }
});
function LargestProduct(series, adjacent) {
  var s = series.toString().split("");
  var x = 1;
  var max = 1;
  for (var i = 0; i < s.length; i++) {
    s.push(s[0]);
    s.splice(0,1);
    for (var j = 0; j < adjacent; j++) {
      x *= s[j];
    }
    if (max < x) {
      max = x;
    }
    x = 1;
  }
  return max;
}
function collatz(n) {
  var x = n;
  var col = [x];
  while (x != 1) {
    if (x % 2 == 0) {
      x = x/2;
    }
    else {
      x = (3 * x) + 1;
    }
    col.push(x);
  }
  return col;
}
function bigCollatz(max) {
  var big = [0];
  for (var i = 2; i < max; i++) {
    if (collatz(i).length > big.length) {
      big = collatz(i);
    }
  }
  return big[0];
}
// This obviously shouldn't be used for something you need strong security on, as random seeds can be found, and therefore your password can be too.
function passGen(length) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&()*+-./:;<=>@[]^_`~{}|?";
  var pass = [];
  for (var i = 0; i < length; i++) {
    pass.push(chars[Math.floor(Math.random() * chars.length)]);
  }
  return pass.join("");
}
function log10(val) {
  return Math.log(val) / Math.LN10;
}
function fibonacci(num) {
  var seq = [1,1];
  var x = 0;
  while (seq.length < num) {
    seq.push(seq[x] + seq[x+1]);
    x++;
  }
  return seq[seq.length - 1];
}
// Javascript is not ideal for math. This works in python, but God, am I too lazy to figure out how to get this to work in js since it's basically useless anyway.
function digFibonacci(dig) {
  var seq = [];
  for (var i = 0; log10(fibonacci(i - 1)) <= dig - 1; i++) {
    seq.push(fibonacci(i));
  }
  return seq[seq.length - 1];
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
