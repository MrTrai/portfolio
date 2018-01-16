import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BoxInfoComponent} from './common-component/box-info/box-info.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio/change', component: BoxInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
