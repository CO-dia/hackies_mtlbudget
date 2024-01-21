import { load } from 'cheerio';
import request from 'request';
const url = 'https://inflationcalculator.ca/2023-cpi-and-inflation-rates-for-quebec/';
request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = load(html);
        // get the table with the inflation rates
        const tables = $('[style="margin-left:-40px; margin-bottom:0px; width:120%; max-width: 120%;"] tbody tr').text();
        // put the table data in an array
        const data_arr = tables.split("\n");
        // the 25th element is Quebec's monthly inflation rate
        console.log(data_arr[25]);
    }
});
