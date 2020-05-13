import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRoutingModule } from './promotion-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MainComponent } from './components/main/main.component';
import { FlyerComponent } from './components/flyer/flyer.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RewardComponent } from './components/reward/reward.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { CampaignOrderService } from '../../services/campaignorder.service';
import { ChartistModule } from 'ng-chartist';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { MemberModal } from './modals/member/member.component';
import { TeamModal } from './modals/team/team.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [IndexComponent, MainComponent, RewardComponent, FlyerComponent, MemberModal, TeamModal],
  imports: [
    CommonModule, 
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    MatTreeModule,
    MatIconModule,
    FontAwesomeModule,
    ChartistModule,
    QRCodeModule,
    ModalModule,
    MatDialogModule,
    MatExpansionModule,
    PromotionRoutingModule
  ],
  providers: [
    CampaignOrderService
  ]
})
export class PromotionModule { }
