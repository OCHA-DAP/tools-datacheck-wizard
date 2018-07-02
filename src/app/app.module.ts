import { RecipeService } from './datacheck/services/recipe.service';
import { ConfigService } from './datacheck/config.service';
import { HxlproxyService } from './datacheck/services/hxlproxy.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatacheckComponent } from './datacheck/datacheck.component';
import { AppRoutingModule } from './app-routing.module';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { ImportComponent } from './datacheck/import/import.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from './common/common.module';
import { AnalyticsService } from './common/analytics.service';
import { SimpleModule } from 'hxl-preview-ng-lib';
import { HttpService } from './shared/http.service';
import { HotTableModule } from '@handsontable/angular';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap';

export const HTTP_SERVICE_PROVIDERS: any = {
  provide: Http,
  useFactory: httpFactory,
  deps: [XHRBackend, RequestOptions]
};

export function httpFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}


@NgModule({
  declarations: [
    AppComponent,
    DatacheckComponent,
    ImportComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    SimpleModule,
    CommonModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HotTableModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    HTTP_SERVICE_PROVIDERS,
    HxlproxyService,
    ConfigService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
