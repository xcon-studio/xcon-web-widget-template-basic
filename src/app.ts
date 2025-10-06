import {Widget, WidgetContext} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";

@Widget({
    widgetName: 'XCON App Widget',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'app-root',
    template: '<xcon-binding-text></xcon-binding-text>',
    // template: '<xcon-binding-attr></xcon-binding-attr>',
    // template: '<xcon-binding-class></xcon-binding-class>',
    // template: '<xcon-binding-if></xcon-binding-if>',
    // template: '<xcon-binding-click></xcon-binding-click>',
    // template: '<xcon-binding-switch></xcon-binding-switch>',
    // template: '<xcon-binding-for></xcon-binding-for>',
    // template: '<xcon-binding-model></xcon-binding-model>',
    // template: '<xcon-binding-compute></xcon-binding-compute>',
    // templateUrl: './app_widget_without_template.html',
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "app-root",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})
export default class App {
    onWidgetInit() {
        console.log('App widget initialized', this);
    }

    constructor(ctx: WidgetContext) {
        console.log('App Widget initialized', ctx);
    }
}