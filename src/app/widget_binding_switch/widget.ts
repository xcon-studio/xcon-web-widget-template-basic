import {OnWidgetPropertyChanged, xproperty, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";

@Widget({
    widgetName: 'XCON Binding Swicth',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-switch',
    templateUrl: './widget.html',
    styleUrls: ['./widget.css'],
    initMode: "auto",
    encapsulation: 'component',
    logger: {
        prefix: "xcon-binding-for",
        enabled: true,
        level: LoggerLogLevel.DEBUG,
        timestamp: true,
        colors: true,
        componentLogLevel: ComponentLogLevel.DETAILED
    },
})

export default class TestBindingSwicth implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-switch onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xproperty() status = 'loading';
    @xproperty() userLevel = 1;

    randomStatus(): void {
        const newItems = ['loading', 'error', 'success', 'Pineapple'];
        this.status = newItems[Math.floor(Math.random() * newItems.length)];
        console.log('randomStatus:', this.status);
    }

    randomLevel(): void {
        const newItems = [1, 2, 3, 99];
        this.userLevel = newItems[Math.floor(Math.random() * newItems.length)];
        console.log('randomLevel:', this.userLevel);
    }
}