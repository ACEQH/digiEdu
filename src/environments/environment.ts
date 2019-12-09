// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyCgieYi21mhCBlB_e4gz6PUDkJtvLZESV8",
    authDomain: "digitaleducation-9563d.firebaseapp.com",
    databaseURL: "https://digitaleducation-9563d.firebaseio.com",
    projectId: "digitaleducation-9563d",
    storageBucket: "digitaleducation-9563d.appspot.com",
    messagingSenderId: "741053129053",
    appId: "1:741053129053:web:b75e5a5f675c82663448b4",
    measurementId: "G-VJ135Q7ZBB"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
