import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
const APP_ROUTES: Routes = [
    { path: '' , component: PanelComponent },
    { path: 'about', component: AboutComponent },
    { path: 'meio-ambiente', component: PanelComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
