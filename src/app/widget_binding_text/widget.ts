import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetTextService} from "./models/widget-service-text";
import {WidgetTextModel} from "./models/widget-model-text";

@Widget({
    widgetName: 'XCON Binding Text',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-text',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-text",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingText implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-text onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetTextService) serviceModel!: WidgetTextService;
    @xproperty() model = new WidgetTextModel();
    @xproperty() currentDate = new Date().toLocaleString();

    // Text binding - Update date
    updateDate() {
        this.currentDate = new Date().toLocaleString();
    }

    serviceTest() {
        this.serviceModel.updateDate()
        console.log('serviceTest', this.serviceModel);
    }
}