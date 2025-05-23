//basically an api call

/*
    Name: projectData
    Purpose:
        This is a function to help ease the workflow of retrieving and adding projects to load. All this does is load all projects. First all file names are
        loaded in from projectData by the contents of files.json. files.json has an array of all file names in projectData except files.json itself. After this, 
        the array is iterated through and all files are loaded in via a fetch.
*/
export async function projectData() {
    try {
        //loading in files.json to find all file names
        const filesListResponse = await fetch("/projectData/files.json");
        if (!filesListResponse.ok) {
            throw new Error("Error with finding list of project names")
        }
        let filesList = await filesListResponse.json();
        
        //getting the files var from that dictionary
        filesList = filesList["files"]

        //getting the length to iterate through files list
        let n = filesList.length;

        //initializing return array to push into
        let projectData = [];

        //for loop to iterate through filesList
        for (let i = 0; i < n; ++i) {
            if (filesList[i] !== "files.json") {
                //loading in each json file
                const response = await fetch("/projectData/" + filesList[i]);
                if (!response.ok) {
                    throw new Error("Failed")
                }
                let data = await response.json();
                projectData.push(data);
            }
        }

        return projectData;
    } catch (error) {
        console.error("Error: ", error)
    }
}