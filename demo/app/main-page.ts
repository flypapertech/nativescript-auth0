import {EventData} from '@nativescript/core/data/observable';
import {Page} from '@nativescript/core/ui';
import {HelloWorldModel} from './main-view-model';
const c = new HelloWorldModel();
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = c;
}
