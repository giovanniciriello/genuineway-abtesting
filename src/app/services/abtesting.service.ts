import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AbtestingService {

  // true => option a
  // false => option b

  public el: {
    firstImpactCopy?: boolean,
    productPageLayout?: boolean,
    productFeaturesStyle?: boolean,
    emailInputCopy?: boolean,
    feedbackRequestStyle?: boolean,
  } = {}

  constructor() {
    this.el.firstImpactCopy = this.getRandomBoolean()
    this.el.productPageLayout = this.getRandomBoolean()
    this.el.productFeaturesStyle = this.getRandomBoolean()
    this.el.emailInputCopy = this.getRandomBoolean()
    this.el.feedbackRequestStyle = this.getRandomBoolean()

    // this.el.firstImpactCop = true
    this.el.productPageLayout = false
    // this.el.productFeaturesStyle = true
    // this.el.emailInputCopy = false
    // this.el.feedbackRequestStyle = false
  }

  private getRandomBoolean() {
    return Math.random() >= 0.5;
  }
}
