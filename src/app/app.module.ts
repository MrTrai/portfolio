import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { NgInviewModule } from 'angular-inport';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {BoxInfoComponent} from './common-component/box-info/box-info.component';
import {AppRoutingModule} from './/app-routing.module';
import {TimeLineComponent} from './time-line/time-line.component';
import {ResumeComponent} from './resume/resume.component';
import {FrontEndSkillComponent} from './front-end-skill/front-end-skill.component';
import {BackEndSkillComponent} from './back-end-skill/back-end-skill.component';
import {SkillChartComponent} from './skill-chart/skill-chart.component';
import {DbSkillComponent} from './db-skill/db-skill.component';
import {IntroComponent} from './common-component/intro/intro.component';
import { TyperComponent } from './common-component/typer/typer.component';
import { SkillDemoComponent } from './common-component/skill-demo/skill-demo.component';
import { ImgHightlightDirective } from './directives/img-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    BoxInfoComponent,
    TimeLineComponent,
    ResumeComponent,
    FrontEndSkillComponent,
    BackEndSkillComponent,
    SkillChartComponent,
    DbSkillComponent,
    IntroComponent,
    TyperComponent,
    SkillDemoComponent,
    ImgHightlightDirective
  ],
  imports: [
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 30,
      outerStrokeWidth: 3,
      innerStrokeWidth: 1,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    PdfViewerModule,
    NgInviewModule,
    RoundProgressModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
