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

        this.reset_button = document.getElementsByClassName("btn")[0];


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
            this.NoOfPeopleLessThanZero()

        })


        this.custom_tip__value.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.custom_tip__value.contentEditable = false
            }
        })



    }


    NoOfPeopleLessThanZero() {

        console.log(this.no_persons_value.textContent)

        if (this.no_persons_value.textContent === "0" || this.no_persons_value.textContent == "") {

            this.no_persons_warning.style.display = "inline"

        }
        else {
            this.no_persons_value.style.display = "none"
        }

    }


    BindSetBill(handler) {

        this.bill_value.addEventListener("input", event => {

            handler(this.bill_value.textContent)

        })

    }

    BindGetTip(handler) {

        this.tip_container.addEventListener("click", event => {

            let tip_percentage = event.target.textContent

            handler(tip_percentage)

        })


    }


    BindSetNo_Of_People(handler) {

        this.no_persons_value.addEventListener("input", event => {

            handler(this.no_persons_value.textContent)

        })

    }

    BindReset(handler) {
        this.reset_button.addEventListener("click", event => {

            this.no_persons_value.textContent = "0"
            this.bill_value.textContent = "0"
            this.custom_tip__value.textContent = "Custom"
            this.tip_amount_person_value.textContent = "$0"
            this.total_amount_person_value.textContent = "$0"
            this.no_persons_warning.style.display = "none"

            handler();

        })
    }


    UpdateTipAmountPerPerson(tip_amount_per_person) {
        this.tip_amount_person_value.textContent = "$" + tip_amount_per_person.toString()
    }

    UpdateTotalAmountPerPerson(total_amount_per_person) {
        this.total_amount_person_value.textContent = "$" + total_amount_per_person.toString()
    }

}

export default View;


