import Model from "./model"
import View from "./view"
import Controller from "./controller"

const app = new Controller(new Model(), new View());




document.getElementById("bill--value").addEventListener("keydown", (event) => {
    // if (event.key === 13) {
    // event.preventDefault();
    // console.log("here")
    // }
    console.log(event.key)
})