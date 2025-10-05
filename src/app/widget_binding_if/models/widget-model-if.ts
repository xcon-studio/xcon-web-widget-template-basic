import {xproperty} from "@xcons/widget";

export class WidgetIFModel {
    @xproperty() isVisible = true;

    toggleVisible() {
        this.isVisible = !this.isVisible;
        console.log('Visible toggled to:', this.isVisible);
    }
}