// try {
//     hello.toUpperCase()
// } catch {
//     console.log("エラーが起きました！！");
// }
// console.log("実行！");

function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log("shoutには文字列を入れて下さい")
    }

}