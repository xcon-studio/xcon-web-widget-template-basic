import {property} from "@xcons/widget";

export class WidgetTestClassModel {
    // Class binding properties
    @property() isActive = false;
    @property() hasError = false;
    @property() isLoading = false;

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