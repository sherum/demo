import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoryModule} from './story/story.module';
import {RouterModule, Routes, ROUTES} from '@angular/router';
import {StoryBoxComponent} from './story/containers/story-box/story-box.component';
import { PageNotFoundComponent } from './app-components/page-not-found/page-not-found.component';
import { AppNavComponent } from './app-components/app-nav/app-nav.component';
import { DeveloperComponent } from './app-components/developer/developer.component';
import { ProductsComponent } from './app-components/products/products.component';
import { AboutComponent } from './app-components/about/about.component';
import { HomeComponent } from './app-components/home/home.component';
import { LoginComponent } from './app-components/login/login.component';
import {HabitualDomainModule} from './habitualdomain/habitual-domain.module';
import {LeadPovModule} from './lead-pov/lead-pov.module';
import {LeadPovComponent} from './lead-pov/lead-pov/lead-pov.component';
import {HabitualDomainComponent} from './habitualdomain/habitual-domain/habitual-domain.component';
import { SelectedHighlightDirective } from './story/directive/selected-highlight.directive';
import {StoryShedComponent} from './story/containers/story-shed/story-shed.component';
import {SharedModule} from './story/shared/shared.module';
import { DevelopmentComponent } from './app-components/development/development.component';
import { TosComponent } from './app-components/tos/tos.component';
import { PrivacyComponent } from './app-components/privacy/privacy.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInteceptor} from './auth.inteceptor';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthFireService} from './auth-fire.service';




export const routes:Routes =[
  { path:'home', component:HomeComponent},
  { path:'products', component:ProductsComponent},
  { path:'developer', component:DeveloperComponent},
  { path:'login', component:LoginComponent},
  { path:'about', component:AboutComponent},
  { path:'story', component:StoryBoxComponent},
  { path:'lead', component:LeadPovComponent},
  { path:'domain', component:HabitualDomainComponent},
  { path:'domain', component:HabitualDomainComponent},
  { path:'development', component:DevelopmentComponent},
  { path:'tos', component:TosComponent},
  { path:'privacy', component:PrivacyComponent},



  { path:'', redirectTo:'home' , pathMatch:'full'},

  { path:'**', component:PageNotFoundComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AppNavComponent,
    DeveloperComponent,
    ProductsComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    SelectedHighlightDirective,
    DevelopmentComponent,
    TosComponent,
    PrivacyComponent,
    AppNavComponent


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    RouterModule.forRoot(routes,{enableTracing:false}),
   HabitualDomainModule,
    StoryModule,
    LeadPovModule,
    SharedModule,

    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [
    AuthFireService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInteceptor,multi:true}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
