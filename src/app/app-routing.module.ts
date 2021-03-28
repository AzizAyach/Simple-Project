import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact/contact/contact.module';
import { ProductModule } from './production/product/product.module';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule,ContactModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
