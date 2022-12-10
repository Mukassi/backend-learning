const fs = require('fs');
const superagent = require('superagent')

const readFilePromise = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('I could not find that file')
            resolve(data);
        })
    })
}

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if(err) reject('error')
            resolve('success')
        })
    })
}
// readFilePromise(`${__dirname}/dog.txt`)
//     .then(data => {
//     console.log(`Breed: ${data}`)
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random `)
//     })
//     .then( res => {
//     return writeFilePromise('dog-img.txt', res.body.message)   
//     })
//     .then(() => {
//         console.log('Random image saved')
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

const getDogPic = async () => {
    try{
        const data = await readFilePromise(`${__dirname}/dog.txt`);
        console.log(`Breed: ${data}`);

        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random `);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random `);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random `);
        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map(el => el.body.message)
        console.log(imgs)
       

        await writeFilePromise('dog-img.txt', imgs.join('\n'))   
        console.log('Random image saved');
    } 
    catch (err) {
        console.log(err.message)
    }
}

getDogPic();