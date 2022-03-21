document.getElementById("bill--value").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
})

document.getElementById("bill--value").addEventListener("click", (event) => {

    document.getElementById("bill--value").textContent = "0";


})


document.getElementById("custom-tip").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("custom-tip").contentEditable = false
    }
})

document.getElementById("custom-tip").addEventListener("click", (event) => {

    if (document.getElementById("custom-tip").textContent !== "Custom") {

        document.getElementById("custom-tip").contentEditable = true

    }
    else {
        document.getElementById("custom-tip").textContent = "1%"
    }


})


document.getElementById("nop--value").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
})

document.getElementById("nop--value").addEventListener("click", (event) => {

    document.getElementById("nop--value").textContent = "0";


})
