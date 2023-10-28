
// Make request 

const URL = "https://reqres.in/api/users?page=";
const userContainer = document.querySelector("#user-container")
const MAX_USERS_PAGE = 2;
const MAX_USERS_API = 6;
const NUM_OF_PAGES = 6;

const getUser = async () =>  {
    let numUsers = (curPage-1) * MAX_USERS_PAGE;
    let apiPage = Math.floor(numUsers/MAX_USERS_API) + 1;
    let startUserApi = numUsers % MAX_USERS_API;
    let curUserPage = 0;
    let content = "";
    while(curUserPage < MAX_USERS_PAGE){
    const users = await myFetch(apiPage);
        for(let i = startUserApi ; i < MAX_USERS_API ; i ++){
            curUserPage ++;
            content += userRender(users[i]);
            if(curUserPage >= MAX_USERS_PAGE) 
                {return content;}
    
        }
        if(curUserPage <= MAX_USERS_PAGE){
            apiPage++;
            startUserApi = 0;
        }
    }
    return content;

}

// page handler 
const pagination = document.querySelector('#pagination-container')

const paginationRender = (innerHtml, clickHandler) => {
    const page = document.createElement('li');
    page.className = "page-item"
    page.innerHTML = `<a class="page-link" href="#">${innerHtml}</a>`;
    page.addEventListener('click',clickHandler);
    return page;
}

const onPageChange = async () => {
    console.log(curPage);
    userContainer.innerHTML = await getUser();
}
let curPage = 1;
onPageChange();

// Set up pagination 
pagination.appendChild(paginationRender('Previous', ()=> { 
    if(curPage !== 1) {
        curPage--; 
        onPageChange()
    }
}))

for(let i = 0 ; i < NUM_OF_PAGES; i++) {
    pagination.appendChild(paginationRender(`${i+1}`, ()=> {
        if(curPage !== i+1)
        {curPage = i+1;
        onPageChange();}
    }))
}

pagination.appendChild(paginationRender('Next' , ()=> {
    if(curPage !== NUM_OF_PAGES) {
        curPage++;
        onPageChange();
    }
}))



