var benv = require('benv');
benv.setup(function () {
  console.log('have window?', typeof window !== 'undefined');
  console.log('have document?', typeof document !== 'undefined');
  require('./node_modules/angular/angular.js');
  console.log('loaded angular', window.angular.version);

  var html = '<h1 ng-controller="helloController">Hello {{ title }}</h1>';
  document.body.innerHTML = html;
  console.log('document.body', document.body.innerHTML);

  (function setupApp(angular) {
    angular.module('myApp', [])
      .controller('helloController', ['$scope', '$timeout', function ($scope, $timeout) {
        $timeout(function setTitle() {
          $scope.title = 'from Angular ' + angular.version.full + ' running in Web Worker!';
          console.log('changed $scope title to "hello from Angular in web worker"');
          $timeout(function () {
            console.log('after digest cycle body html is');
            console.log(document.body.innerHTML);
            // communicate back to the page
            self.postMessage(document.body.innerHTML);
          });
        }, 1000);
      }]);
  }(window.angular));

  (function startApp(angular) {
    angular.bootstrap(document.body, ['myApp']);
  }(window.angular));


});
