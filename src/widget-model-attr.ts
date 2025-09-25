import {property} from "@xcons/widget";

export class WidgetTestAttrModel {
    @property() isDisabled = false;
    @property() isReadonly = false;

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