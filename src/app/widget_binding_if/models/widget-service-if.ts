import {xinjectable, OnServiceInit, OnServiceDestroy, xproperty} from "@xcons/widget";

@xinjectable()
export class WidgetIFService implements OnServiceInit, OnServiceDestroy {
    onServiceDestroy(): void | Promise<void> {
        console.log('onServiceDestroy');
    }

    onServiceInit(): void | Promise<void> {
        console.log('onServiceInit');
    }

    @xproperty() isVisible = true;

    toggleVisible() {
        this.isVisible = !this.isVisible;
        console.log('Visible toggled to:', this.isVisible);
    }
}