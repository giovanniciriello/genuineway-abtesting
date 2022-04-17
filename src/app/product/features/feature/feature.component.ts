import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature: any;
  @Input() withTitle = true;
  constructor() { }

  ngOnInit(): void {
  }

}
