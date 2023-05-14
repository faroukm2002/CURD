var selectedRow = null
const url = 'http://localhost:5000'

async function return_arr_of_all_persons() {
    const res = await fetch(url + '/persons', { method: 'GET' })
    const persons = await res.json()
    return persons
}

window.onload = async function() {
    const persons = await return_arr_of_all_persons()
    console.log(persons)
    persons.forEach(person => {
        insertNewRecord(person)
    })
}

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["email"] = document.getElementById("email").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    const table = document.getElementById("storeList").querySelector('tbody');
    const newRow = table.insertRow(-1); // use -1 to insert new row at the end of the table
    newRow.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.gender}</td>
        <td>${data.email}</td>
        <td>
            <button onClick="onEdit(this)">Edit</button>
            <button onClick="onDelete(this)">Delete</button>
        </td>
    `;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.email;

}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        const row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("email").value = '';

    selectedRow = null;
}
