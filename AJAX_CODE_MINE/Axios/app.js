// axios.get('https://swapi.dev/api/people/1/')
//      .then(res => {
//         console.log('RESPONSE!', res)
//     })
//     .catch(e => {
//         console.log('ERROR!!!', e)
//     });

// const getStarWarsPerson = async(id) => {
//     try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     } catch (e) {
//         console.log('ERROE!', e)
//     }
// }

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return 'No Jokes! Sorry!!!'
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);