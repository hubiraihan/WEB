const franc = require('franc');
const langs = require('langs');
// const input = process.argv[2];

// const langCode = franc(input);

// const language = lang.where('3', langCode);


const word = franc(`${process.argv[2]}`);
if (word === 'und') {
    console.log('解析できませんでした。違う文章でもう一度試してください。')
} else {
    console.log(`「${langs.where('3', `${word}`).name}」でしょうか？`)
}
