const api_key = "934aa34a853a6044c2cc1416";
const url = "https://v6.exchangerate-api.com/v6/"+ api_key;
fetch(url+ "/codes")
    .then(res => res.json())
    .then(data =>{
        const items = data.supported_codes;

        let options;
        for(let item of items){
            options +=`<option value="${item[0]}"> ${item[1]}</option>`;
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;
    })