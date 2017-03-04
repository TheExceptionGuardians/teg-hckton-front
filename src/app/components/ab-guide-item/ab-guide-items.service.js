'use strict';
(function() {
  /**
     * @ngdoc service
     * @name app.service:guideItems
     *
     * @description
     * Service for the guide items
     */
  angular
      .module('app')
      .service('guideItems', guideItems);

  /** @ngInject */
  function guideItems(toastr) {
    var data = [
      {
        'avatarSrc': 'assets/images/todd-avatar.jpg',
        'avatarUrl' : 'https://toddmotto.com/',
        'author': 'Todd Motto',
        'position': 'Angular Consultant',
        'header': 'assets/images/angular-style-todd-header.jpg',
        'title':'AngularJS Styleguide for teams',
        'content':'The titles of Washed Outs breakthrough song and the first single from Paracosm share the two most important words in Ernest Greenes musical language: feel it. Its a simple request, as well...',
        'info':'https://toddmotto.com/opinionated-angular-js-styleguide-for-teams/',
        'like':false
      },{
        'avatarSrc': 'assets/images/john-avatar.png',
        'avatarUrl' : 'https://johnpapa.net/',
        'author': 'John Papa',
        'position': 'Angular Consultant',
        'header': 'assets/images/angular-patterns-john-header.png',
        'title':'10 AngularJS Patterns',
        'content':' Learn from John Papas talk "10 AngularJS Patterns from Code on the Beach 2014 at One Ocean Resort & Spa, Atlantic Beach, Florida. Sunday, August 10, 2014',
        'info':'https://www.youtube.com/watch?v=UlvCbnKAH3g',
        'like':false
      },{
        'avatarSrc': 'assets/images/minko-avatar.jpg',
        'avatarUrl' : 'http://blog.mgechev.com',
        'author': 'Minko Gechev',
        'position': 'Angular Consultant',
        'header': 'assets/images/angular-patterns-minko-header.jpg',
        'title':'10 AngularJS Patterns',
        'content':' The goal of this style guide is to present a set of best practices and style guidelines for one AngularJS application.',
        'info':'https://github.com/toddmotto/angular-styleguide#comment-standards',
        'like':false
      }, {
        'avatarSrc': 'assets/images/minko-avatar.jpg',
        'avatarUrl' : 'http://blog.mgechev.com',
        'author': 'Minko Gechev',
        'position': 'Angular Consultant',
        'header': 'assets/images/structure-minko-header.png',
        'title':'Directory structure',
        'content':'Since a large AngularJS application has many components its best to structure it in a directory hierarchy. There are two main approaches',
        'info':'https://github.com/mgechev/angularjs-style-guide#directory-structure',
        'like':false
      },{
        'avatarSrc': 'assets/images/andy-avatar.png',
        'avatarUrl' : 'http://andyshora.com/',
        'author': 'Andy Shora',
        'position': 'Angular Consultant',
        'header': 'assets/images/promises-header.png',
        'title':'Promises in AngularJS',
        'content':' Promises in AngularJS, Explained as a Cartoon',
        'info':'http://andyshora.com/promises-angularjs-explained-as-cartoon.html',
        'like':false
      },{
        'avatarSrc': 'assets/images/code-school-avatar.png',
        'avatarUrl' : 'https://www.codeschool.com',
        'author': 'Campus codeschool',
        'position': 'Code school platform',
        'header': 'assets/images/angular-patterns-codeschool-header.jpg',
        'title':'10 AngularJS Patterns',
        'content':' The goal of this style guide is to present a set of best practices and style guidelines for one AngularJS application.',
        'info':'http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro',
        'like':false
      }
    ];

    this.getItems = getItems;

    /**
     * @ngdoc function
     * @name app.service#getItems
     * @methodOf  app.service:guideItems
     * @description
     * Get all items defined above
     * @returns {object} guide items
     */
    function getItems() {
      toastr.info('Guide Items Loaded','Info');
      return data;
    }
  }

})();