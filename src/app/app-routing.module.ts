import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { Game } from './components/game/game.component';
import { Video } from './components/video/video.component';
import { Form } from './components/form/form.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { Spotify } from './components/spotify/spotify.component';
import { Editor } from './components/editor/editor.component';
import { Mainn } from './components/mainn/mainn.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductPageComponent } from './components/product-page/product-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/mainn', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'game',  component: Game, canActivate: [AuthGuard] },
  { path: 'video',  component: Video, canActivate: [AuthGuard] },
  { path: 'form',  component: Form, canActivate: [AuthGuard] },
  { path: 'spotify',  component: Spotify, canActivate: [AuthGuard] },
  { path: 'editor',  component: Editor, canActivate: [AuthGuard] },
  { path: 'mainn',  component: Mainn },
  { path: 'product'+'/'+':id', component: ProductPageComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}