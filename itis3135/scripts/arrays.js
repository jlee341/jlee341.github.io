const persons = [];
const salaries = [];


const nameInput = document.getElementById('name');
const salaryInput = document.getElementById('salary');
const addButton = document.getElementById('addButton');
const displayResultsButton = document.getElementById('displayResultsButton');
const resultsDiv = document.getElementById('results');
const resultsTable = document.getElementById('results_table');


addButton.addEventListener('click', addSalary);
displayResultsButton.addEventListener('click', displayResults);
nameInput.addEventListener('click', setFocus);
salaryInput.addEventListener('click', setFocus);


function addSalary() {
    const name = nameInput.value.trim();
    const salary = salaryInput.value.trim();

    if (name === '' || isNaN(salary) || salary === '') {
        alert('Please enter a valid name and numeric salary.');
        return;
    }

    persons.push(name);
    salaries.push(parseFloat(salary));

    displaySalary();
    nameInput.value = '';
    salaryInput.value = '';
    setFocus();
}


function displayResults() {
    if (salaries.length === 0) {
        alert('No data to display.');
        return;
    }

    const average = salaries.reduce((acc, val) => acc + val, 0) / salaries.length;
    const highest = Math.max(...salaries);

    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: $${average.toFixed(2)}</p>
        <p>Highest Salary: $${highest.toFixed(2)}</p>
    `;
}


function displaySalary() {
    resultsTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `;

    for (let i = 0; i < persons.length; i++) {
        const newRow = resultsTable.insertRow(-1);
        const nameCell = newRow.insertCell(0);
        const salaryCell = newRow.insertCell(1);

        nameCell.innerHTML = persons[i];
        salaryCell.innerHTML = `$${salaries[i].toFixed(2)}`;
    }
}


function setFocus() {
    nameInput.focus();
}
