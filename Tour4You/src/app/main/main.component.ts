import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnDestroy {
  isModalOpen: boolean = false;
  itiInstance: any; 

  openModal(): void {
    this.isModalOpen = true;
    setTimeout(() => this.initializeIntlTelInput(), 300); 
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.destroyIntlTelInput(); 
  }

  ngAfterViewInit(): void {
    this.initializeIntlTelInput();
  }

  initializeIntlTelInput(): void {
    const input = document.querySelector<HTMLInputElement>('#phone');
    if (input && !this.itiInstance) {
      this.itiInstance = intlTelInput(input, {
        initialCountry: 'ge',
        separateDialCode: true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
      });
    }
  }

  destroyIntlTelInput(): void {
    if (this.itiInstance) {
      this.itiInstance.destroy(); 
      this.itiInstance = null;
    }
  }

  ngOnDestroy(): void {
    this.destroyIntlTelInput();
  }
}
