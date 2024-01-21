const express = require('express');
const request = require('request');
const cors = require('cors');
const { load } = require('cheerio');

const app = express();
app.use(cors());

const url = 'https://inflationcalculator.ca/2023-cpi-and-inflation-rates-for-quebec/';

app.get('/inflation', (req, res) => {
    console.log('Fetching inflation rate...');
    request(url, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = load(html);
            const tables = $('[style="margin-left:-40px; margin-bottom:0px; width:120%; max-width: 120%;"] tbody tr').text();
            const data_arr = tables.split("\n");
            const inflationRate = data_arr[25];
            console.log(inflationRate);
            res.send(inflationRate);
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
