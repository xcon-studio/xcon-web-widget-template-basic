import {xinjectable, OnServiceInit, OnServiceDestroy,xproperty} from "@xcons/widget";

@xinjectable()
export class WidgetWithoutTemplateTextService implements OnServiceInit, OnServiceDestroy {
    @xproperty() currentDate = new Date().toLocaleString();

    onServiceDestroy(): void | Promise<void> {
        console.log('onServiceDestroy');
    }

    onServiceInit(): void | Promise<void> {
        console.log('onServiceInit');
    }

    updateDate() {
        console.log('updateDate');
        this.currentDate = new Date().toLocaleString();
    }
}