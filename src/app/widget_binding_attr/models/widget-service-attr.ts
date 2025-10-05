import {xinjectable, OnServiceInit, OnServiceDestroy, xproperty} from "@xcons/widget";

@xinjectable()
export class WidgetAttrService implements OnServiceInit, OnServiceDestroy {
    @xproperty() isDisabled = false;
    @xproperty() isReadonly = false;

    onServiceDestroy(): void | Promise<void> {
        console.log('onServiceDestroy');
    }

    onServiceInit(): void | Promise<void> {
        console.log('onServiceInit');
    }

    // Attribute binding toggles
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
        console.log('Disabled toggled to:', this.isDisabled);
    }

    toggleReadonly() {
        this.isReadonly = !this.isReadonly;
        console.log('Readonly toggled to:', this.isReadonly);
    }
}