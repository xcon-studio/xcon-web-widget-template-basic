import {xproperty} from "@xcons/widget";

export class WidgetClassModel {
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