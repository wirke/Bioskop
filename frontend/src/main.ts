import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([])
  ]
}).catch((err) => console.error(err));
=======
platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
>>>>>>> wirke
