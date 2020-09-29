const webpack = require('webpack');
module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/common/http": "ng.common.http",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
        "@angular/compiler": "ng.compiler",
        "@angular/elements": "ng.elements",


        '@angular/cdk': 'ng.cdk',
        '@angular/cdk/keycodes': 'ng.cdk.keycodes',
        '@angular/cdk/coercion': 'ng.cdk.coercion',
        '@angular/cdk/observers': 'ng.cdk.observers',
        '@angular/cdk/platform': 'ng.cdk.platform',
        '@angular/cdk/a11y': 'ng.cdk.a11y',
        '@angular/cdk/bidi': 'ng.cdk.bidi',
        '@angular/cdk/portal': 'ng.cdk.portal',
        '@angular/animations/browser': 'ng.animations.browser',
        '@angular/animations': 'ng.animations',
        '@angular/platform-browser/animations': 'ng.platformBrowser.animations',

         '@angular/material': 'ng.material',
         '@angular/material/core': 'ng.material',
         '@angular/material/button': 'ng.material',
         '@angular/material/card': 'ng.material',
         '@angular/material/datepicker': 'ng.material',
         '@angular/material/form-field': 'ng.material',
         '@angular/material/icon': 'ng.material',
         '@angular/material/input': 'ng.material',
         '@angular/material/list': 'ng.material',
         '@angular/material/paginator': 'ng.material',
         '@angular/material/sort': 'ng.material',
         '@angular/material/table': 'ng.material',
         '@angular/material/tooltip': 'ng.material'

        // Uncomment and add to scripts in angular.json if needed
        // "@angular/router": "ng.router",
        // "@angular/forms": "ng.forms"
    },
    output: {
        jsonpFunction: 'client-reports'
      }
}