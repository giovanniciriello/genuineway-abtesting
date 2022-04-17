import { Component, OnInit } from '@angular/core';
import { AbtestingService } from 'src/app/services/abtesting.service';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {

  constructor(
    public ab: AbtestingService
  ) { }

  ngOnInit(): void {
  }

}
