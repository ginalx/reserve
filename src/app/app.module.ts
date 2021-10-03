import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatermarkComponent } from './watermark/watermark.component';
import { TargetComponent } from './target/target.component';
import { PanelToggleComponent } from './panel-toggle/panel-toggle.component';
import { FastSelectComponent } from './fast-select/fast-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FastSelectComponent,
    PanelToggleComponent,
    PanelComponent,
    WatermarkComponent,
    TargetComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
