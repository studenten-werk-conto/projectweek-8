/**
 * 
 * @param {string} path where request should be made example /api/get
 * @param {string} params fetch params such as header and method
 */

 async function Fetch(path,params){
    // check if produciton and if production use production base url else use localhost
    const uri = "http://localhost:3000" + path
    console.log(path)
    const res = await fetch(uri,params) 
    const data = await res.json()
    return data;
}

export default Fetch;