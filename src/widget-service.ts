import {injectable, OnServiceInit, OnServiceDestroy} from "@xcons/widget";

@injectable()
export class WidgetTestService implements OnServiceInit, OnServiceDestroy {
    onServiceDestroy(): void | Promise<void> {
        console.log('onServiceDestroy');
    }

    onServiceInit(): void | Promise<void> {
        console.log('onServiceInit');
    }

    updateDate() {
        console.log('updateDate');
    }
}