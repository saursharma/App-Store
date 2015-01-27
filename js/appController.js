var adminPanel = angular.module('adminPanel', ['ngMaterial'])


adminPanel.controller('adminCtrl', function($scope, $mdSidenav, $mdDialog) {
  $scope.title = 'Admin Panel';

  // Icons at http://getbootstrap.com/components/
  $scope.apps = [{
    name : 'Flash Light',
    description: "Use flash of your phone as torch. Super bright flash light. App also provide functionality to enable flash alert for all incoming calls." +
                 "Create amazing effect of strobe light with flickering flash. Don't have flash in your phone?Don't worry. We have amazing features with creates very bright light using phone's screen light. You can even produce color light.",
    icon: 'https://lh4.ggpht.com/QOLnhHWGgN4M_l2YrphuPfiahXlgwIoEGK4FUob_px9o_UGXbaWDIzQFyjT47Mh8nw=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.flashlight',
    category: 'Tools'
  }, {
    name : 'Daily News',
    description: 'Daily News is one of the best app to read all news at one place. This app collects data from different media sources and displays them at single place. Powered by very user friendly interface and touch controls, app offers viewers excellent platform to read all news in very short span of time.',
    icon: 'https://lh6.ggpht.com/h0EARfY5YjbW0lVPikKb8Ut2vLW5CKBqYfaseZxYysnbT6BViZa6h4_YRptw6sT1cVU=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.dailynewsapp',
    category: 'News'
  }, {
    name : 'Astrology',
    description: "Get daily horoscope prediction and check what your date of birth say about you with this awesome app. Save your sun sign and time when you want to receive your horoscope, the app will deliver you the horoscope as notification." +
                 "App offers 4-way horoscope prediction via Daily, career, finance and love categories.",
    icon: 'https://lh4.ggpht.com/mCcN7zBv0LNzWaqS40uNK_alK6SN-aorE6q97Y03IxXTSykDQKQUZ_oOgyGQkSpygXY=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.astrology',
    category: 'News'
  }, {
    name : 'Call Recorder',
    description: "App provide functionality to record, play and share conversations. We provide functionality to " +
                 "# Record all calls automatically." +
                 "# Enable widget to record selected calls.",
    icon: 'https://lh3.ggpht.com/N7mnGRiJV4f5cCKLN4TOvOuH3EgYdoNCwBNcJbsjcyuZJWucVZGWeEw63Dkzw-KNMS8=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.callrecorder',
    category: 'Tools'
  }, {
    name : 'nBrowser - News Browser',
    description: "World's first and only news browser. Browse 200+ newspapers across more than 10 languages" +
                 "and many more.",
    icon: 'https://lh5.ggpht.com/ZTmGsQrWOmk2_lNikexn528-Re4cnwibhi765BOSnPFqq_-mehKtN_mB-ls5DbHNJ50=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.nBrowser',
    category: 'News'
  }, {
    name : 'Volume Booster',
    description: "With Volume booster, raise your phone's volume to maximum easily. This app helps you in avoiding hassles of hunting phone's settings. It works for both Speakers and EarPhones.",
    icon: 'https://lh3.ggpht.com/Qhd7Tb02kZCuAvbYP9-_aVMWQ23L6ldKwK9C1AcKAIloXD3vN7qxu0yQ6tNbEUblL7c=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.volumebooster',
    category: 'Tools'
  }, {
    name : 'mp3 Box',
    description: "Music is an outburst of the soul. ~Frederick Delius. mp3 Box is best mp3 player in the market. It picks songs from your phone and automatically categorize them on the basis of Artists, Albums etc." +
                 "mp3Box offers 4 different themes to user:" +
                 "#Blue #Green #Lemon #Yellow",
    icon: 'https://lh6.ggpht.com/VnT2CFO5DC1vSNlq9X6dLeQq2YzffpxGCKQYr49JSX5hp89ngQvlMCBbKBWGqG5nZQ=w300-rw',
    url: 'https://play.google.com/store/apps/details?id=com.imaniac.mp3box',
    category: 'Entertainment'
  }];

  $scope.closeDialog = function() {
    // Easily hides most recent dialog shown...
    // no specific instance reference is needed.
    $mdDialog.hide();
  };

  // Show dialog
  $scope.showDialog = function(ev, app) {
    $mdDialog.show({
      //templateUrl: 'dialog.tmpl.html',
      template: '<md-dialog style="position: fixed;left: 10%;top: 10%;" class="app-dialog">' +
        '<md-content style="height:25%" class="app-dialog-header"> <div layout="row"><div><img src="{{app.icon}}" style="width: 10em;"> </div>'+
        '<div flex> <div layout="column"><div class="app-title">{{app.name}}</div> <div class="app-category"> {{app.category}}</div> </div></div>' +
        '<div> <md-button on-click="closeDialog();"> <md-icon icon="images/ic_close_white_48dp.png"></md-icon> </md-button> </div></div></md-content>' +
        '<md-content style="height:70%"><md-card style="height:80%"> <div class="app-title">Description </div><hr/><div style="font-size:36px;">{{app.description}}</div></md-card> ' + 
        '<md-button ng-href="{{app.url}}" class="md-raised md-primary app-download"> Install App </md-button>' +        
        '</md-content> </md-dialog>', 
      targetEvent: ev,
      controller: 'DialogController',
      locals: {app: app}
      //controller: ['$scope', 'app', function($scope, app){$scope.app = app;}]
    });
  };
});

adminPanel.controller('DialogController', function($scope, $mdDialog, app) {
  $scope.app = app;
  $scope.closeDialog = function() {
    // Easily hides most recent dialog shown...
    // no specific instance reference is needed.
    $mdDialog.hide();
  };
});
