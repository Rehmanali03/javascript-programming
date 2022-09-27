const table_body = document.querySelector("tbody");
console.log(table_body.rows.length)

AddRow()

function AddRow(){
    let row = table_body.insertRow()
    let col1 = row.insertCell()
    let col2 = row.insertCell()
    let col3 = row.insertCell()
    let col4 = row.insertCell()
    let col5 = row.insertCell()

    col1.innerHTML = `
    <input type="text" required placeholder="Enter Your Product ID" class="form-control">
    `
    col2.innerHTML = `
    <input type="text" required placeholder="Enter Your Product Name" class="form-control">
    `
    col3.innerHTML = `
    <input type="text" required placeholder="Enter Your Product Price" class="form-control">
    `
    col4.innerHTML = `
    <input type="text" required placeholder="Enter Your Product Quantity" class="form-control">
    `
    col5.innerHTML = `
    <button onclick="deleteRow(${table_body.rows.length - 1})" class="btn btn-danger"><b>x</b></button>
    `
    console.log(table_body.rows.length)
}