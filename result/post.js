//const users = require('./poster');
//console.log(users);

const fetch = require('node-fetch');
const fs = require('fs');





const url = 'http://jsonplaceholder.typicode.com/posts'
                
const getData = async url => {
    try {
        const response = await fetch (url);
        const data = await response.json();
        fs.writeFile('./posts.json', JSON.stringify(data, null, 4), (error) => {
            if (error) throw error;
            console.log('Data write Completed!');
        }) 
    } catch (error) {
            return (error)
    }
}

getData(url);