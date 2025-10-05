import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetModelService} from "./models/widget-service-model";
import {WidgetModel} from "./models/widget-model";

@Widget({
    widgetName: 'XCON Binding Model',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-model',
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
export default class TestBindingModel implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-model onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetModelService) serviceModel!: WidgetModelService;
    @xproperty() model = new WidgetModel();
    // Example 1: Basic text input
    @xproperty() username: string = '';
    @xproperty() usernameChanged = new Date().toLocaleString();

    // Example 2: Checkbox
    @xproperty() isActive: boolean = false;

    // Example 3: Select dropdown
    @xproperty() selectedCity: string = '';

    // Example 4: Radio buttons
    @xproperty() selectedSize: string = 'medium';

    // Example 5: Textarea
    @xproperty() description: string = '';

    // Example 6: Range slider
    @xproperty() volume: number = 50;

    // Example 7: Multiple select
    @xproperty() selectedTags: string[] = [];

    // Example 8: Debounced search
    @xproperty() searchQuery: string = '';

    // Example 9: Trim whitespace
    @xproperty() email: string = '';

    // Example 10: Lazy update
    @xproperty() lazyValue: string = '';

    // Example 11: Update on blur
    @xproperty() password: string = '';

    // Example 12: Combined config
    @xproperty() fullName: string = '';

    // Example 13: Number input
    @xproperty() age: number = 0;

    // Example 14: Date input
    @xproperty() birthDate: string = '';

    onUsernameChange(oldValue: any, newValue: any) {
        this.usernameChanged = new Date().toLocaleString();
        console.log('Changed:', oldValue, '->', newValue);
    }
}