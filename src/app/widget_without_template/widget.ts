import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetWithoutTemplateTextModel} from "./models/widget-model-text";
import {WidgetWithoutTemplateTextService} from "./models/widget-service-text";


@Widget({
    widgetName: 'XCON Binding Text',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-without-template-text',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-without-template-text",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingWithoutTemplateText implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-without-template-text onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetWithoutTemplateTextService) serviceModel!: WidgetWithoutTemplateTextService;
    @xproperty() model = new WidgetWithoutTemplateTextModel();
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