class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.model.reset()

        this.view._init_Default_Listeners()

        this.view.BindSetBill(this.handleSetBill)

        this.view.BindGetTip(this.handleSetTip)

        this.view.BindSetNo_Of_People(this.handleNoOfPeople)

        this.view.BindReset(this.handleReset)

        this.view.BindGetCustomTip(this.handleSetTip)


    }

    handleSetBill = (bill_value) => {
        this.model.setBill(bill_value)
        this.handleCalculate()
    }

    handleSetTip = (tip_value) => {
        this.model.setTip(tip_value)
        this.handleCalculate()
    }

    handleNoOfPeople = (nop) => {
        this.model.set_no_of_persons(nop)
        this.handleCalculate()
    }

    handleReset = () => {
        this.model.reset()
    }

    handleCalculate = () => {
        let total_amount_per_person = this.model.calculate_total_amount_per_person()
        this.view.UpdateTotalAmountPerPerson(total_amount_per_person)

        let tip_amount_per_person = this.model.calculate_tip_amount_per_person()
        this.view.UpdateTipAmountPerPerson(tip_amount_per_person)
    }

}


export default Controller;








