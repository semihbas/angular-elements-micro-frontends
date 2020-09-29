import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { ClientDocumentsComponent } from './components/client-documents/client-documents.component';

@NgModule({
  declarations: [
    ClientDocumentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [ClientDocumentsComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const clientDocuments= createCustomElement(ClientDocumentsComponent, {injector: this.injector});
    customElements.define('client-documents', clientDocuments);
  }

}