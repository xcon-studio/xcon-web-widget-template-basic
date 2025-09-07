// XCON Widget Template
import {IWidget, property, Widget, WidgetContext} from "@xcons/widget";
import { LoggerLogLevel } from "@xcons/common";

@Widget({
    widgetName: 'XCON Widget',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-test-widget',
    resources: [],
    templateUrl: './widget.tbhtml',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
    }
})
export default class TestXconWidget implements IWidget {

    ctx?: WidgetContext;

    // Text binding property
    @property() currentDate = new Date().toLocaleString();

    // Attribute binding properties
    @property() isDisabled = false;
    @property() isReadonly = false;

    // Class binding properties
    @property() isActive = false;
    @property() hasError = false;
    @property() isLoading = false;

    constructor(ctx: WidgetContext) {
        this.ctx = ctx;

        console.log('ThingsBoard Widget initialized');
    }

    onWidgetInit() {
        console.log('SimpleBindingExample widget initialized');
    }

    // Text binding - Update date
    updateDate() {
        this.currentDate = new Date().toLocaleString();
        console.log('Date updated to:', this.currentDate);
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

    // Class binding toggles
    toggleActive() {
        this.isActive = !this.isActive;
        console.log('Active toggled to:', this.isActive);
    }

    toggleError() {
        this.hasError = !this.hasError;
        console.log('Error toggled to:', this.hasError);
    }

    toggleLoading() {
        this.isLoading = !this.isLoading;
        console.log('Loading toggled to:', this.isLoading);
    }
}