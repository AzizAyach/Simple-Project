import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule, [RouterModule.forChild(routes)],FormsModule
  ],
  exports: [RouterModule]
})
export class ContactModule { 
  
}
