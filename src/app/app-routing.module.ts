import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
// import { HomeFourComponent } from './components/home-four/home-four.component';
// import { HomeFiveComponent } from './components/home-five/home-five.component';
// import { HomeSixComponent } from './components/home-six/home-six.component';
// import { HomeSevenComponent } from './components/home-seven/home-seven.component';
// import { HomeEightComponent } from './components/home-eight/home-eight.component';
// import { HomeNineComponent } from './components/home-nine/home-nine.component';
// import { HomeTenComponent } from './components/home-ten/home-ten.component';
// import { HomeElevenComponent } from './components/home-eleven/home-eleven.component';
// import { HomeTwelveComponent } from './components/home-twelve/home-twelve.component';
// import { HomeThirteenComponent } from './components/home-thirteen/home-thirteen.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CategoryDetailsComponent } from './components/login/category-details.component';
import { PrivicypolicyComponent } from './components/privicypolicy/privicypolicy.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/common/careers/careers.component';
import { BlogComponent } from './components/common/blog/blog.component';

const routes: Routes = [
    {path: '', component: HomeThreeComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'categoty-details', component: CategoryDetailsComponent},
    {path: 'privcay-policy', component: PrivicypolicyComponent},
    {path: 'faq', component: FaqComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'blogs',component:BlogComponent},
    {path:'careers',component:CareersComponent},
    // Here add new pages component

    {path: '**', component: HomeThreeComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }