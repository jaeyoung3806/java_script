const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelectorAll(".box-container");
    const boxMove = document.querySelector("#container2");
    boxContainer.innerHTML += `<div class="box"></div>`;
    
   
    const boxList = document.querySelectorAll(".box");

    for(let i = 0; i < boxList.length; i++){
        boxList[i].onclick = () => {  
            let isBlueBox = boxList[i].classList.contains("blue-box");
            let isRedBox = boxList[i].classList.contains("red-box");
            if(isBlueBox === false && isRedBox === false){
                boxList[i].classList.add("blue-box");
            } else if(isBlueBox === true) {
                boxList[i].classList.remove("blue-box");
                boxList[i].classList.add("red-box");   
            } else {
                boxContainer.removeChild(boxList[i]);
                boxMove.appendChild(boxList[i]);
            }
        }
    }
}

    //     if (isBlueBox === true){
    //         boxList[0].onclick = () => {
    //             boxList[0].classList.remove("blue-box");
    //             boxList[0].classList.add("red-box");
    //             isRedBox = boxList[0].classList.contains("red-box");
    //             if (isRedBox === true){
    //                 boxList[0].onclick = () => {
    //                     boxList[0].classList.remove("red-box");
    //                 }
    //             }
    //         }
    //     } 
    // }
    
