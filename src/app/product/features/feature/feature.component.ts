import { Component, Input, OnInit } from '@angular/core';
import { AbtestingService } from 'src/app/services/abtesting.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature: any;
  @Input() withTitle = true;
  constructor(
    public ab: AbtestingService
  ) { }

  ngOnInit(): void {
  }

}
