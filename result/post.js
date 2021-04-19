//Access node fetch and file system modules using its built in require function.
const fetch = require('node-fetch');
const fs = require('fs');



//Create variable for API link.
const url = 'http://jsonplaceholder.typicode.com/posts'
  

//Use async and await to fetch data from JSON placeholder.
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
