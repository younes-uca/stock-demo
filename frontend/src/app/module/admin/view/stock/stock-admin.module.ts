import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { AchatCreateAdminComponent } from './achat-admin/create-admin/achat-create-admin.component';
import { AchatEditAdminComponent } from './achat-admin/edit-admin/achat-edit-admin.component';
import { AchatViewAdminComponent } from './achat-admin/view-admin/achat-view-admin.component';
import { AchatListAdminComponent } from './achat-admin/list-admin/achat-list-admin.component';
import { AchatItemCreateAdminComponent } from './achat-item-admin/create-admin/achat-item-create-admin.component';
import { AchatItemEditAdminComponent } from './achat-item-admin/edit-admin/achat-item-edit-admin.component';
import { AchatItemViewAdminComponent } from './achat-item-admin/view-admin/achat-item-view-admin.component';
import { AchatItemListAdminComponent } from './achat-item-admin/list-admin/achat-item-list-admin.component';
import { ClientCreateAdminComponent } from './client-admin/create-admin/client-create-admin.component';
import { ClientEditAdminComponent } from './client-admin/edit-admin/client-edit-admin.component';
import { ClientViewAdminComponent } from './client-admin/view-admin/client-view-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { ProduitCreateAdminComponent } from './produit-admin/create-admin/produit-create-admin.component';
import { ProduitEditAdminComponent } from './produit-admin/edit-admin/produit-edit-admin.component';
import { ProduitViewAdminComponent } from './produit-admin/view-admin/produit-view-admin.component';
import { ProduitListAdminComponent } from './produit-admin/list-admin/produit-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    AchatCreateAdminComponent,
    AchatListAdminComponent,
    AchatViewAdminComponent,
    AchatEditAdminComponent,
    AchatItemCreateAdminComponent,
    AchatItemListAdminComponent,
    AchatItemViewAdminComponent,
    AchatItemEditAdminComponent,
    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    ProduitCreateAdminComponent,
    ProduitListAdminComponent,
    ProduitViewAdminComponent,
    ProduitEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  AchatCreateAdminComponent,
  AchatListAdminComponent,
  AchatViewAdminComponent,
  AchatEditAdminComponent,
  AchatItemCreateAdminComponent,
  AchatItemListAdminComponent,
  AchatItemViewAdminComponent,
  AchatItemEditAdminComponent,
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  ProduitCreateAdminComponent,
  ProduitListAdminComponent,
  ProduitViewAdminComponent,
  ProduitEditAdminComponent,
  ],
  entryComponents: [],
})
export class StockAdminModule { }
