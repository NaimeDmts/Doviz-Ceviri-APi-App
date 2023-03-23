calculate.addEventListener("click", () => {
    const doviz1 = currency_one.value;
    const doviz2 = currency_two.value;
    const miktar = amount.value;

    fetch(url + "/latest/" + doviz1)
    .then(res => res.json())
    .then(data =>{
        const sonuc = (data.conversion_rates[doviz2]*miktar).toFixed(3);
        result.innerHTML =`
            <div class="card border-primary">
                <div class="card-body text-center h3">
                    ${miktar} ${doviz1} = ${sonuc} ${doviz2}
                </div>
            </div>`;
    })
})