module.exports = function User (u) {
    return `
    <div class="card" style="width: 18rem;">
    <img src=${u.avatar} class="card-img-top w-70 h-70" alt="..." style = "object-fit : cover">
    <div class="card-body">
      <h5 class="card-title">${u.first_name + " " + u.last_name}</h5>
      <p class="card-text">${u.email}</p>
    </div>
  </div>
    `
}