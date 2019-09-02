// process the file that was downloaded in download.js

const {
    opus
} = require('./fl_ngs/data.js');
const fs = require('fs-extra');


const floridaPIDs = async (data) => { // create an array
    const dataArr = data.features;
    const flNGS = await dataArr.filter(item => item.properties.state === "FLORIDA");
    const flPID = flNGS.map(item => item.properties.pid);

    return flNGS;

}

const writeArray = (arr) => {
    fs.writeFile("./fl_ngs/fl_ngs.js", JSON.stringify(arr), function (err) {
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