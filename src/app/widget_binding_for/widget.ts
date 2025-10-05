import {OnWidgetPropertyChanged, xproperty, Widget} from "@xcons/widget";
import {ComponentLogLevel, LoggerLogLevel} from "@xcons/common";

@Widget({
    widgetName: 'XCON Binding For',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'xcon-binding-for',
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

export default class TestBindingFor implements OnWidgetPropertyChanged {

    onWidgetPropertyChanged(propertyKey?: string, oldValue?: any, newValue?: any): void {
        console.log('xcon-binding-for onWidgetPropertyChanged', propertyKey, oldValue, newValue);
    }

    @xproperty() items: string[] = ['Apple', 'Banana', 'Orange'];
    @xproperty() users: Array<{ name: string, email: string, age: number }> = [
        {name: 'John Doe', email: 'john@example.com', age: 30},
        {name: 'Jane Smith', email: 'jane@example.com', age: 25}
    ];

    addItem(): void {
        const newItems = ['Grape', 'Strawberry', 'Watermelon', 'Pineapple', 'Mango'];
        const randomItem = newItems[Math.floor(Math.random() * newItems.length)];
        this.items = [...this.items, randomItem];
        console.log('Added item:', randomItem);
    }

    removeItem(): void {
        if (this.items.length > 0) {
            const removed = this.items.pop();
            this.items = [...this.items]; // Trigger reactivity
            console.log('Removed item:', removed);
        }
    }

    clearItem(): void {
        this.items = [];
        console.log('clearItem item:', this.items);
    }

    addUser(): void {
        const names = ['Alice Johnson', 'Bob Wilson', 'Carol Brown', 'David Lee'];
        const domains = ['example.com', 'test.com', 'demo.com'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        const email = randomName.toLowerCase().replace(' ', '.') + '@' + randomDomain;
        const age = Math.floor(Math.random() * 40) + 20;

        const newUser = {
            name: randomName,
            email: email,
            age: age
        };

        this.users = [...this.users, newUser];
        console.log('Added user:', newUser);
    }

    removeUser(): void {
        if (this.users.length > 0) {
            const removed = this.users.pop();
            this.users = [...this.users]; // Trigger reactivity
            console.log('Removed user:', removed);
        }
    }

    clearUser(): void {
        this.users = [];
        console.log('clearItem user:', this.users);
    }

    testString(user: string) {
        console.log('call: testString', user);
    }

    testUser(user: string) {
        console.log('call: testUser', user);
    }
}