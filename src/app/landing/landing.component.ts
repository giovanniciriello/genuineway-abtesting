import { Component, OnInit } from '@angular/core';
import { AbtestingService } from '../services/abtesting.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public ab: AbtestingService
  ) { }

  ngOnInit(): void {
  }

}
