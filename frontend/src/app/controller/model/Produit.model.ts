import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

export class ProduitDto  extends BaseDto{

    public id: number;
    public reference: string;
    public libelle: string;
    public barcode: string;
    public discription: string;
    public prixAchatMoyen: number;
    public quantite: number;
    public seuilAlert: number;
    public prixAchatMoyenMax: string ;
    public prixAchatMoyenMin: string ;
    public quantiteMax: string ;
    public quantiteMin: string ;
    public seuilAlertMax: string ;
    public seuilAlertMin: string ;

}
