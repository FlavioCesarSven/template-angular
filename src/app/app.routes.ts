import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemsComponent } from './pages/items/items.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemsComponent},
    { path: 'search/:termino', component: SearchComponent},

    { path: '**',  pathMatch: 'full' , redirectTo: 'home'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
