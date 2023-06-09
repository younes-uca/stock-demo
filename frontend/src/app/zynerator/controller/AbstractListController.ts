import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

import {environment} from 'src/environments/environment';

import {AuthService} from 'src/app/zynerator/security/Auth.service';
import {ExportService} from 'src/app/zynerator/util/Export.service';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


@Injectable()
export class AbstractListController<DTO extends BaseDto, CRITERIA extends BaseCriteria, SERVICE extends AbstractService<DTO, CRITERIA>> {

    protected findByCriteriaShow = false;
    protected cols: any[] = [];
    protected excelPdfButons: MenuItem[];
    protected exportData: any[] = [];
    protected criteriaData: any[] = [];
    protected fileName: string;
    protected _totalRecords = 0;


    constructor(protected datePipe: DatePipe, protected service: SERVICE, protected messageService: MessageService,
                protected confirmationService: ConfirmationService, protected roleService: RoleService,
                protected router: Router, protected authService: AuthService, protected exportService: ExportService) {
    }

    init(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
    }

    public findPaginatedByCriteria() {
        this.service.findPaginatedByCriteria(this.criteria).subscribe(paginatedItems => {
            this.items = paginatedItems.list;
            this.totalRecords = paginatedItems.dataSize;
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }

    public async edit(dto: DTO) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.editDialog = true;
        });

    }

    public async view(dto: DTO) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = this.service.constrcutDto();
        this.createDialog = true;
        this.service.initStepper();
    }

    public async deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ces éléments ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultiple().subscribe(() => {

                        this.items = this.items.filter(item => !this.selections.includes(item));
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Les éléments sélectionnés ont été supprimés',
                            life: 3000
                        });

                }, error => console.log(error));
            }
        });
    }


    public isSelectionDisabled(): boolean {
        return this.selections == null || this.selections.length == 0
    }


    public async delete(dto: DTO) {

        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.delete(dto).subscribe(status => {
                    if (status > 0) {
                        const position = this.items.indexOf(dto);
                        position > -1 ? this.items.splice(position, 1) : false;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Element Supprimé',
                            life: 3000
                        });
                    }

                }, error => console.log(error))
            }
        });

    }

    public async duplicate(dto: DTO) {
        this.service.findByIdWithAssociatedList(dto).subscribe(
            res => {
                this.initDuplicate(res);
                this.item = res;
                this.item.id = null;
                this.createDialog = true;
            });
    }

    public initDuplicate(dto: DTO) {
    }

    // TODO : check if correct
    public initExport(): void {
        this.excelPdfButons = [
            {
                label: 'CSV', icon: 'pi pi-file', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'XLS', icon: 'pi pi-file-excel', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'PDF', icon: 'pi pi-file-pdf', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);
                }
            }
        ];
    }

    public showSearch(): void{
        this.findByCriteriaShow = !this.findByCriteriaShow;
    }
    public prepareColumnExport() {
    }

    get items(): Array<DTO> {
        return this.service.items;
    }

    set items(value: Array<DTO>) {
        this.service.items = value;
    }

    get selections(): Array<DTO> {
        return this.service.selections;
    }

    set selections(value: Array<DTO>) {
        this.service.selections = value;
    }

    get item(): DTO {
        return this.service.item;
    }

    set item(value: DTO) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): CRITERIA {
        return this.service.criteria;
    }

    set criteria(value: CRITERIA) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }


    get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(value: number) {
        this._totalRecords = value
    }
}