import { readCSVFile, writeJSONFile } from "./src/csv.mjs";
import { makeCocktailsFromRows } from "./src/cocktails.mjs";

const rows = await readCSVFile('./iba_cocktails.csv');
console.log(`Read ${rows.length} rows`);

console.log(rows[0]);
console.log(rows[1]);

const cocktails = makeCocktailsFromRows(rows);
console.log(`Made ${cocktails.length} cocktails`);

writeJSONFile('./iba_cocktails.json', cocktails);

console.log('*** done ***');