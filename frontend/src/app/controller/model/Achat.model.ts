import {AchatItemDto} from './AchatItem.model';
import {ClientDto} from './Client.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

export class AchatDto  extends BaseDto{

    public id: number;
    public reference: string;
   public dateAchat: Date;
    public total: number;
    public totalPaye: number;
    public description: string;
    public dateAchatMax: string ;
    public dateAchatMin: string ;
    public totalMax: string ;
    public totalMin: string ;
    public totalPayeMax: string ;
    public totalPayeMin: string ;
    public client: ClientDto ;
     public achatItems: Array<AchatItemDto>;

}
