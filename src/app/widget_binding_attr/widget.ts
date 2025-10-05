import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetAttrService} from "./models/widget-service-attr";
import {WidgetAttrModel} from "./models/widget-model-attr";

@Widget({
    widgetName: 'XCON Binding Attr',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-attr',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-attr",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingAttr implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-attr onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetAttrService) serviceModel!: WidgetAttrService;
    @xproperty() model = new WidgetAttrModel();
    @xproperty() isDisabled = false;
    @xproperty() isReadonly = false;

    // Attribute binding toggles
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
        console.log('Disabled toggled to:', this.isDisabled);
    }

    toggleReadonly() {
        this.isReadonly = !this.isReadonly;
        console.log('Readonly toggled to:', this.isReadonly);
    }
}