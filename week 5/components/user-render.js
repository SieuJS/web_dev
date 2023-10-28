
const userRender = (user) =>{
    return `
        <div class = "row bg-${user.id % 2 === 1 ? "secondary" : "light"} m-0">
            <p class = "col-1">${user.id}</p>
            <p class = "col-2">${user.first_name}</p>
            <p class = "col-2">${user.last_name}</p>
            <p class = "col-4">${user.email}</p>
            <img class = "col-3 flex-grow-1 user-img" key = ${user.avatar}  src = "${user.avatar}"/>
        </div>
    `
} 
