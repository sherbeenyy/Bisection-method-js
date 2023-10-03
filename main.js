const math = require("mathjs");

// intervals
let l = 0;
let r = 2;
let mid = (l + r) / 2;
console.log("mid = ", mid);

// pre-specified error
let epsilon_S = 0.001;

const k = math.log2((r - l) / epsilon_S);
const kCeil = Math.ceil(k);
//console.log("k = ", kCeil);

let f_l = math.pow(l, 2) - math.sin(l) - 0.5;
//console.log("f0 = ", f_l);

let f_r = math.pow(r, 2) - math.sin(r) - 0.5;
//console.log("f1 = ", f_r);

let f_mid = math.pow(mid, 2) - math.sin(math.unit(mid, "rad")) - 0.5;
//console.log("f mid = ", f_mid);

// repeat this process till k iterations
for (let i = 0; i < kCeil; i++) {
  mid = (l + r) / 2;
  f_mid = math.pow(mid, 2) - math.sin(math.unit(mid, "rad")) - 0.5;
  if (f_l * f_mid < 0) {
    // the root is between l and mid
    r = mid;
  } else if (f_mid * f_l > 0) {
    // the root is between mid and r
    l = mid;
  }
  console.log("mid = ", mid);
  console.log("f mid = ", f_mid);
}
