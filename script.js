var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", ()=>{
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then(response=>{
            if(!response.ok){
                throw new Error("Deu merda!");
            }

            return response.json();
    })
    .then(data=>{
            let input = document.getElementById("real");
            let real = input.value;
            real = parseInt(real);

            let select = document.getElementsByTagName("select")[0];
            let indexCoin = select.selectedIndex;
            let coin = select[indexCoin].value;

            let insertValue = document.getElementById("valueCoin");
            var calc = 0;

            if(coin === "Dolar"){
                let usd = data.USDBRL.bid;
                usd = parseFloat(usd);
                calc = real / usd;
                calc = calc.toLocaleString("pt-BR", {maximumFractionDigits: 2});
                insertValue.innerText = `US$ ${calc}`;
            }

            else if(coin === "Euro"){
                let eur = data.EURBRL.bid;
                eur = parseFloat(eur);
                calc = real / eur;
                calc = calc.toLocaleString("pt-BR", {maximumFractionDigits: 2});
                insertValue.innerText = `€ ${calc}`;
            }

            else if(coin === "BTC"){
                let btc = data.BTCBRL.bid;
                btc = parseFloat(btc);
                calc = real / btc;
                calc = calc.toFixed(6);
                insertValue.innerText = `${calc} BTC`;
            } 
    })
    .catch(error=>{
            console.error(error);
    })    
})