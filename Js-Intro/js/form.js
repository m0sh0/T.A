const submitButton = document.querySelector("input[type=submit]")
submitButton.addEventListener("click", validateForm)

function validateForm() {
    const formData = new FormData(document.querySelector("form"));

    for (const [name, value] of formData.entries()) {
        if (value === "") {
            window.alert(`Please fill out ${name} field`)
            return
        }
        console.log(name, value);
    }

    if (!formData.has("gender")) {
        window.alert("Please select a gender");
        return;
    }

    if (formData.getAll("hobby").length === 0) {
        window.alert("Please select at least one hobby");
        return;
    }
}
