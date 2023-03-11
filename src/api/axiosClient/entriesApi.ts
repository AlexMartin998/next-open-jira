import axios from 'axios';

export const entriesAPi = axios.create({ baseURL: 'api/' }); // <- same domain  < next
