const table_body = document.querySelector("tbody");
console.log(table_body.rows.length)

AddRow()

function AddRow(){
    let row = table_body.insertRow()

    row.setAttribute('id' , 'tr'+table_body.rows.length)

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
    <input type="text" required placeholder="Enter Your Product Price" class="form-control" id="price" name="price[]" onchange="calcprice();">
    `
    col4.innerHTML = `
    <input type="text" required placeholder="Enter Your Product Quantity" class="form-control" id="quantity" name="quantity[]" onchange="calcquantity()">
    `
    col5.innerHTML = `
    <button onclick="deleteRow(${table_body.rows.length})" class="btn btn-danger"><b>x</b></button>
    `
    console.log(table_body.rows.length)
}

function calcprice(){
    const input_price = document.getElementsByName("price[]");
    let sum = 0;
    for (let input of input_price){
        sum += parseInt(input.value)
    }
      document.querySelector("#price").innerText = sum;
}
function calcquantity(){
    const input_quantity = document.getElementsByName("quantity[]");
    let sum = 0;
    for (let input of input_quantity){
        sum += parseInt(input.value)
    }
      document.querySelector("#Quantity").innerText = sum;
}

function deleteRow(index){
    let rowtodelete = document.querySelector(`#tr${index}`);
    console.log(rowtodelete)
    table_body.removeChild(rowtodelete)
    calcprice()
};

import { a, b, sum } from "./module.js";

sum(2, 10)