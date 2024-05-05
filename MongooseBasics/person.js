const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('コネクションOK!');
    })
    .catch((err) => {
        console.log('コネクションエラー！！');
        console.log(err);
    });

const personShema = new mongoose.Schema({
    first: String,
    last: String
});

personShema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
})

personShema.pre('save', async function() {
    this.first ='ほげ';
    this.last ='もげ';
    console.log('今から保存するよ！');
});

personShema.post('save', async function() {
    console.log('保存したよ！！！');
});

const Person = mongoose.model('Person', personShema);