/* Imports */
// Slice A: import getCountries from fetch-utils.js
import { getCountries } from './fetch-utils.js';
// Slice B: import getContinents from fetch-utils.js
import { getContinents } from './fetch-utils.js';

import { renderContinentOption, renderCountry } from './render-utils.js';

/* Get DOM Elements */
const countryList = document.getElementById('country-list');
const searchForm = document.getElementById('search-form');
const continentSelect = document.getElementById('continent-select');

/* State */
let countries = [];
let continents = [];

/* Events */
window.addEventListener('load', async () => {
    // call findCountries function with no arguments to fetch all countries (Slice A);
    findCountries();
    // Slice B: call asynchronous getContinents fetch function and set to response variable
    const response = await getContinents();
    // Slice B: set the continents state to the response.data
    continents = response.data;
    // Slice B: call displayContinentOptions function;
    displayContinentOptions();
});
