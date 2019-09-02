// process the file that was downloaded in download.js
const {
    opus
} = require('./fl_ngs/data.js');
const fs = require('fs-extra');


const floridaPIDs = async (data) => { // create an array or json
    const dataArr = data.features;
    const flNGS = await dataArr.filter(item => item.properties.state === "FLORIDA");
    const flPID = flNGS.map(item => item.properties.pid);

    return flNGS; // return this if you want json to be returned
    // return flPID; // return this if you want array to be returned

}

const writeArray = (arr) => {
    // fs.writeFile("./fl_ngs/fl_ngs.js", JSON.stringify(arr), function (err) { // uncomment this to return an array
    fs.writeFile("./fl_ngs/fl_ngs.json", JSON.stringify(arr), function (err) { // return a json file
        console.log({
            err
        });
    });
}
const setup = async () => {
    const flPIDArr = await floridaPIDs(opus);
    const writeFile = await writeArray(flPIDArr);
}

setup();