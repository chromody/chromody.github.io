const fs = require('fs');

const projectFolder = "./../public/projectData";
const filesListPath = "./../public/projectData/files.json";

//deleting old files list
function removeOldFiles() {
    fs.stat(filesListPath, (err) => {
        if (err) {
            console.error(err);
        }

        fs.unlink(filesListPath, (err) => {
            if (err) return console.log(err);
            console.log('Old files list deleted')
        })
    });
}

fs.readdir(projectFolder, (err, files) => {
    if (err) {
        return console.error("Project Folder not found: ", error);
    }

    fs.unlink(projectFolder+"/files.json", (err) => {
        if (err) {
            console.log("files.json didnt exist");
        }
        else {
            console.log("files.json was deleted")
        }
    })

    let filesList = files.filter(file => file != "files.json");
    let filesListContent = '{ "files": [';
    for (let i = 0; i < filesList.length; ++i) {
        if (i > 0) {
            filesListContent += ','
        }
        filesListContent += '"' + filesList[i] +'"';
    }
    filesListContent += '] }'
    console.log(filesListContent);

    fs.appendFile(filesListPath, filesListContent, (err) => {
        if (err) {
            console.error("Error with appending to file, ", err);
        } else {
            console.log("Files list made")
        }
    })
})
