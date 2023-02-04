/* https://blog.logrocket.com/complete-guide-csv-files-node-js/ */
/* https://www.npmjs.com/package/csv-parser */

import fs from 'fs';
import csvParser from 'csv-parser';

export const readCSVFile = function (filename) {
    const rows = [];

    const promise = new Promise((resolve, reject) => {
        console.log(`Reading CSV file ${filename}`)
        fs.createReadStream(filename)
            .pipe(csvParser())
            .on("data", (data) => {
                rows.push(data);
            })
            .on("end", () => {
                resolve(rows);
            });
        });

    return promise;
};

export const writeJSONFile = function (filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data));
};