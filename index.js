const csvtojson = require("csvtojson");
const jsontocsv = require("json2csv").parse;
const fs = require("fs");
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

const floridaPIDs = async (data) => {
    const dataArr = data.features;
    const flNGS = await dataArr.filter(item => item.properties.state === "FLORIDA");
    const flPID = flNGS.map(item => item.properties.pid);
    console.log(flPID);



}

floridaPIDs(testData);