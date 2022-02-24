import axios from "axios";

//const KEY = "";
const KEY = process.env.REACT_APP_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    //part: 'snippet, statistics',
    part: 'snippet',
    key: KEY
  }
});






// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });