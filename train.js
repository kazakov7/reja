// MIT TASK-I
function majority(arr) {
  let obj = {};
  for (x of arr) {
    obj[x] ? obj[x]++ : (obj[x] = 1);
  }
  max = 0;
  result = 0;
  for (x in obj) {
    if (obj[x] > max) {
      max = obj[x];
      result = x;
    }
  }
  return `${result} soni ${max} marta qatnashdi`;
}
console.log(majority([1, 2, 3, 4, 5, 4, 3, 4]));
// MIT TASK-H
// function getPositive(word) {
//   arr = [];
//   for (x of word) {
//     if (x > 0) {
//       arr.push(x);
//     }
//   }
//   return arr.join("");
// }
// console.log(getPositive([-1, 2, -3, -4, 8, 9, -3]));

// MIT TASK-G
// function BigNum(list) {
//   max = list[0];
//   for (son of list) {
//     if (son > max) {
//       max = son;
//     }
//   }
//   console.log(list.indexOf(max));
// }
// BigNum([33, -4, 77, 56, 329, 1]);

// // MIT TASK_F
// function find(word) {
//   const soz = new Set();
//   for (let x of word) {
//     if (soz.has(x)) {
//       return true;
//     } else {
//       soz.add(x);
//     }
//   }
//   return "Bir hil harf yo'q";
// }
// console.log(find("Helo"));

// //MIT TASK-E
// function getReverse(word) {
//   return word.split("").reverse().join("");
// }

// console.log(getReverse("Salom"));

// //MIT TASK-D
// class Shop {
//   constructor(non, lagmon, kola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.kola = kola;
//   }

//   //qoldiqni tekshiruvchi metod
//   qoldiq() {
//     return `QOLGAN MAHSULOTLAR:
//     Non: ${this.non}
//     Lagmon: ${this.lagmon}
//     Kola: ${this.kola}`;
//   }
//   //sotuvchi metod
//   sotish(name, count) {
//     if (name == "non") {
//       if (this.non < count) {
//         return "Mahsulot yetarli emas";
//       }
//       this.non -= count;
//       return `Magazindan ${count} ta ${name} sotildi!`;
//     }
//     if (name == "lagmon") {
//       if (this.lagmon < count) {
//         return "Mahsulot yetarli emas";
//       }
//       this.lagmon -= count;
//       return `Magazindan ${count} ta ${name} sotildi!`;
//     }
//     if (name == "kola") {
//       if (this.kola < count) {
//         return "Mahsulot yetarli emas";
//       }
//       this.kola -= count;
//       return `Magazindan ${count} ta ${name} sotildi!`;
//     }
//   }
//   //qabul qiluvchi metod
//   qabul(name, count) {
//     if (name == "non") {
//       this.non += count;
//       return `Magazin ombiriga ${count} ta ${name} qo'shildi!`;
//     }
//     if (name == "lagmon") {
//       this.lagmon += count;
//       return `Magazin ombiriga ${count} ta ${name} qo'shildi!`;
//     }
//     if (name == "kola") {
//       this.kola += count;
//       return `Magazin ombiriga ${count} ta ${name} qo'shildi!`;
//     }
//   }
// }
// const magazin = new Shop(3, 4, 5);
// console.log(magazin.qoldiq());
// console.log(magazin.sotish("lagmon", 2));
// console.log(magazin.qabul("non", 2));
// console.log(magazin.qoldiq());
// console.log(magazin.sotish("lagmon", 12));

//MIT_TASK_C
// function count(word1, word2) {
//   const new_word = word1.split("");
//   if (word1.length == word2.length) {
//     return new_word.every((x) => word2.includes(x));
//   } else {
//     return "Harflar soni o'zaro teng emas";
//   }
// }
// console.log(count("mitgroup", "gmtiprou"));

// //MIT TASK-B
// function countNum(word) {
//   let count = 0;
//   for (let letter of word) {
//     if (letter >= 0) {
//       count++;
//     }
//   }
//   console.log(`Ushbu string ichidan ${count} ta raqam topildi`);
// }
// countNum("ad2a54y79wet0sfgb9");
// //MIT TASK "A"
// let hisob = 0;
// function countLetter(a, word) {
//   if (typeof a == "number" || typeof word == "number") {
//     return "Faqat string kirit";
//   }

//   for (const harf of word) {
//     if (harf === a) {
//       hisob++;
//     }
//   }

//   if (hisob <= 0) {
//     return "Bir hil harf yoqq";
//   }
//   return hisob;
// }
// console.log(countLetter(8, "alia"));

//MIT 20&21 DARSLAR
// console.log("JAck MA maslahatlari");
// const list = [
//   "Yahshi talaba boling", //0-20
//   "togri boshliq tanlang vaa koproq hato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qilign", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60-
// ];

// function maslahatBer(a, callback) {
//   if (typeof a != "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// maslahatBer(77, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log("JAavob:", data);
//   }
// });
// console.log("passed here 1");

// console.log("JAck MA maslahatlari");
// const list = [
//   "Yahshi talaba boling", //0-20
//   "togri boshliq tanlang vaa koproq hato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qilign", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60-
// ];

// async function maslahatBer(a) {
//   if (typeof a != "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }
// console.log("passed here 0");
//then/catch
// maslahatBer(1)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });
// console.log("passed here 1");

//call via async/awaait
// async function run() {
//   let javob = await maslahatBer(70);
//   console.log("javob", javob);
//   javob = await maslahatBer(33);
//   console.log("javob", javob);
//   javob = await maslahatBer(43);
//   console.log("javob", javob);
// }
// run();
