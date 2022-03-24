class Model {
    constructor() {

        this.state = {
            'bill': 0,
            'tip': 0,
            'no_of_persons': 0
        }

    }

    setBill(bill_value) {

        this.state.bill = parseFloat(bill_value)

    }

    setTip(tip_percent) {

        this.state.tip = parseFloat(tip_percent) / 100;
    }

    set_no_of_persons(no_of_persons) {
        this.state.no_of_persons = parseFloat(no_of_persons)
    }

    reset() {
        this.state = {
            'bill': 0,
            'tip': 0,
            'no_of_persons': 0
        }
    }

    calculate_tip_amount_per_person() {
        let tip_amount_per_person = ((this.state.bill * this.state.tip) / this.state.no_of_persons).toFixed(2)

        if (!isFinite(tip_amount_per_person)) {
            return 0
        }

        return tip_amount_per_person
    }

    calculate_total_amount_per_person() {

        let total_amount_per_person = ((this.state.bill + (this.state.bill * this.state.tip)) / this.state.no_of_persons).toFixed(2)

        if (!isFinite(total_amount_per_person)) {
            return 0
        }

        return total_amount_per_person

    }


}


export default Model;