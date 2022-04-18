import { Component, OnInit } from '@angular/core';
import { AbtestingService } from 'src/app/services/abtesting.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackSent = false;

  constructor(
    public ab: AbtestingService
  ) { }

  ngOnInit(): void {
  }

  sendFeedback() {
    this.feedbackSent = true;
  }

}
