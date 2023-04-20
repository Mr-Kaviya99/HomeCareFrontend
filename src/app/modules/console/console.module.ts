import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import {ShareModule} from "../share/share.module";
import { HomepageContextComponent } from './components/homepage-context/homepage-context.component';
import { HomepageMainSliderComponent } from './components/homepage-context/inner-items/homepage-main-slider/homepage-main-slider.component';
import {MatButtonModule} from "@angular/material/button";
import { HomepageHowItWorksComponent } from './components/homepage-context/inner-items/homepage-how-it-works/homepage-how-it-works.component';
import { HomepageReasonsToChooseComponent } from './components/homepage-context/inner-items/homepage-reasons-to-choose/homepage-reasons-to-choose.component';
import { HomepageReviewsComponent } from './components/homepage-context/inner-items/homepage-reviews/homepage-reviews.component';
import { HomepageServicesComponent } from './components/homepage-context/inner-items/homepage-services/homepage-services.component';
import { HomepageTradePersonGetStartedComponent } from './components/homepage-context/inner-items/homepage-trade-person-get-started/homepage-trade-person-get-started.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { AboutPageContextComponent } from './components/about-page-context/about-page-context.component';
import { ServicePageContextComponent } from './components/service-page-context/service-page-context.component';
import { FaqPageContextComponent } from './components/faq-page-context/faq-page-context.component';
import { ContactPageContextComponent } from './components/contact-page-context/contact-page-context.component';
import { ContactPageTopContentComponent } from './components/contact-page-context/inner-items/contact-page-top-content/contact-page-top-content.component';
import { ContactPageBottomContentComponent } from './components/contact-page-context/inner-items/contact-page-bottom-content/contact-page-bottom-content.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
    declarations: [
        ConsoleComponent,
        HomepageContextComponent,
        HomepageMainSliderComponent,
        HomepageHowItWorksComponent,
        HomepageReasonsToChooseComponent,
        HomepageReviewsComponent,
        HomepageServicesComponent,
        HomepageTradePersonGetStartedComponent,
        AboutPageContextComponent,
        ServicePageContextComponent,
        FaqPageContextComponent,
        ContactPageContextComponent,
        ContactPageTopContentComponent,
        ContactPageBottomContentComponent,
    ],
    imports: [
        CommonModule,
        ConsoleRoutingModule,
        ShareModule,
        MatButtonModule,
        CarouselModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        NgbModule,
        MatExpansionModule
    ]
})
export class ConsoleModule {

}
