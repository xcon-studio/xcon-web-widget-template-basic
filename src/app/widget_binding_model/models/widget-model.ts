import {xproperty} from "@xcons/widget";

export class WidgetModel {
    @xproperty() currentDate = new Date().toLocaleString();

    updateDate() {
        this.currentDate = new Date().toLocaleString();
    }
}