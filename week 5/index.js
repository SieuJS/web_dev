// Make request 

const URL = "https://reqres.in/api/users?page=";
const userContainer = document.querySelector("#user-container")

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

const getUser = async (page) =>  {
    const users = await myFetch(page);
    userContainer.innerHTML+=userRender(users[0])
}

getUser();

const userRender = (user) =>{
    return `
        <div class = "row bg-${user.id % 2 === 1 ? "secondary" : "light"} m-0">
            <p class = "col-1">${user.id}</p>
            <p class = "col-2">${user.first_name}</p>
            <p class = "col-2">${user.last_name}</p>
            <p class = "col-4">${user.email}</p>
            <img class = "col-3" src = ${user.avatar}/>
        </div>
    `
} 