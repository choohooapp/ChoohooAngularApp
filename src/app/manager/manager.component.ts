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

        })
        // this.managerArray = [
        //     {'userNo': '01', 'managerId': '001', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
        //     {'userNo': '02', 'managerId': '002', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
        //     {'userNo': '03', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
        //     {'userNo': '04', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'},
        //     {'userNo': '04', 'managerId': '003', 'name': 'Cape town', 'surname': 'dummyData Cape town', 'role': 'Longer Name','email':'CapeTownCity@mail.com','dateTimeCreated':'29/10/19 14:00','dateTimeLastActive':'29/10/19 14:00','countryCity':'Longer Name 2 lines'}
        // ];
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, Object.assign({}, {class: 'gray modal-lg'}));
    }

    getPageSymbol(current: number) {
        return ['1', '2', '3', '4', '5', '6', '7'][current - 1];
    }

}
