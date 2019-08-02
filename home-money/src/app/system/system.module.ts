import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared2/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared2/components/header/header.component';
import { DropdownDirective } from './shared2/directives/dropdown.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { BillService } from './shared2/services/bill.service';
import { MomentPipe } from './shared2/pipes/moment.pipe';

@NgModule ({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ],
    declarations: [
        BillPageComponent,
        HistoryPageComponent, 
        PlanningPageComponent, 
        RecordsPageComponent,
        SystemComponent,
        SidebarComponent,
        HeaderComponent,
        DropdownDirective,
        BillCardComponent,
        CurrencyCardComponent,
        MomentPipe
    ],
    providers: [BillService]
})

export class SystemModule {}