import {xproperty} from "@xcons/widget";

export class WidgetTextModel {
    @xproperty() currentDate = new Date().toLocaleString();

    updateDate() {
        this.currentDate = new Date().toLocaleString();
    }
}