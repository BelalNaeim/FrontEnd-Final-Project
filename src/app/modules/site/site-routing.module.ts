import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us'
    },
    {
        path: 'about-us',
        component: PageAboutUsComponent
    },
    {
        path: 'contact-us',
        component: PageContactUsComponent
    },

    {
        path: 'terms',
        component: PageTermsComponent
    },
    {
        path: 'faq',
        component: PageFaqComponent
    },
    {
        path: 'components',
        component: PageComponentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
