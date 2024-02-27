import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'pet-project';
  // constructor ( public translate: TranslateService ) {
  //   translate.addLangs(['en', 'ru']);
  //   translate.setDefaultLang('en');
  // }
  // ngOnInit(): void {
  //   const selectElement = document.getElementById('mySelect') as HTMLSelectElement;
  //   selectElement.addEventListener('change', (event) => {
  //     this.translate.use(selectElement.value);
  //   });
  // }
}
