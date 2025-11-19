import {Widget, WidgetContext} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";

@Widget({
    widgetName: 'XCON App Widget',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
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