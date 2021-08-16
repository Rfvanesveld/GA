document.getElementById("opdracht6").addEventListener('click', showMatchMaking)

let allPersons = randomPersonData.filter(result => result)

function showMatchMaking() {
    removeDatabase()
    removeExtraRadioButtons()
    toelichting.innerHTML = "Match Making"
    allPersons.forEach(result => {

        fullName = document.createElement("div")
        fullName.innerText = (result.name + "  " + result.surname)
        database.appendChild(fullName)

        country = document.createElement("li")
        country.innerText = ("from: " + result.region)
        database.appendChild(country)

        photo = document.createElement("img")
        photo.src = (result.photo)
        database.appendChild(photo)

        age = document.createElement("li")
        age.innerHTML = ("is " + result.age + " years old")
        database.appendChild(age)

        sterrenbeeld = document.createElement("li")
        sterrenbeeld.innerHTML = ("Zijn / haar sterrenbeeld is: .............")
        database.appendChild(sterrenbeeld)

        button = document.createElement("button")
        button.innerHTML = ("Click this button to see matches for this person")
        database.appendChild(button)

        emptyLine = document.createElement("div")
        emptyLine.innerText = "---------------------------------"
        database.appendChild(emptyLine)
    })
}























