import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './bootstrap';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
