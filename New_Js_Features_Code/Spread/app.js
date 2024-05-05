const nums = [13, 5, 3, 4, 2, 64, 32, 646, 362, 53423, 42];
Math.max(nums)//NaN
Math.max(...nums)//53423


const cats = ["Tama", "Tora", "Momo"];
const dogs = ["Hachi", "Pochi"];

const allPets = [...cats, ...dogs];

const feline = {legs: 4, family: "ネコ科"};
const canine = {family: "イヌ科", bark: true};


const formData = {
    email: "hoge@example.com",
    password: "secret",
    username: "hoge"
}

// formData.id = 123;
// formData.isVerified = false;

// const user = formData