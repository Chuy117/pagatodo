import axios from 'axios';

const banks = axios.create({ baseURL: 'https://dev.obtenmas.com/catom/api/challenge/' });

export default banks;