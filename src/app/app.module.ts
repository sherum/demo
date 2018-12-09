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



export const routes:Routes =[
  { path:'home', component:HomeComponent},
  { path:'products', component:ProductsComponent},
  { path:'developer', component:DeveloperComponent},
  { path:'login', component:LoginComponent},
  { path:'about', component:AboutComponent},
  { path:'story', component:StoryBoxComponent},
  { path:'lead', component:LeadPovComponent},
  { path:'domain', component:HabitualDomainComponent},
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


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{enableTracing:true}),
   HabitualDomainModule,
    StoryModule,
    LeadPovModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
