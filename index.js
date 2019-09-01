const fs = require("fs");
const download = require('download');
const {
    testData
} = require("./testData.js");


// make insurance company directory
const dir = './fl_ngs'
try {
    if (!fs.existsSync(dir)) { // if dir doesn't exist, make it
        fs.mkdirSync(dir)
    }
} catch (err) {
    console.error(err)
}

const downloadData = async () => {
    const path = 'fl_ngs/data.js'
    return download('https://www.ngs.noaa.gov/ngsjson/OpusSolutionsForMap.js').then(data => {
        console.log(data);
        fs.writeFileSync('fl_ngs/data.js', data);
    });

}

const appendExport = async (dataPath) => {
    fs.appendFile('fl_ngs/data.js', '\nmodule.exports = { opus };', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

// const readData = async () => {
//     fs.readFile('fl_ngs/data.js', (err, data) => {
//         console.log(data);

//         if (err) throw err;
//         console.log(data);
//     });
// }

const floridaPIDs = async (data) => {
    const dataArr = data.features;
    const flNGS = await dataArr.filter(item => item.properties.state === "FLORIDA");
    const flPID = flNGS.map(item => item.properties.pid);
    console.log(flPID);



}

const setup = async () => {
    const dataFile = await downloadData();
    const addExport = await appendExport(dataFile);
    // const floridaPID = await floridaPIDs(testData);
    // const data = await readData();
}

setup();