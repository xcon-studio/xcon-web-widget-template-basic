import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetClassService} from "./models/widget-service-class";
import {WidgetClassModel} from "./models/widget-model-class";

@Widget({
    widgetName: 'XCON Binding Class',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-class',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-class",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingClass implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-class onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetClassService) serviceModel!: WidgetClassService;
    @xproperty() model = new WidgetClassModel();

    @xproperty() isActive = false;
    @xproperty() hasError = false;
    @xproperty() isLoading = false;

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