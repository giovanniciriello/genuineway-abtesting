import { Component } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genuine';

  constructor(remoteConfig: AngularFireRemoteConfig) {
    remoteConfig.booleans['test'].subscribe(test => {
      console.log(test)
    });
  }
}
