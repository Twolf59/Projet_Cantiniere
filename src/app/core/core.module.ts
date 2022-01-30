import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftsidebarComponent} from './components/leftsidebar/leftsidebar.component';
import {ExpansionBarComponent} from './components/expansion-bar/expansion-bar.component';
import {RecapTableComponent} from './components/recap-table/recap-table.component';
import {PublicRoutingModule} from '../public/public-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CategoriesComponent } from './components/categories/categories.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        LeftsidebarComponent,
        CategoriesComponent,
        ExpansionBarComponent,
        RecapTableComponent
    ],
    exports: [
        LeftsidebarComponent,
        CategoriesComponent,
        ExpansionBarComponent,
        RecapTableComponent
    ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    NgbModule,
  ]
})
export class CoreModule { }
