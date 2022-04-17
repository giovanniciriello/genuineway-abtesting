import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AbtestingService {

  // true => option a
  // false => option b

  public el = {
    firstImpactCopy: false,
    productPageLayout: false,
    productFeaturesStyle: true,
    emailInputCopy: true,
    feedbackRequestStyle: true,
  }

  constructor() { }
}
