module.exports = function mainHeader (){
    return `
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <form class="d-flex input-group w-auto">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <span class="input-group-text text-white border-0" id="search-addon">
                <i class="bi bi-search text-dark"></i>
                </span>
            </form>
        </div>
    </nav>
    `
}