const renderUser = (user)=> {
    return `
        <div class = "row bg-secondary row text-wrap " style = " border : 1rem solid #fff;">
            <p class = "text-light col-2 text-wrap" >${user.id}</p>
            <p class = "text-light col-2 text-wrap">${user.first_name}</p>
            <p class = "text-light col-3 text-wrap">${user.email}</p>
            <img src=${user.avatar} class = "text-light col" style = "max-height: 10rem;object-fit : cover; ">
        </div>
    `
}

const pagination = (numPage, curPage) => {
    curPage = curPage || 1;
    let pageItem = ``;
    for(let i = 1 ; i <= numPage ; i ++ ){
        pageItem += `<li class="page-item"><input value =${i.toString()} name = page type = "submit" class="page-link ${curPage === i ? "bg-info" : ""}"/></li>\n`
    }
    return `
    <form action = "/users/page/ method = "GET" >
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
     ${pageItem}
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </form>
    `
}


module.exports = function UserList (list, numPage, curPage) {
    const header = `
    <div id = 'user-list-header' class = "bg-dark row text-center pt-2 " 
    style = "border-radius : 10px 10px">
        <p class = "text-light col-2 p-0" >STT</p>
        <p class = "text-light col-2">NAME</p>
        <p class = "text-light col-2">Email</p>
        <p class = "text-light col-6">Image</p>
    </div>`
    let li =``;
    list.forEach( u => {
        li += renderUser(u);
    })

    return header + li + pagination(numPage, curPage);
}