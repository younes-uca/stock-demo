import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AchatItemService} from 'src/app/controller/service/AchatItem.service';
import {AchatItemDto} from 'src/app/controller/model/AchatItem.model';
import {AchatItemCriteria} from 'src/app/controller/criteria/AchatItemCriteria.model';
import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatService} from 'src/app/controller/service/Achat.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
@Component({
  selector: 'app-achat-item-create-admin',
  templateUrl: './achat-item-create-admin.component.html'
})
export class AchatItemCreateAdminComponent extends AbstractCreateController<AchatItemDto, AchatItemCriteria, AchatItemService>  implements OnInit {



   private _validAchatItemProduit = true;
   private _validAchatItemPrixUnitaire = true;
   private _validAchatItemPrixVente = true;
   private _validAchatItemQuantite = true;
    private _validProduitReference = true;
    private _validAchatReference = true;

    constructor(private datePipe: DatePipe, private achatItemService: AchatItemService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private achatService: AchatService, private produitService: ProduitService
    ) {
        super(datePipe, achatItemService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.produit = new ProduitDto();
    this.produitService.findAll().subscribe((data) => this.produits = data);
    this.achat = new AchatDto();
    this.achatService.findAll().subscribe((data) => this.achats = data);
}




    public setValidation(value: boolean){
        this.validAchatItemProduit = value;
        this.validAchatItemPrixUnitaire = value;
        this.validAchatItemPrixVente = value;
        this.validAchatItemQuantite = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAchatItemProduit();
        this.validateAchatItemPrixUnitaire();
        this.validateAchatItemPrixVente();
        this.validateAchatItemQuantite();
    }

    public validateAchatItemProduit(){
        if (this.stringUtilService.isEmpty(this.item.produit)) {
        this.errorMessages.push('Produit non valide');
        this.validAchatItemProduit = false;
        } else {
            this.validAchatItemProduit = true;
        }
    }
    public validateAchatItemPrixUnitaire(){
        if (this.stringUtilService.isEmpty(this.item.prixUnitaire)) {
        this.errorMessages.push('Prix unitaire non valide');
        this.validAchatItemPrixUnitaire = false;
        } else {
            this.validAchatItemPrixUnitaire = true;
        }
    }
    public validateAchatItemPrixVente(){
        if (this.stringUtilService.isEmpty(this.item.prixVente)) {
        this.errorMessages.push('Prix vente non valide');
        this.validAchatItemPrixVente = false;
        } else {
            this.validAchatItemPrixVente = true;
        }
    }
    public validateAchatItemQuantite(){
        if (this.stringUtilService.isEmpty(this.item.quantite)) {
        this.errorMessages.push('Quantite non valide');
        this.validAchatItemQuantite = false;
        } else {
            this.validAchatItemQuantite = true;
        }
    }


    public async openCreateProduit(produit: string) {
    const isPermistted = await this.roleService.isPermitted('Produit', 'add');
    if(isPermistted) {
         this.produit = new ProduitDto();
         this.createProduitDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateAchat(achat: string) {
    const isPermistted = await this.roleService.isPermitted('Achat', 'add');
    if(isPermistted) {
         this.achat = new AchatDto();
         this.createAchatDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get produit(): ProduitDto {
        return this.produitService.item;
    }
    set produit(value: ProduitDto) {
        this.produitService.item = value;
    }
    get produits(): Array<ProduitDto> {
        return this.produitService.items;
    }
    set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
    }
    get createProduitDialog(): boolean {
       return this.produitService.createDialog;
    }
    set createProduitDialog(value: boolean) {
        this.produitService.createDialog= value;
    }
    get achat(): AchatDto {
        return this.achatService.item;
    }
    set achat(value: AchatDto) {
        this.achatService.item = value;
    }
    get achats(): Array<AchatDto> {
        return this.achatService.items;
    }
    set achats(value: Array<AchatDto>) {
        this.achatService.items = value;
    }
    get createAchatDialog(): boolean {
       return this.achatService.createDialog;
    }
    set createAchatDialog(value: boolean) {
        this.achatService.createDialog= value;
    }



    get validAchatItemProduit(): boolean {
        return this._validAchatItemProduit;
    }

    set validAchatItemProduit(value: boolean) {
         this._validAchatItemProduit = value;
    }
    get validAchatItemPrixUnitaire(): boolean {
        return this._validAchatItemPrixUnitaire;
    }

    set validAchatItemPrixUnitaire(value: boolean) {
         this._validAchatItemPrixUnitaire = value;
    }
    get validAchatItemPrixVente(): boolean {
        return this._validAchatItemPrixVente;
    }

    set validAchatItemPrixVente(value: boolean) {
         this._validAchatItemPrixVente = value;
    }
    get validAchatItemQuantite(): boolean {
        return this._validAchatItemQuantite;
    }

    set validAchatItemQuantite(value: boolean) {
         this._validAchatItemQuantite = value;
    }

    get validProduitReference(): boolean {
        return this._validProduitReference;
    }
    set validProduitReference(value: boolean) {
        this._validProduitReference = value;
    }
    get validAchatReference(): boolean {
        return this._validAchatReference;
    }
    set validAchatReference(value: boolean) {
        this._validAchatReference = value;
    }


}
