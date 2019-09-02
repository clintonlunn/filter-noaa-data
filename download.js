const fs = require("fs-extra");
const download = require('download');

const directoryHandling = async () => {
    const dir = './fl_ngs';
    try {
        if (!fs.existsSync(dir)) { // if dir doesn't exist, make it
            fs.mkdirSync(dir)
        } else { // it exists and we want to empty it
            fs.emptyDir(dir);
            console.log('Emptied existing data from directory');
        }
    } catch (err) {
        console.error(err);
    }
}

const downloadData = async () => {
    const path = 'fl_ngs/data.js'
    try {
        return download('https://www.ngs.noaa.gov/ngsjson/OpusSolutionsForMap.js').then(data => {
            console.log('Data downloaded!');
            fs.writeFileSync('fl_ngs/data.js', data);
        });
    } catch (err) {
        console.log(err);
    }
}

const appendExport = async (dataPath) => { // make it so that we can export the downloaded data
    await fs.appendFile('fl_ngs/data.js', '\nmodule.exports = { opus };',
        function (err) {
            if (err) throw err;
            console.log('Module exported!');
        });
}

const setup = async () => {
    const setupDir = await directoryHandling();
    const dataFile = await downloadData();
    const addExport = await appendExport(dataFile);
}

setup();