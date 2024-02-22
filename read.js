fetch('data.json')
    .then(response => response.json())
    .then(data => {
        //Add data to json
        // data[data.length] = {
        //     "name" : "Dean",
        //     "isGraduate" : true
        // }
        // data.splice(2)
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })

// const jsonData = require('./data.json');
// console.log(jsonData);

// import jsonData from './data.json'
// console.log(jsonData)