import {xinjectable, OnServiceDestroy, OnServiceInit, xproperty, xcomputed} from "@xcons/widget";

@xinjectable()
export class WidgetComputeService implements OnServiceInit, OnServiceDestroy {
    onServiceDestroy(): void | Promise<void> {
        console.log('onServiceDestroy');
    }

    onServiceInit(): void | Promise<void> {
        console.log('onServiceInit');
    }

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