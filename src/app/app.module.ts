import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
