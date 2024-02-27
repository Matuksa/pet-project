import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { NavigationPanelModule } from './components/navigation-panel/navigation-panel.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) : TranslateLoader {
    return new TranslateHttpLoader(http, './assets/locale/', '.json');
  }

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NavigationPanelModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            // defaultLanguage: 'ru',
        }),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
