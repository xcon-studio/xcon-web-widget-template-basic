import {OnWidgetPropertyChanged, xproperty, xinject, xcomputed, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetComputeModel} from "./models/widget-model-compute";
import {WidgetComputeService} from "./models/widget-service-compute";

@Widget({
    widgetName: 'XCON Binding Compute',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-compute',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-compute",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingCompute implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-compute onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetComputeService) serviceModel!: WidgetComputeService;
    @xproperty() model = new WidgetComputeModel();

    @xproperty() num1 = 1;
    @xproperty() num2 = 1;

    @xcomputed()
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
}