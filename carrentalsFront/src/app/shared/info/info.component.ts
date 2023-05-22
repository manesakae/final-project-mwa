import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  template: `
   <section class="h-screen bg-white dark:bg-gray-900">
    <div  class="py-8 h-full px-4 mx-auto flex items-center max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <!-- <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1> -->
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{{title}}</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{{message}}</p>
            <a (click)="goToHomePage()" *ngIf="showButton" class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
        </div>   
    </div>
</section>
  `,
  styles: [
  ]
})
export class InfoComponent {
  @Input() showButton: boolean = true;
  @Input() title: string = "";
  @Input() message: string = "Please contact admin."
  
  
  router=inject(Router);
  goToHomePage(){
    this.router.navigate(['','companies'])
  }
}
