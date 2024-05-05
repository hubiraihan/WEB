const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'yamada',
        comment: 'おもしろすぎ！！'
    },
    {
        id: uuid(),
        username: 'suzuki',
        comment: '趣味はバードウォッチング'
    },
    {
        id: uuid(),
        username: 'tanaka',
        comment: 'yamadaさん、何が面白いんですか'
    },
    {
        id: uuid(),
        username: 'wanwan',
        comment: 'わんわんわん'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({username, comment, id: uuid()});
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`${qty} ${meat} どうぞ。`);
});

app.listen(3000, () => {
    console.log('ポート3000で待ち受け中');
})











// GET /comments - コメント一覧を取得
// POST /comments - 新しいコメントを作成
// GET /comments/:id - 特定のコメントを一つ取得
// PATCH /comennts/:id - 特定のコメントを更新
// DELETE /comennts/:id - 特定のコメントを削除