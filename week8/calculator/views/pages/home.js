const template = require('../template');
const mainHeader = require('../components/shares/main-header')
const footer = require('../components/shares/footer')
const detailUser = require('../components/users/user-detail')
const UserList = require('../components/users/user-list');
const User = require('../../models/user-model');
let fakeUser = {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
}


let listUser = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]

module.exports = function Home () {

    let body = `
        <div id = "home-content" class = "bg-light row justify-content-center mt-3">
            <div id = "home-side" class = "col-3 bg-grey" >
                <div class = 'bg-primary text-center text-light'>
                    <h2>Details</h2>
                </div>
                <div class = 'card-content d-flex justify-content-center'>
                    ${detailUser(fakeUser)}
                </div>
            </div>
            <div class = "col-9" >
                <div class = 'bg-primary text-center text-light w-100'>
                    <h2>User List</h2>
                </div>
                <div class = 'card-content p-0'>
                    ${UserList(listUser,3)}
                </div>
            </div>
        </div>
    
    `
    let content = mainHeader() + body + footer() 
    return template(
        content
        );
}