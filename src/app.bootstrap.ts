import {XConBootstrap} from "@xcons/widget";
import App from "./app";
import TestBindingFor from "./app/widget_binding_for/widget";
import TestBindingText from "./app/widget_binding_text/widget";
import {WidgetTextService} from "./app/widget_binding_text/models/widget-service-text";
import {WidgetAttrService} from "./app/widget_binding_attr/models/widget-service-attr";
import TestBindingAttr from "./app/widget_binding_attr/widget";
import {WidgetClassService} from "./app/widget_binding_class/models/widget-service-class";
import TestBindingClass from "./app/widget_binding_class/widget";
import {WidgetIFService} from "./app/widget_binding_if/models/widget-service-if";
import TestBindingIf from "./app/widget_binding_if/widget";
import {WidgetComputeService} from "./app/widget_binding_compute/models/widget-service-compute";
import TestBindingCompute from "./app/widget_binding_compute/widget";
import {WidgetClickService} from "./app/widget_binding_click/models/widget-service-click";
import TestBindingClick from "./app/widget_binding_click/widget";
import TestBindingSwicth from "./app/widget_binding_switch/widget";
import {WidgetModelService} from "./app/widget_binding_model/models/widget-service-model";
import TestBindingModel from "./app/widget_binding_model/widget";

XConBootstrap.run({
    rootWidget: App,
    widgets: [
        {
            widget: TestBindingFor,
            initMode: 'auto'
        },
        {
            widget: TestBindingText,
            initMode: 'auto'
        },
        {
            widget: TestBindingClick,
            initMode: 'auto'
        },
        {
            widget: TestBindingAttr,
            initMode: 'auto'
        },
        {
            widget: TestBindingClass,
            initMode: 'auto'
        },
        {
            widget: TestBindingIf,
            initMode: 'auto'
        },
        {
            widget: TestBindingCompute,
            initMode: 'auto'
        },
        {
            widget: TestBindingSwicth,
            initMode: 'auto'
        },
        {
            widget: TestBindingModel,
            initMode: 'auto'
        }
    ],
    services: [
        {service: WidgetTextService},
        {service: WidgetAttrService},
        {service: WidgetClassService},
        {service: WidgetIFService},
        {service: WidgetComputeService},
        {service: WidgetClickService},
        {service: WidgetModelService}
    ],
    providers: [
        {
            token: 'API_URL',
            useValue: 'https://api.example.com',
        },
        {
            token: 'CONFIG',
            useFactory: () => ({debug: true, version: '1.0.0'})
        }
    ]
});