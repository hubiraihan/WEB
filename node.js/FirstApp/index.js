const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('リクエストを受け付けました！！');
//     // res.send('リクエストを受けたので、レスポンスを返します！！')
//     // res.send({ color: 'red'});
//     res.send('<h1>はじめてのWebページ</h1>');
// })

app.get('/cats', (req, res) => {
    res.send('にゃー')
})

app.post('/cats', (req, res) => {
    res.send('/catsにPOSTリクエストが来ました！！');
});

app.get('/dogs', (req, res) => {
    res.send('わんわん');
})

app.get('/', (req, res) => {
    res.send('ここはホームページへようこそ！！！！');
});
app.get('/r/:subreddit', (req, res) => {
    const { subreddit} = req.params;
    res.send(`<h1>${subreddit} subredditのページ</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>${subreddit} subreddit Post ID: ${postId}のページ</h1>`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('検索するものが指定されてません');
    } else {
        res.send(`<h1>「${q}」の検索結果</h1>`);
    }
})

app.get('*', (req, res) => {
    res.send('そんなパスは知らない！');
})

app.listen(8080, () => {
    console.log('リクエストをポート8080で待受け中...');
})