const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    calculatebgColor()
});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
}

const calculatebgColor = () => {
    const bgColor = getComputedStyle(document.body).backgroundColor;
    const bgNum = bgColor.substring(bgColor.indexOf('(') + 1, bgColor.lastIndexOf(')')).split(',');
    const sum = parseInt(bgNum[0]) + parseInt(bgNum[1]) + parseInt(bgNum[2])
    if (sum <= 200) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
};
