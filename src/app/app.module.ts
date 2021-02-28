import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatChipsModule} from '@angular/material/chips';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { WelcomeComponent } from './components/common/welcome/welcome.component';
import { AboutComponent } from './components/common/about/about.component';
import { StrategyComponent } from './components/common/strategy/strategy.component';
import { WhoWeAreComponent } from './components/common/who-we-are/who-we-are.component';
import { CtaComponent } from './components/common/cta/cta.component';
import { SkillComponent } from './components/common/skill/skill.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { TeamComponent } from './components/common/team/team.component';
import { HowWeWorkComponent } from './components/common/how-we-work/how-we-work.component';
import { ServicesComponent } from './components/common/services/services.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { WorkComponent } from './components/common/work/work.component';
import { WhyWeDifferentComponent } from './components/common/why-we-different/why-we-different.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
// import { HomeTwoComponent } from './components/home-two/home-two.component';
// import { HomeFourComponent } from './components/home-four/home-four.component';
// import { HomeFiveComponent } from './components/home-five/home-five.component';
// import { ServicesTwoComponent } from './components/common/services-two/services-two.component';
// import { HomeSixComponent } from './components/home-six/home-six.component';
// import { HomeSevenComponent } from './components/home-seven/home-seven.component';
// import { HomeEightComponent } from './components/home-eight/home-eight.component';
// import { HomeNineComponent } from './components/home-nine/home-nine.component';
// import { HomeTenComponent } from './components/home-ten/home-ten.component';
// import { HomeElevenComponent } from './components/home-eleven/home-eleven.component';
// import { HomeTwelveComponent } from './components/home-twelve/home-twelve.component';
// import { HomeThirteenComponent } from './components/home-thirteen/home-thirteen.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { DemoSidebarComponent } from './components/common/demo-sidebar/demo-sidebar.component';
import { CategoryDetailsComponent } from './components/login/category-details.component';
import { PrivicypolicyComponent } from './components/privicypolicy/privicypolicy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/common/careers/careers.component';





@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        NavbarComponent,
        WelcomeComponent,
        AboutComponent,
        StrategyComponent,
        WhoWeAreComponent,
        CtaComponent,
        SkillComponent,
        FunfactsComponent,
        TeamComponent,
        HowWeWorkComponent,
        ServicesComponent,
        FooterComponent,
        SubscribeComponent,
        PartnerComponent,
        BlogComponent,
        FeedbackComponent,
        FaqComponent,
        PricingComponent,
        WorkComponent,
        WhyWeDifferentComponent,
        ContactComponent,
        HomeThreeComponent,
        BlogDetailsComponent,
        DemoSidebarComponent,
        CategoryDetailsComponent,
        PrivicypolicyComponent,
        ContactUsComponent,
        CareersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatChipsModule
    
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }