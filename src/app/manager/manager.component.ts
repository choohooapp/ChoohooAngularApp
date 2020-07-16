import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
    managerArray: any;
    page = 4;
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    ngOnInit(): void {
        this.managerArray = [
            {'userNo': '01', 'managerId': '001', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
            {'userNo': '02', 'managerId': '002', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
            {'userNo': '03', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
            {'userNo': '04', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
            {'userNo': '04', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'}
        ];
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    }

    getPageSymbol(current: number) {
        return ['1', '2', '3', '4', '5', '6', '7'][current - 1];
    }

}
