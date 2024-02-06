
let index = 1;

const appendButton = document.querySelector(".append-button");

appendButton.onclick = () => {
    const textInputs = document.querySelectorAll(".text-inputs");
    const dataTableBody = document.querySelector(".data-table-body");

    dataTableBody.innerHTML += `
        <tr>
            <th>${index}</td>
            <th>${textInputs[0].value}</th>
            <th>${textInputs[1].value}</th>
            <th>${textInputs[2].value}</th>
        </tr>
    `;
    console.log(textInputs[0].value)

    index++;

    for(let input of textInputs) {
        input.value = "";
    }

}