async function handleAddClick(){
    const dataInputs = document.querySelectorAll(".product-inputs");
    const data = {
        name: dataInputs[0].value,
        price: dataInputs[1].value,
        size: dataInputs[2].value
    };
    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };
    try {
        const response = await fetch("http://localhost:8080/product/data/addition", option);
        
        if(!response.ok) {
            throw await response.json();
        }
        console.log(response);

        const json = await response.json();

        console.log(json);

        console.log("test");
    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
    }
}


