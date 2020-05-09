import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Districts } from '../districts';
import { SyncService } from '../sync.service';
import { Statuses } from '../status';

@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.css']
})
export class SubDashboardComponent implements OnInit {
  cases: any;
  districtID: any;
  district: any;
  statuses: any;

  constructor(private route: ActivatedRoute, private syncService: SyncService) {
    this.districtID = this.route.snapshot.paramMap.get('id');
    this.statuses = Statuses;
  }

  ngOnInit(): void {
    this.district = Districts[this.districtID];
    this.syncService.getCasesByDistrict(this.districtID).subscribe(data => {
      this.cases = data;
      console.log(data)
    });
  }

}
