const inputAgeSectionEl = document.getElementById("input-age-section")
const inputAgeSectionButtonEl = document.getElementById("input-age-button")

const checkBoxcheckAgeSectionEl = document.getElementById("checkBox-check-section")
const checkBoxcheckAgeSectionButtonEl = document.getElementById("checkBox-check-button")

inputAgeSectionButtonEl.addEventListener("click",checkInputAgeSectionAge)
checkBoxcheckAgeSectionButtonEl.addEventListener("click", checkBoxCheckAge)

function checkInputAgeSectionAge() {
    const form = inputAgeSectionEl.querySelector("form")
    const formObj = new FormData(form)    
    const formAge = formObj.get("age")

    const resultEl = inputAgeSectionEl.querySelector("#input-age-result")
    if (formAge >= 18) {
        resultEl.textContent = "Yes"
        return
    }
    resultEl.textContent = "No"
}

function checkBoxCheckAge() {
    const checkBox = checkBoxcheckAgeSectionEl.querySelector("input")

    const resultEl = document.getElementById("checkBox-check-age-result")
    if (checkBox.checked) {
        resultEl.textContent = "Yes"
        return
    }
    resultEl.textContent = "No"
}
