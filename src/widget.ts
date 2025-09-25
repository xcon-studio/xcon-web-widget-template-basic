// XCON Widget Template
import {
    computed,
    OnWidgetPropertyChanged,
    OnWidgetResize,
    property,
    Widget,
    WidgetContext,
    service, DI
} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetTestModel} from "./widget-model";
import {WidgetTestComputedModel} from "./widget-model-computed";
import {WidgetTestAttrModel} from "./widget-model-attr";
import {WidgetTestClassModel} from "./widget-model-class";
import {WidgetTestService} from "./widget-service";


@Widget({
    widgetName: 'XCON Widget',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-test-widget',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    resources: [
        {
            name: 'bootstrap-css',
            type: "css",
            url: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
            extension: true
        },
        {
            name: 'fontawesome',
            type: "css",
            url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
            extension: true
        }
    ],
    logger: {
        prefix: "test-widget",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})
export default class TestXconWidget implements OnWidgetResize, OnWidgetPropertyChanged {

    onWidgetResize(): void {
        console.log('Widget onWidgetResize');
    }

    onWidgetInit() {
        console.log('Widget initialized', this);
    }

    xctx?: WidgetContext;

    @service(WidgetTestService) serviceModel!: WidgetTestService;

    @property() model = new WidgetTestModel();
    @property() modelComputed = new WidgetTestComputedModel();
    @property() modelAttr = new WidgetTestAttrModel();
    @property() modelClass = new WidgetTestClassModel();

    // Text binding property
    @property() currentDate = new Date().toLocaleString();

    // Attribute binding properties
    @property() isDisabled = false;
    @property() isReadonly = false;

    // Class binding properties
    @property() isActive = false;
    @property() hasError = false;
    @property() isLoading = false;

    @property() num1 = 1;
    @property() num2 = 1;

    constructor(ctx: WidgetContext) {
        this.xctx = ctx;
        console.log('Widget initialized', this.xctx);
    }

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('Widget onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    // Text binding - Update date
    updateDate() {
        this.currentDate = new Date().toLocaleString();
    }

    serviceTest() {
        console.log('Registered services:', DI.registry.getRegisteredServices());
        this.serviceModel.updateDate()
        // console.log('serviceTest', this.serviceModel);
    }

    @computed()
    get num3() {
        console.log('Computing num3:', this.num1, '+', this.num2);
        const result = this.num1 + this.num2;
        console.log('Computed result:', result);
        return result;
    }

    updateNumber0() {
        this.num1 = 1;
        this.num2 = 1;
    }

    updateNumber1() {
        this.num1 += 1;
    }

    updateNumber2() {
        this.num2 += 1;
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