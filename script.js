const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const API_URL = 'https://v6.exchangerate-api.com/v6/60b3d43abda5a0ca53939449/latest/USD';
let html = "";


async function currency() {
    let response = await fetch(API_URL)
    let data = await response.json();
    const arrKeys = Object.keys(data.conversion_rates)
    const rates = data.conversion_rates;

    arrKeys.map(item =>{
        return html += `<option value = ${item}>${item}</option>`
    });

    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html;
        
    };
    input[0].addEventListener('keyup', ()=>{
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });
    select[0].addEventListener('change',()=>{
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    });
    select[1].addEventListener('change',()=>{
        input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    });
    input[1].addEventListener('keyup', ()=>{
        input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value];
    });
};

currency();



// const select = document.querySelectorAll(".currency");
// const btn = document.getElementById("btn");
// const input = document.getElementById("input");
// const result = document.getElementById("result");

// fetch("https://v6.exchangerate-api.com/v6/60b3d43abda5a0ca53939449/latest/USD")
// .then((data) => data.json())
// .then ((data)=>{
//     display(data);
//     const arrKeys = Object.keys(data.conversion_rates)
//     const rates = data.conversion_rates;
// });

// function display(data){
//     const entries =  Object.keys(data.conversion_rates);
//     const rates = data.conversion_rates;
//     for (let i = 0; i < entries.length; i++) {
//         select[0].innerHTML += `<option value = "${entries[i][0].rates}">${entries[i][0].rates}</option>`;
//         select[1].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`
//     }
// }
// btn.addEventListener("click", ()=>{
//     let currency1 = select[0].value;
//     let currency2 = select[1].value;
//     let value = input.value;

//     if(currency1 != currency2){
//         convert(currency1,currency2, value);
//     }else{
//         document.getElementById('alert').innerHTML = "Choose different currencies !!!"
//     }
// });

// function convert(currency1, currency2,value){
//     fetch("https://v6.exchangerate-api.com/v6/60b3d43abda5a0ca53939449/latest/USD")
//     .then((data) => data.json())
//     .then ((data)=>{
//         result.value = Object.keys(data.conversion_rates);
//     })
// }


