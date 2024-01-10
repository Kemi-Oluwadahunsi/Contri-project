import axios from 'axios'
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api`

const getAll = () => {
  return axios.get(baseUrl)
}


export default { 
  getAll: getAll, 
}


