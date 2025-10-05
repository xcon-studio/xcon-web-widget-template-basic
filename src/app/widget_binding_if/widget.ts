import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetIFModel} from "./models/widget-model-if";
import {WidgetIFService} from "./models/widget-service-if";

@Widget({
    widgetName: 'XCON Binding IF',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-if',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-if",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingIf implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-if onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetIFService) serviceModel!: WidgetIFService;
    @xproperty() model = new WidgetIFModel();
    @xproperty() isVisible = false;

    toggleVisible() {
        this.isVisible = !this.isVisible;
        console.log('Visible toggled to:', this.isVisible);
    }
}