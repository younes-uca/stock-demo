import {Component, OnInit} from '@angular/core';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitCriteria} from 'src/app/controller/criteria/ProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-produit-list-admin',
  templateUrl: './produit-list-admin.component.html'
})
export class ProduitListAdminComponent extends AbstractListController<ProduitDto, ProduitCriteria, ProduitService>  implements OnInit {

    fileName = 'Produit';

  
    constructor(datePipe: DatePipe, produitService: ProduitService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, produitService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadProduits(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Produit', 'list');
        isPermistted ? this.service.findAll().subscribe(produits => this.items = produits,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'barcode', header: 'Barcode'},
            {field: 'prixAchatMoyen', header: 'Prix achat moyen'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'seuilAlert', header: 'Seuil alert'},
        ];
    }



	public initDuplicate(res: ProduitDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
                 'Barcode': e.barcode ,
                 'Discription': e.discription ,
                 'Prix achat moyen': e.prixAchatMoyen ,
                 'Quantite': e.quantite ,
                 'Seuil alert': e.seuilAlert ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Barcode': this.criteria.barcode ? this.criteria.barcode : environment.emptyForExport ,
            'Discription': this.criteria.discription ? this.criteria.discription : environment.emptyForExport ,
            'Prix achat moyen Min': this.criteria.prixAchatMoyenMin ? this.criteria.prixAchatMoyenMin : environment.emptyForExport ,
            'Prix achat moyen Max': this.criteria.prixAchatMoyenMax ? this.criteria.prixAchatMoyenMax : environment.emptyForExport ,
            'Quantite Min': this.criteria.quantiteMin ? this.criteria.quantiteMin : environment.emptyForExport ,
            'Quantite Max': this.criteria.quantiteMax ? this.criteria.quantiteMax : environment.emptyForExport ,
            'Seuil alert Min': this.criteria.seuilAlertMin ? this.criteria.seuilAlertMin : environment.emptyForExport ,
            'Seuil alert Max': this.criteria.seuilAlertMax ? this.criteria.seuilAlertMax : environment.emptyForExport ,
        }];
      }
}
