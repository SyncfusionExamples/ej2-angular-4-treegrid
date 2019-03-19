import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeGridModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule
  ],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
