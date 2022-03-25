class View {
    constructor() {

        this.app = document.getElementById("app");

        this.bill_value = document.getElementById("bill--value")

        this.tip_container = document.getElementsByClassName("tip")[0]

        this.custom_tip__value = document.getElementById("custom-tip");

        this.no_persons_value = document.getElementById("nop--value")

        this.no_persons_warning = document.getElementsByClassName("heading_text--warning")[0]

        this.tip_amount_person_value = document.getElementById("tip-amount-person--value")

        this.total_amount_person_value = document.getElementById("total_amount_person--value")

        this.reset_button = document.getElementsByClassName("reset__btn")[0];

        this.tip_active_class = document.getElementsByClassName("tip-wrapper--focus");



    }

    _init_Default_Listeners() {

        this.bill_value.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        })

        this.no_persons_value.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        })

        this.custom_tip__value.addEventListener("click", (event) => {

            console.log("HEre")

            if (this.custom_tip__value.textContent !== "Custom") {

                this.custom_tip__value.contentEditable = true

            }
            else {
                this.custom_tip__value.textContent = "1%"
            }

        })

        this.bill_value.addEventListener("click", (event) => {

            this.bill_value.textContent = ""

        })

        this.no_persons_value.addEventListener("click", (event) => {

            this.no_persons_value.textContent = ""

        })


        this.custom_tip__value.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.custom_tip__value.contentEditable = false
            }
        })



    }





    BindSetBill(handler) {

        this.bill_value.addEventListener("input", event => {


            handler(this.bill_value.textContent)

        })

    }

    BindGetTip(handler) {

        this.tip_container.addEventListener("click", event => {

            let tip_percentage = event.target.textContent
            console.log("tip-wrapper" in event.target.classList)
            console.log(event.target)
            console.log(event.currentTarget)

            // Removes all highlight active class
            if (this.tip_active_class.length > 0) {
                this.tip_active_class[0].classList.remove("tip-wrapper--focus")
            }

            // Adds highlight class based on condition
            if ("tip-wrapper" === event.target.className) {

                event.target.classList.add("tip-wrapper--focus")
            }
            else if ("tip-wrapper" == event.target.parentElement.className) {

                event.target.parentElement.classList.add("tip-wrapper--focus")
            }



            handler(tip_percentage)

        })


    }



    BindGetCustomTip(handler) {

        this.custom_tip__value.addEventListener("input", event => {

            let tip_percentage = this.custom_tip__value.textContent

            handler(tip_percentage)

        })


    }



    BindSetNo_Of_People(handler) {

        this.no_persons_value.addEventListener("input", event => {


            if (parseInt(this.no_persons_value.textContent) <= 0 || this.no_persons_value.textContent === "") {

                this.no_persons_warning.style.display = "inline"
                this.no_persons_value.parentElement.classList.add("inputbox__nop_hover")

            }
            else {
                this.no_persons_warning.style.display = "none"
                this.no_persons_value.parentElement.classList.remove("inputbox__nop_hover")

                handler(this.no_persons_value.textContent)
            }

        }


        )
    }

    BindReset(handler) {
        this.reset_button.addEventListener("click", event => {

            this.no_persons_value.textContent = "0"
            this.bill_value.textContent = "0"
            this.custom_tip__value.textContent = "Custom"
            this.tip_amount_person_value.textContent = "$0"
            this.total_amount_person_value.textContent = "$0"
            this.no_persons_warning.style.display = "none"

            if (this.tip_active_class.length > 0) {
                this.tip_active_class[0].classList.remove("tip-wrapper--focus")
            }

            handler();

        })
    }


    UpdateTipAmountPerPerson(tip_amount_per_person) {

        if (tip_amount_per_person === 0) {

            this.tip_amount_person_value.textContent = "$0"

        }
        else {

            this.tip_amount_person_value.textContent = "$" + numeral(tip_amount_per_person).format("0.00a")
        }
    }

    UpdateTotalAmountPerPerson(total_amount_per_person) {

        if (total_amount_per_person === 0) {
            this.total_amount_per_person.textContent = "$0"
        }
        else {


            this.total_amount_person_value.textContent = "$" + numeral(total_amount_per_person).format("0.00a")
        }
    }


}


export default View;


