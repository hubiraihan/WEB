// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}
// Promise版
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

// fakeRequestCallback('book.com/page1', function(response) {
//     console.log('成功');
//     console.log(response);
//     fakeRequestCallback('book.com/page2', function(response) {
//         console.log('成功2');
//         console.log(response);
//         fakeRequestCallback('book.com/page3', function(response) {
//             console.log('成功3');
//             console.log(response);
//         }, function(error) {
//             console.log('エラー！！！3', error);
//         })
//     }, function(error) {
//         console.log('エラー！！！2', error);
//     })
// }, function(error) {
//     console.log('エラー！！！', error);
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('成功！！！');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('成功2！！！');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('成功3！！！');
//                     })
//                     .catch(() => {
//                         console.log('失敗3！！！');
//                     })
//             })
//             .catch(() => {
//                 console.log('失敗2！！！');
//             })
//     })
//     .catch(() => {
//         console.log('失敗！！！');
//     });

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('成功１！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    }
    ).then((data) => {
        console.log('成功2！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('成功3！！');
        console.log(data);
    })
    .catch((err) => {
        console.log('失敗！！！');
        console.log(err)
    })

// fakeRequestCallback('books.com/page1', function (response) {
//     console.log('成功！！');
//     console.log(response);
//     fakeRequestCallback('books.com/page2', function (response) {
//         console.log('成功2！！');
//         console.log(response);
//         fakeRequestCallback('books.com/page3', function (response) {
//             console.log('成功3！！');
//             console.log(response);
//         }, function (err) {
//             console.log('エラー3！！！', err);
//         })
//     }, function (err) {
//         console.log('エラー2！！！', err);
//     })
// }, function (err) {
//     console.log('エラー！！！', err);
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('成功1！！！');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('成功2！！！');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('成功3！！！');
//                     })
//                     .catch(() => {
//                         console.log('失敗3！！！！');
//                     });
//             })
//             .catch(() => {
//                 console.log('失敗2！！！！');
//             });
//     })
//     .catch(() => {
//         console.log('失敗1！！！！');
//     });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('成功1！！！');
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('成功2！！！');
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('成功3！！！');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('失敗！！！！');
//         console.log(err);
//     });

