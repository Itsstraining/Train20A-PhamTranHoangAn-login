import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './Components/registration-form/registration-form.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

const routes: Routes = [{path:'form',component:RegistrationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
