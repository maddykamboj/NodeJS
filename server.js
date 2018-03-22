const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
    if(process.env.TRACKER_API == null) {
        res.status(500).send(`TRACKER_API not set`);
        return;
    }
    // let releaseNum = req.params.releaseNumber;
    // let projectID = req.query.projectID;

    let releaseNum = 18.1;
    let projectID = 1995135;

    const URL = `https://www.pivotaltracker.com/services/v5/projects/${projectID}/search?query=label:"${releaseNum}"`;
    console.log("URL : " + URL);
   
    axios.get(URL, {
        headers: { 'X-TrackerToken': process.env.TRACKER_API }

    }) 
    .then(function (response){
        let stories = response.data.stories.stories;
        let formattedResponse = '';
        for (var i = 0; i < stories.length; i++) {
            let storyDetails = stories[i].id + '\t' + stories[i].description + '\n';
            console.log(`storyDetails: ${storyDetails}`);
            formattedResponse += storyDetails;
        }
        console.log(formattedResponse);
        res.send(formattedResponse);
    })
    .catch(function (error) {
        console.log(error);
      });
});



const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'))









//get(`https://www.pivotaltracker.com/services/v5/projects`) ({
// let projectIDarray = [];
//     for (var i = 0; i < res.data.length; i++) {
//         let ProjectID = res.data[i].id;
//         console.log(`ProjectID: ${ProjectID}`);
//         projectIdArray += ProjectID;

//         const URL = `https://www.pivotaltracker.com/services/v5/projects/${projectIdArray}/search?query=label:"${releaseNum}"`;
//         console.log("URL : " + URL);
   
//         axios.get(URL, {
//         headers: { 'X-TrackerToken': process.env.TRACKER_API }

//     }) 
//     }
    
// })