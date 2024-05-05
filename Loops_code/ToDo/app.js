const list = [];

const word = ["new", "list", "delete", "quit"];

let command = " ";
while (word.indexOf(command) === -1 || 0 || 1 || 2 || 3) {
    command = prompt("コマンドを入力してください(new, list, delete, quit)");
    if (command === "quit") break;
    if (command === "new") {
        list.push(prompt("新しいリストを入力してください。"));
        console.log(`「${list[list.length - 1]}」を追加しました。`)
    }
    if (command === "list") {
        console.log("***************");
        for (i = 0; i < list.length; i++) {
            console.log(`${list.indexOf(list[i])}: ${list[i]}`)
        }
        console.log("***************");
    }
    if (command === "delete") {
        let deleteNum = parseInt(prompt("削除するインデックスを入力してください"));
        while (!deleteNum || deleteNum < 0 || deleteNum > list.length) {
            deleteNum = parseInt(prompt("エラーが起きました。有効な数字を入力してください:"));
        }
        console.log(`「${list[deleteNum]}」を削除しました`)
        list.splice(deleteNum, 1)
    } 
}
console.log("アプリを終了しました");
