const form = document.querySelector("form")
form.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(form)
    
    if (!validateForm(formData)) {
        return
    }

    createObjTable(createUserObject(formData))
}

function validateForm(formData) {
    let isValid = true
    const fName = formData.get("name")
    if (fName === "") {
         window.alert("Please enter your full name");
         isValid = false
    }

    const email = formData.get("email")
    if (email === "" || !isValidEmail(email)) {
        window.alert("Please enter a valid email")
        isValid = false
    }
    
    const password = formData.get("password");
    if (password === "" || !isValidPassword(password)) {
        window.alert("Password must be equal to or more than 6 characters long")
        isValid = false
    }

    const birthday = formData.get("birthday");
    if (birthday === "") {
        window.alert("Please select your birthday")
        isValid = false
    }

    const about = formData.get("about")
    if (about === "") {
         window.alert("Please enter something in the 'About you' text area")
         isValid = false
    }

    if (!formData.has("gender")) {
        window.alert("Please select a gender");
        isValid = false
    }
    if (formData.getAll("hobby").length === 0) {
        window.alert("Please select at least one hobby");
        isValid = false
    }

    return isValid
}

function createUserObject(formData) {
    return {
        fName: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        birthday: formData.get("birthday"),
        country: formData.get("country"),
        gender: formData.get("gender"),
        hobby: formData.getAll("hobby"),
        about: formData.get("about"),
    }
}

function createObjTable(obj) {
    const table = document.createElement("table")
    const header = table.createTHead().insertRow()
    const body = table.createTBody()

    for (const heading of ["Field", "Value"]) {
        const cell = document.createElement("th")
        cell.textContent = heading
        header.appendChild(cell)
    }

    for (const [key, value] of Object.entries(obj)) {
        const row = body.insertRow()
        row.insertCell().textContent = key
        row.insertCell().textContent = Array.isArray(value) ? value.join(", ") : String(value ?? "")
    }

    document.querySelector("table")?.remove()
    form.insertAdjacentElement("afterend", table)
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
}

function isValidPassword(password) {
    return password.length >= 6;
}

