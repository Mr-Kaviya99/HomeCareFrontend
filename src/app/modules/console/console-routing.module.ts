import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleComponent} from './console.component';
import {HomepageContextComponent} from "./components/homepage-context/homepage-context.component";
import {AboutPageContextComponent} from "./components/about-page-context/about-page-context.component";
import {ServicePageContextComponent} from "./components/service-page-context/service-page-context.component";
import {FaqPageContextComponent} from "./components/faq-page-context/faq-page-context.component";
import {ContactPageContextComponent} from "./components/contact-page-context/contact-page-context.component";


const routes: Routes = [
  {
    path: '', component: ConsoleComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: HomepageContextComponent},
      {path: 'about', component: AboutPageContextComponent},
      {path: 'service', component: ServicePageContextComponent},
      {path: 'faq', component: FaqPageContextComponent},
      {path: 'contact', component: ContactPageContextComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {
}
