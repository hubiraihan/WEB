// const password = prompt("パスワードを入力してください");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("素晴らしいパスワードです！")
// } else {
//     console.log("パスワードのフォーマットが無効です。");
// }


// const age = 50;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("無料です");
// } else if (age >= 5 && age < 10) {
//     console.log("子供料金です");
// } else if (age >= 10 && age < 65) {
//     console.log("大人料金です")
// } else {
//     console.log("無効な年齢です")
// }

// let username = prompt("ユーザー名を入力してください");

// if (!username) {
//     username = prompt("問題が起きました。ユーザー名を入力してください。")
// }

const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("有料です");
}