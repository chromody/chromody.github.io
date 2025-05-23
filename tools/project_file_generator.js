const fs = require("fs");
const rl = require('readline-sync');
const projectDataPath = "./../public/projectData";

/*
{
    "imageSrc": "projectImages/Empower-UC.png", 
    "highlightImage": "projectImages/link-svgrepo-com.svg", 
    "link": "https://app.empower-uc.com", 
    "title": "Empower Project", 
    "description": "Served as a Co-lead full stack developer while following AGILE principles on the Empower Project, an initiative in the upper cumberland area to help uplift families and people out of poverty. Oversaw the development of many Next.js user-focused pages and implementations such as the pathway, a way for a participant in the Empower project to have directed tasks by a guide to help them progress. In addition to this, designed and implemented many API endpoints and MongoDB logic, along with aiding in the GCP hosting. Led a team of 2 developers and helped onboard and direct them on tasks that should be done."
}
*/

let projectInfo = [
    ["imageSrc", ""], 
    ["highlightImage", ""], 
    ["link", ""],
    ["title", ""], 
    ["description", ""]
]

for (let i = 0; i < projectInfo.length; ++i) {
    projectInfo[i][1] = rl.question(projectInfo[i][0] + ": ");
}

let projectFile = "{ "
let projectDetail = "";
let projectFileName = rl.question("File Name: ");

for (let i = 0; i < projectInfo.length; ++i) {
    if (i > 0) {
        projectFile += ", "
    }

    projectDetail = '"' + projectInfo[i][0] + '"';
    projectDetail += ': "' + projectInfo[i][1] + '"';
    projectFile += projectDetail;
    console.log(projectDetail);
}

projectFile += " }"

fs.appendFile(projectDataPath+"/"+projectFileName, projectFile, err => {
    if (err) {
        return console.error("Error with making file: ", err);
    }
    else {
        console.log("Made file: ", projectFileName);
    }
})

console.log(projectFile);
