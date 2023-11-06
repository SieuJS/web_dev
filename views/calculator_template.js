const layout = require('./layout')

module.exports = ({data}) => {
    console.log(!data || !data.X, data)
    const content = `
        <div class="card my-form">
            <form method = "POST" action = '/'>
                <div class="input-group mb-3">
                    <span class="input-group-text">X</span>
                    <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" id = "X" name = "X" value = "${!data || !data.X?  "" : data.X}">
                    <span class="input-group-text">.00</span>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Y</span>
                    <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" id ="Y" name = "Y" value = "${!data || !data.Y?  "" : data.Y}">
                    <span class="input-group-text">.00</span>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Phép tính</label>
                    <select class="form-select" id="operator" name = "operator"
                    
                    />
                        <option selected>${!data || !data.operator?  "Choose..." : data.operator}</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="x">x</option>
                        <option value=":">:</option>
                    </select>
                </div>
                <div class = "input-group" >
                    <input type = "submit" class = "btn btn-primary" />
                    <div class= "d-flex flex-column">
                        <div class = "card flex-row">
                            <span class="input-group-text">Kết quả HTML</span>
                            <input type="number" class="form-control" id ="resultHtml" name = "resultHtml" value = "${!data || !data.resultHtml?  "" : data.resultHtml}"aria-label="readonly input example" readonly/>
                        </div>
                        <div class = "card flex-row">
                        <span class="input-group-text">Kết quả Ajax</span>
                        <input type="number" class="form-control" id ="resultAjax" name = "resultAjax" value = "${!data || !data.resultAjax?  "" : data.resultAjax}"aria-label="readonly input example" readonly/>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    
    `
    return (layout({content}));
}