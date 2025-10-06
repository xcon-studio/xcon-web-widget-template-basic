import {xproperty} from "@xcons/widget";

export class WidgetWithoutTemplateTextModel {
    @xproperty() currentDate = new Date().toLocaleString();

    updateDate() {
        this.currentDate = new Date().toLocaleString();
    }
}