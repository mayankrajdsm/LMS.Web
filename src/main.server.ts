import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './ps/app.component';
import { config } from './ps/app.config.server';
// import { AppComponent } from './app/app.component';
// import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
