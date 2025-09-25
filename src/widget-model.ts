import {property} from "@xcons/widget";

export class WidgetTestModel {
    @property() currentDate = new Date().toLocaleString();

    updateDate() {
        this.currentDate = new Date().toLocaleString();
    }
}