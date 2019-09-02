## Download NOAA Opus Data and process to either .json or .js (array)
Download the lated Opus data from [NOAA's opus map](https://www.ngs.noaa.gov/ngsjson/OpusSolutionsForMap.js) and subset to Florida only. This returns either a .js file or .json file depending on how the code is edited. See commented code in process.js to make these changes. 

## Install Instructions:
```
git clone https://github.com/clintonlunn/filter-noaa-data.git;
cd filter-noaa-data &&
npm install &&
node download.js; node process.js
```
