import {xproperty} from "@xcons/widget";

export class WidgetAttrModel {
    @xproperty() modelIsDisabled = false;
    @xproperty() modelIsReadonly = false;

    // Attribute binding toggles
    modelDisabled() {
        this.modelIsDisabled = !this.modelIsDisabled;
        console.log('model Disabled toggled to:', this.modelIsDisabled);
    }

    modelReadonly() {
        this.modelIsReadonly = !this.modelIsReadonly;
        console.log('model Readonly toggled to:', this.modelIsReadonly);
    }
}