form.addEventListener('submit', ()=>{
    const signup2 = {
        name: Name.value,
        username: Username.value,
        age: Age.value,
        academylevel: Academylevel.value,
        testscore: TestScore.value
    }
    fetch("./api/signup2", {
        method: "POST",
        body: JSON.stringify(signup2),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error"){
                succes.style.display = "none"
                error.style.display = "block"
                error.innerText = data.error
            }
            else{
                error.style.display = "none"
                succes.style.display = "block"
                success.innerText = data.succes
            }
        })

})