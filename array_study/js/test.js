//spread연산

// let array = [1,2,3,4];
// array.push(5);
// array = [...array,5,6, ...array];

// let obj = {
//     name: "김준일",
//     age: 31
// }

//비구조 할당

// let obj = {
//     id: 1,
//     name: "김준일",
//     age: 31
// }

// let {id, age} = obj;
// console.log(id);


let dataList = [];

window.onload = () => {
    getDataList();


    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.value;
            
            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id ; 

            const dataObj = {
                id: lastId + 1,
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",            
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObj)
            });


            dataList = [...dataList, dataObj];
            addInput.value = ""; 
            getDataList();
        }
    }
}

function ContentData({ id, content }) {
    return `
        <li>    
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" class="edit-inputs" value="${content}">
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;
}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += ContentData(dataObj);
    }
}


function removeData(id) {
    // const findId = (dataObj) => dataObj.id === id; //람다식
    dataList = dataList.filter((dataObj) => dataObj.id !== id);

    getDataList();
}

function editData(id) {
    const editInput = document.querySelectorAll(".edit-inputs");
    // let findIndex = -1;

    // for(let i = 0 ; i< dataList.length; i++) {
    //     if(dataList[i].id === id){
    //         findIndex = i;
    //         break
    //     }
    // }

    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];

    findIndex = dataList.indexOf(findObj);

    dataList[findIndex].content = editInput[findIndex].value;

    getDataList();

}