import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tour4You';
  ngOnInit(): void {
  const inputElement = document.querySelector('#phone') as HTMLInputElement;

  if (inputElement) {
    const iti = intlTelInput(inputElement, {
      initialCountry: 'ge',
      separateDialCode: true,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });

    // Optional: Log selected country for debugging
    inputElement.addEventListener('countrychange', () => {
      console.log('Selected Country:', iti.getSelectedCountryData());
    });
  }
}
}
