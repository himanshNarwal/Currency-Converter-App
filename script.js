const populate = async (value, currency) => {
    let myStr = ""
    url =
        "api key" // Paste your api key here 
        +"&base_currency=" 
        +currency;
    let response = await fetch(url);
    let rjson = await response.json()
    document.querySelector(".output").style.display = "block"
    for(let key of Object.keys(rjson["data"])){
        myStr+= `<tr>
                    <td>${key}</td>
                    <td>${rjson["data"][key]["code"]}</td>
                    <td>${rjson["data"][key]["value"] * value}</td>
                </tr>
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(
        document.querySelector("input[name='quantity']").value
    );
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});
