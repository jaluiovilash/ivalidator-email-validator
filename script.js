console.log("This is my script");

let result = {
    "email": "support@emailvalidation.io",
    "user": "support",
    "tag": "",
    "domain": "emailvalidation.io",
    "smtp_check": true,
    "mx_found": true,
    "did_you_mean": "",
    "role": true,
    "disposable": false,
    "score": 0.64,
    "state": "deliverable",
    "reason": "valid_mailbox",
    "free": false,
    "format_valid": true,
    "catch_all": null
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked")
    resultCont.innerHTML = `<img width="70" src="img/loading.svg" alt="loading">`

    let email = document.getElementById("email").value
    let key = "ema_live_1hxM4gVK3S0PTRunQcYrR5CM9xCofzpdaxG7nk1w"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

    let str = ``
    for (key of Object.keys(result)) {

        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key} : ${result[key]}</div>`;
        }
    }

    console.log(str);
    resultCont.innerHTML = str;
})
