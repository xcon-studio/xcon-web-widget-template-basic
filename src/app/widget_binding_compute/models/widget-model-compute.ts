import {xproperty, xcomputed} from "@xcons/widget";

export class WidgetComputeModel {
    @xproperty() modelNum1 = 1;
    @xproperty() modelNum2 = 1;

    @xcomputed()
    get modelNum3() {
        console.log('Computing modelNum:', this.modelNum1, '+', this.modelNum2);
        const result = this.modelNum1 + this.modelNum2;
        console.log('Computed result:', result);
        return result;
    }

    updateNumber0() {
        this.modelNum1 = 1;
        this.modelNum2 = 1;
    }

    updateNumber1() {
        this.modelNum1 += 1;
    }

    updateNumber2() {
        this.modelNum2 += 1;
    }
}