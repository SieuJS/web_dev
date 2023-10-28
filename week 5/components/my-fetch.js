const myFetch = async (page) => {
    let data;
    await fetch(URL+page)
    .then((response) =>{
        if(!response.ok)
            throw new Error(`Status Code Error : ${response.status}`);
        return response.json();
    })
    .then((response)=> {
        data = response.data;
    })
    return data
}