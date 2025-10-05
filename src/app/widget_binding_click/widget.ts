import {OnWidgetPropertyChanged, xproperty, xinject, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";
import {WidgetClickModel} from "./models/widget-model-click";
import {WidgetClickService} from "./models/widget-service-click";

@Widget({
    widgetName: 'XCON Binding Click',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-click',
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

export default class TestBindingClick implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-click onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xinject(WidgetClickService) serviceModel!: WidgetClickService;
    @xproperty() model = new WidgetClickModel();

    @xproperty() userId = "12345";

    test() {
        console.log('call: test');
    }

    testHello(p: string) {
        console.log('call: testHello', p);
    }

    testParam(p0: string, p1: string, p2: string) {
        console.log('call: testParam', p0, p1, p2);
    }

    testProperty(userId: string) {
        console.log('call: testProperty', userId);
    }

    handleClick($event: any, target: any) {
        console.log('call: handleClick', $event, target);
    }

    updateModel(id: string, name: string) {
        console.log('call: updateModel', id, name);
    }
}