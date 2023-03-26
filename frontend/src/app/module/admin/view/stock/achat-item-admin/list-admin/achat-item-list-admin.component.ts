import {Component, OnInit} from '@angular/core';
import {AchatItemService} from 'src/app/controller/service/AchatItem.service';
import {AchatItemDto} from 'src/app/controller/model/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/AchatItemCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { ProduitService } from 'src/app/controller/service/Produit.service';
import { AchatService } from 'src/app/controller/service/Achat.service';

import {AchatDto} from 'src/app/controller/model/Achat.model';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-achat-item-list-admin',
  templateUrl: './achat-item-list-admin.component.html'
})
export class AchatItemListAdminComponent extends AbstractListController<AchatItemDto, AchatItemCriteria, AchatItemService>  implements OnInit {

    fileName = 'AchatItem';

    produits :Array<ProduitDto>;
    achats :Array<AchatDto>;
  
    constructor(datePipe: DatePipe, achatItemService: AchatItemService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private produitService: ProduitService, private achatService: AchatService) {
        super(datePipe, achatItemService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProduit();
      this.loadAchat();
    }

    public async loadAchatItems(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AchatItem', 'list');
        isPermistted ? this.service.findAll().subscribe(achatItems => this.items = achatItems,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'produit?.reference', header: 'Produit'},
            {field: 'prixUnitaire', header: 'Prix unitaire'},
            {field: 'prixVente', header: 'Prix vente'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'quantiteAvoir', header: 'Quantite avoir'},
            {field: 'remise', header: 'Remise'},
            {field: 'achat?.reference', header: 'Achat'},
        ];
    }


    public async loadProduit(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AchatItem', 'list');
        isPermistted ? this.produitService.findAll().subscribe(produits => this.produits = produits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadAchat(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AchatItem', 'list');
        isPermistted ? this.achatService.findAll().subscribe(achats => this.achats = achats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: AchatItemDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Produit': e.produit?.reference ,
                 'Prix unitaire': e.prixUnitaire ,
                 'Prix vente': e.prixVente ,
                 'Quantite': e.quantite ,
                 'Quantite avoir': e.quantiteAvoir ,
                 'Remise': e.remise ,
                'Achat': e.achat?.reference ,
            }
        });

        this.criteriaData = [{
        //'Produit': this.criteria.produit?.reference ? this.criteria.produit?.reference : environment.emptyForExport ,
            'Prix unitaire Min': this.criteria.prixUnitaireMin ? this.criteria.prixUnitaireMin : environment.emptyForExport ,
            'Prix unitaire Max': this.criteria.prixUnitaireMax ? this.criteria.prixUnitaireMax : environment.emptyForExport ,
            'Prix vente Min': this.criteria.prixVenteMin ? this.criteria.prixVenteMin : environment.emptyForExport ,
            'Prix vente Max': this.criteria.prixVenteMax ? this.criteria.prixVenteMax : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Quantite avoir Min': this.criteria.quantiteAvoirMin ? this.criteria.quantiteAvoirMin : environment.emptyForExport ,
            'Quantite avoir Max': this.criteria.quantiteAvoirMax ? this.criteria.quantiteAvoirMax : environment.emptyForExport ,
            'Remise Min': this.criteria.remiseMin ? this.criteria.remiseMin : environment.emptyForExport ,
            'Remise Max': this.criteria.remiseMax ? this.criteria.remiseMax : environment.emptyForExport ,
        //'Achat': this.criteria.achat?.reference ? this.criteria.achat?.reference : environment.emptyForExport ,
        }];
      }
}
