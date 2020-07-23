import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
    managerArray: any;
    editContent: any;
    viewMoreContent: any;
    page = 4;
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService, private apiService: ApiService) {
    }

    ngOnInit(): void {

        this.apiService.getusers().subscribe(data => {
            for (let x = 0; x < data['users'].length; x++) {
                console.log(data['users'][x]);
                if (data['users'][x]['AdminStatus'] === 'Admin Manager') {
                    this.managerArray = [];
                    this.managerArray.push(data['users'][x]);
                }
            }

        });
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, Object.assign({}, {class: 'gray modal-lg'}));
    }

    getPageSymbol(current: number) {
        return ['1', '2', '3', '4', '5', '6', '7'][current - 1];
    }

    openEdit(template: TemplateRef<any>, item: any) {
        this.modalRef = this.modalService.show(template, Object.assign({}, {class: 'gray modal-md'}));
        this.editContent = item;
    }

    openViewMore(template: TemplateRef<any>, item: any) {
        this.modalRef = this.modalService.show(template, Object.assign({}, {class: 'gray modal-md'}));
        this.viewMoreContent = item;
    }
}
