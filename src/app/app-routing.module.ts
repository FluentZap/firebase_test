import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth/auth.guard'
const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'public', component: PublicComponent},
  {path: 'private',canActivate: [AuthGuard], component: PrivateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
