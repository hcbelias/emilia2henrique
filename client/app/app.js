'use strict';

angular.module('casamentoApp', ['casamentoApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router']).config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map

'use strict';

angular.module('casamentoApp.util', []);
//# sourceMappingURL=util.module.js.map

"use strict";

(function (angular, undefined) {
	angular.module("casamentoApp.constants", []).constant("appConfig", {
		"userRoles": ["guest", "user", "admin"]
	});
})(angular);
//# sourceMappingURL=app.constant.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MainController = function () {
    function MainController($window) {
      _classCallCheck(this, MainController);

      this.window = $window;
      this.contact = {};
    }

    _createClass(MainController, [{
      key: '$onInit',
      value: function $onInit() {}
    }]);

    return MainController;
  }();

  angular.module('casamentoApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
//# sourceMappingURL=main.controller.js.map

'use strict';

angular.module('casamentoApp').config(function ($stateProvider) {
  $stateProvider.state('main', {
    url: '/',
    template: '<main></main>'
  });
});
//# sourceMappingURL=main.js.map

'use strict';

angular.module('casamentoApp').directive('peopleCard', function () {
  return {
    templateUrl: 'app/people-card/people-card.html',
    restrict: 'E',
    scope: {
      name: '@',
      link: '@'
    }
  };
});
//# sourceMappingURL=people-card.directive.js.map

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var PeopleController = function PeopleController() {
    _classCallCheck(this, PeopleController);
  };

  angular.module('casamentoApp').component('people', {
    templateUrl: 'app/people/people.html',
    controller: PeopleController
  });
})();
//# sourceMappingURL=people.controller.js.map

'use strict';

angular.module('casamentoApp').config(function ($stateProvider) {
  $stateProvider.state('people', {
    url: '/',
    template: '<people></people>'
  });
});
//# sourceMappingURL=people.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var PlaceController = function () {
    function PlaceController() {
      _classCallCheck(this, PlaceController);
    }

    _createClass(PlaceController, [{
      key: 'openLink',
      value: function openLink(link) {
        window.open(link, '_blank');
      }
    }]);

    return PlaceController;
  }();

  angular.module('casamentoApp').component('place', {
    templateUrl: 'app/place/place.html',
    controller: PlaceController
  });
})();
//# sourceMappingURL=place.controller.js.map

'use strict';

angular.module('casamentoApp').config(function ($stateProvider) {
  $stateProvider.state('place', {
    url: '/',
    template: '<place></place>'
  });
});
//# sourceMappingURL=place.js.map

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var QuestionsController = function QuestionsController() {
    _classCallCheck(this, QuestionsController);
  };

  angular.module('casamentoApp').component('questions', {
    templateUrl: 'app/questions/questions.html',
    controller: QuestionsController
  });
})();
//# sourceMappingURL=questions.controller.js.map

'use strict';

angular.module('casamentoApp').config(function ($stateProvider) {
  $stateProvider.state('questions', {
    url: '/',
    template: '<questions></questions>'
  });
});
//# sourceMappingURL=questions.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RSVPController = function () {
    _createClass(RSVPController, [{
      key: '$onInit',
      value: function $onInit() {}
    }]);

    function RSVPController($scope, $http) {
      _classCallCheck(this, RSVPController);

      this.scope = $scope;
      this.http = $http;
    }

    _createClass(RSVPController, [{
      key: 'submitEmail',
      value: function submitEmail(contact) {
        var ctrlScope = this.scope;
        this.http.post('/api/sendmails', contact).then(function () {
          debugger;
          ctrlScope.successMessage = contact.attend ? 'Sua presença foi confirmada!' : 'Você não confirmou sua presença.';
        }, function () {
          ctrlScope.errorMessage = 'Ocorreu um erro ao confirmar sua presença. Favor entrar em contato pelo telefone: (31) 99204 2341';
        });
      }
    }]);

    return RSVPController;
  }();

  angular.module('casamentoApp').component('rsvp', {
    templateUrl: 'app/rsvp/rsvp.html',
    controller: RSVPController
  });
})();
//# sourceMappingURL=rsvp.controller.js.map

'use strict';

angular.module('casamentoApp').config(function ($stateProvider) {
  $stateProvider.state('rsvp', {
    url: '/',
    template: '<rsvp></rsvp>'
  });
});
//# sourceMappingURL=rsvp.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var WishlistController = function () {
    function WishlistController() {
      _classCallCheck(this, WishlistController);
    }

    _createClass(WishlistController, [{
      key: 'openLink',
      value: function openLink(link) {
        window.open(link, '_blank');
      }
    }]);

    return WishlistController;
  }();

  angular.module('casamentoApp').component('wishlist', {
    templateUrl: 'app/wishlist/wishlist.html',
    controller: WishlistController
  });
})();
//# sourceMappingURL=wishlist.controller.js.map

'use strict';

angular.module('casamentoApp').config(function ($stateProvider) {
  $stateProvider.state('wishlist', {
    url: '/',
    template: '<wishlist></wishlist>'
  });
});
//# sourceMappingURL=wishlist.js.map

'use strict';

angular.module('casamentoApp').directive('footer', function () {
  function daydiff() {
    var weedingDate = new Date(2016, 7, 13);
    var timeDiff = Math.abs(Date.now() - weedingDate.getTime());
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }

  return {
    templateUrl: 'components/footer/footer.html',
    restrict: 'E',
    link: function link(scope, element) {
      element.addClass('footer');
      scope.numberOfRemainingDays = daydiff();
    }
  };
});
//# sourceMappingURL=footer.directive.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarController = function () {
  function NavbarController() {
    _classCallCheck(this, NavbarController);

    jQuery('ul.tabs').tabs();
    jQuery('.button-collapse').sideNav({ closeOnClick: true });
    this.numberOfRemainingDays = this.daydiff();
  }

  _createClass(NavbarController, [{
    key: 'daydiff',
    value: function daydiff() {
      var weedingDate = new Date(2016, 7, 13);
      var timeDiff = Math.abs(Date.now() - weedingDate.getTime());
      return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    }
  }]);

  return NavbarController;
}();

angular.module('casamentoApp').controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map

'use strict';

angular.module('casamentoApp').directive('navbar', function () {
  return {
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  };
});
//# sourceMappingURL=navbar.directive.js.map

'use strict';

(function () {

  /**
   * The Util service is for thin, globally reusable, utility functions
   */
  function UtilService($window) {
    var Util = {
      /**
       * Return a callback or noop function
       *
       * @param  {Function|*} cb - a 'potential' function
       * @return {Function}
       */

      safeCb: function safeCb(cb) {
        return angular.isFunction(cb) ? cb : angular.noop;
      },


      /**
       * Parse a given url with the use of an anchor element
       *
       * @param  {String} url - the url to parse
       * @return {Object}     - the parsed url, anchor element
       */
      urlParse: function urlParse(url) {
        var a = document.createElement('a');
        a.href = url;

        // Special treatment for IE, see http://stackoverflow.com/a/13405933 for details
        if (a.host === '') {
          a.href = a.href;
        }

        return a;
      },


      /**
       * Test whether or not a given url is same origin
       *
       * @param  {String}           url       - url to test
       * @param  {String|String[]}  [origins] - additional origins to test against
       * @return {Boolean}                    - true if url is same origin
       */
      isSameOrigin: function isSameOrigin(url, origins) {
        url = Util.urlParse(url);
        origins = origins && [].concat(origins) || [];
        origins = origins.map(Util.urlParse);
        origins.push($window.location);
        origins = origins.filter(function (o) {
          return url.hostname === o.hostname && url.port === o.port && url.protocol === o.protocol;
        });
        return origins.length >= 1;
      }
    };

    return Util;
  }

  angular.module('casamentoApp.util').factory('Util', UtilService);
})();
//# sourceMappingURL=util.service.js.map

angular.module("casamentoApp").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div id=\"main\"><div class=\"container\"><div class=\"card\"><div class=\"card-content\"> <h3 class=\"main-title\">Sejam Bem-Vindos!</h3><p class=\"lead\">Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presençaa de todos no nosso grande dia!</p><p class=\"lead\">Aqui vocês encontrarão também dicas para hospedagem, como chegar, agenda do casamento entre outras dicas. Ah! Nâo se esqueça de confirmar sua presença até o dia 01/08.</p><br/><br/><div class=\"video-container container\"><iframe src=\"http://www.youtube.com/embed/yh4su_xGJ84\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div></div></div></div></div>");
$templateCache.put("app/people/people.html","<div id=\"people\"><div class=\"container\"><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title\">Os Padrinhos</h3><p class=\"lead\">Aos nossos queridos padrinhos:</p><p class=\"lead\">É uma emoção única e indescritível tê-los ao nosso lado e poder partilhar com vocês toda felicidade dessa nova etapa em nossas vidas: nosso casamento! Por isso, desejamos tê-los como testemunhas do nosso sonho e do nosso amor!</p></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/maraisa-959920b9e8.png\" name=\"Maraísa Reis\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/alayton-5eb74743a6.jpg\" name=\"Alayton de Carvalho\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/dani-74ddf6f7e5.jpg\" name=\"Danielle Abrantes\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/caio-5cb34b9286.jpg\" name=\"Caio Rabelo\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/regilene-65c04dae27.png\" name=\"Regilene Terra\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/lucas-a0066834b3.jpg\" name=\"Lucas Carvalho\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/vaninha-5996a95449.png\" name=\"Vaninha Oliveira\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/tom-a184fd2d23.jpg\" name=\"Marcus Otávio\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/rayana-4065884670.jpg\" name=\"Rayana Khoury\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/ps-1f72d20216.jpg\" name=\"Paulo Sérgio Borges\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/tati-d7cc8b810f.jpg\" name=\"Tatiana Leitão\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/gustavo-38fd2b1ea6.jpg\" name=\"Gustavo Miarelli\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/pedro-682c247b35.jpg\" name=\"Pedro Pires\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/silvia-07e0241e81.jpg\" name=\"Sílvia Takahashi\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/cleo-33a866c9b3.jpg\" name=\"Cleane Panta\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/joao-e0271e7e86.jpg\" name=\"João Fábio\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/thalita-6f294db54c.jpg\" name=\"Thalita Fernandes\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/marcelo-6c265cae0d.jpg\" name=\"Marcelo Carvalho\"></people-card></div></div><div class=\"row\"><div class=\"s12 l6 col\"><people-card link=\"assets/images/luzia-3c3ab21087.jpg\" name=\"Luzia Fernandes\"></people-card></div><div class=\"s12 l6 col\"><people-card link=\"assets/images/nel-8283647893.jpg\" name=\"Manoel Silva\"></people-card></div></div></div></div>");
$templateCache.put("app/people-card/people-card.html","<div class=\"card-panel z-depth-1\"><div class=\"row valign-wrapper no-margin\"><div class=\"col s6 m4\"><img src=\"{{link}}\" alt=\"{{name}}\" class=\"circle responsive-img\"/><!-- notice the \"circle\" class--></div><div class=\"col s6 m8\"><span>{{name}}</span></div></div></div>");
$templateCache.put("app/place/place.html","<div id=\"place\" class=\"container\"><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title\">O Lugar</h3><span>Iremos celebrar o nosso casamento entre os dias 12 e 15 de Agosto de 2016.</span><span>Convidamos para a confraternização no dia  12 de Agosto de 2016, na pousada Rancho Cipó, Serra do Cipó. </span><span>A cerimônia de casamento será realizada em 13 de Agosto de 2016, às 16 horas.  </span></div></div><div class=\"card-content\"><div class=\"card hoverable\"><div ng-click=\"$ctrl.openLink(\'http://ranchocipo.com.br/pousada\')\" class=\"card-image\"><img src=\"assets/images/estrada-c921b319cb.jpg\" class=\"full-width\"/><span class=\"card-title\">Pousada Rancho Cipó</span></div><div class=\"card-content\"><p class=\"video-container card-map\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.079045178507!2d-43.61376904933733!3d-19.322375986882985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5f03b2e5dfc17%3A0xf6f40a8bcf067eca!2sRancho+Cip%C3%B3+Pousada!5e0!3m2!1sen!2sbr!4v1464062267007\" width=\"400\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\">           </iframe></p></div><div ng-click=\"$ctrl.openLink(\'http://ranchocipo.com.br/pousada\')\" class=\"card-action\"><a href=\"http://ranchocipo.com.br/pousada/\" target=\"_blank\">Site da pousada do Rancho Cipó.</a></div></div></div><br/><br/><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title second-title\">Outras Sugestões de Pousada</h3><span>Há várias outras pousadas na região, bem próxima da pousada rancho cipó.</span></div></div><div ng-click=\"$ctrl.openLink(\'http://www.pousadaanauecipo.com.br\')\" class=\"card-panel z-depth-1 col s12 hoverable\"><div class=\"row card-panel-row valign-wrapper\"><div class=\"col s6\"><img src=\"assets/images/logoanaue-94fa7fd520.png\" class=\"responsive-img\"/></div><div class=\"col s6\"><span><a href=\"http://www.pousadaanauecipo.com.br/\" target=\"_blank\">Site da pousada Anaue Cipó</a></span></div></div></div><div ng-click=\"$ctrl.openLink(\'http://www.pousadaanauecipo.com.br\')\" class=\"card-panel z-depth-1 col s12 hoverable\"><div class=\"row card-panel-row valign-wrapper\"><div class=\"col s6\"><img src=\"assets/images/varandadaserra-0cc75dbd90.png\" class=\"black responsive-img\"/></div><div class=\"col s6\"><span><a href=\"http://www.varandasdaserra.com.br/\" target=\"_blank\">Site da pousada Varanda da Serra</a></span></div></div></div><div ng-click=\"$ctrl.openLink(\'http://www.pousadaanauecipo.com.br\')\" class=\"card-panel z-depth-1 col s12 hoverable\"><div class=\"row card-panel-row valign-wrapper\"><div class=\"col s6\"><img src=\"assets/images/chaodaserra-cec2b813f5.png\" class=\"responsive-img\"/></div><div class=\"col s6\"><span><a href=\"http://chaodaserra.com.br/\" target=\"_blank\">Site da pousada Chão da Serra</a></span></div></div></div><div ng-click=\"$ctrl.openLink(\'https://www.google.com.br/webhp?sourceid=chrome-instant&amp;ion=1&amp;espv=2&amp;ie=UTF-8#hotel_dates=2016-06-12,2016-06-13&amp;q=pousada%20serra%20do%20cipo&amp;rflfq=1&amp;rlla=0&amp;rllag=-19333274,-43627052,720&amp;tbm=lcl&amp;tbs=lf_hd:-1,lf_maxhp:-1,lf_maxhpitems:300-400-500-550,lf_maxhpcur:BRL,lf_msr:-1,ls:-1,lf:1,lf_ui:6&amp;fll=-19.318601094573026,-43.60336949666748&amp;fspn=0.02207216417337321,0.04441787273646014&amp;fz=15&amp;oll=-19.338565850000002,-43.6243551&amp;ospn=0.0246206467648733,0.03450436162495407&amp;oz=14&amp;qop=1&amp;rlfi=hd:;si:\')\" class=\"card-panel z-depth-1 col s12 hoverable\"><div class=\"row card-panel-row valign-wrapper\"><div class=\"col s6\"><img src=\"assets/images/google-logo-8e28a241dc.png\" class=\"responsive-img\"/></div><div class=\"col s6\"><span><a href=\"https://www.google.com.br/webhp?sourceid=chrome-instant&amp;ion=1&amp;espv=2&amp;ie=UTF-8#hotel_dates=2016-06-12,2016-06-13&amp;q=pousada%20serra%20do%20cipo&amp;rflfq=1&amp;rlla=0&amp;rllag=-19333274,-43627052,720&amp;tbm=lcl&amp;tbs=lf_hd:-1,lf_maxhp:-1,lf_maxhpitems:300-400-500-550,lf_maxhpcur:BRL,lf_msr:-1,ls:-1,lf:1,lf_ui:6&amp;fll=-19.318601094573026,-43.60336949666748&amp;fspn=0.02207216417337321,0.04441787273646014&amp;fz=15&amp;oll=-19.338565850000002,-43.6243551&amp;ospn=0.0246206467648733,0.03450436162495407&amp;oz=14&amp;qop=1&amp;rlfi=hd:;si:\" target=\"_blank\">Veja outras opções no Google</a></span></div></div></div></div>");
$templateCache.put("app/questions/questions.html","<div id=\"questions\" class=\"container\"><div class=\"card\"><div class=\"card-content\"> <h3 class=\"main-title\">Como Chegar</h3><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\"> <i class=\"material-icons prefix s12 m6\">flight</i> Avião</label><div class=\"row\">                         <div class=\"col s12\"><p class=\"contact-box\"> \nO aeroporto mais próximo é o de Confins, a 60 quilômetros da Serra do Cipó. No aeroporto pode-se pegar um taxi ou alugar um carro. O aeroporto da Pampulha (centro de Belo Horizonte) fica a cem quilômetros</p></div></div><br/><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\"> <i class=\"material-icons prefix s12 m6\">directions_car </i> Carro</label><div class=\"row\">                         <div class=\"col s12\"><p class=\"contact-box\">                 \nVindo de Belo Horizonte, acesso pela MG-010, passando por Lagoa Santa. Mais adiante, após a travessia de uma ponte sobre o Rio das Velhas, segue-se em direção ao distrito Serra do Cipó, município de Santana do Riacho</p></div></div><br/><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\"> <i class=\"material-icons prefix s12 m6\">directions_bus </i> Ônibus</label><div class=\"row\">                         <div class=\"col s12\"><p class=\"contact-box\">                 \nA empresa Saritur faz a linha Belo Horizonte X Serra do Cipó - <a href=\"http://www.saritur.com.br\" target=\"_blank\" class=\"link-saritur\">Site da Saritur</a></p></div></div></div></div><br/><div class=\"row\"><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title second-title\">Translado Aeroporto-Serra do Cipó</h3><span>Segue alguns telefones de taxistas que fazem o translado Aeroporto de Confins e a Serra do Cipó. </span><span>Há a possibilidade de alugar van para grupos maiores, se necessário. </span><br/><br/><br/><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\">Jõao Carlos</label><div class=\"row\">                         <div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 8453 1016 - Claro</p></div><div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 9784 1773 - Vivo</p></div><div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 8970 3955 - OI</p></div><div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 9353 3859 - TIM                   </p></div></div><br/><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\">Fabiano</label><div class=\"row\">                         <div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 99171-8579</p></div></div><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\">Geovane<div class=\"row\">                         <div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 98862 4940</p></div></div><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\">Edmar<div class=\"row\">                         <div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 99948 0451</p></div></div><label for=\"icon_email\" data-error=\"wrong\" data-success=\"right\">Welignton<div class=\"row\">                         <div class=\"col s12 l6\"><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone </i>(31) 99795 4069</p></div></div></label></label></label></div></div></div><div class=\"row\"><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title\">Dúvidas</h3><span>Para mais informações, em contato com o cerimonial Aplauso.</span><br/><br/><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">mail</i>  rsvp@aplausocerimonial.com.br</p><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone</i>  (31) 9204 2341         </p><p class=\"contact-box\"> <i class=\"material-icons prefix s12 m6\">phone</i>  (31) 99204 2341              </p></div></div></div></div>");
$templateCache.put("app/rsvp/rsvp.html","<div id=\"rsvp\" class=\"container\"><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title\">Confirme sua Presença</h3><p class=\"lead\">Para podermos nos organizar melhor, é importante a confirmação de sua presença.</p><br/></div></div><div class=\"card-content\"><div class=\"card hoverable\"><div class=\"card-image\"><img src=\"assets/images/pousada_021-69be9ad55f.jpg\" class=\"full-width\"/><span class=\"card-title\">Confirmação de Presença</span></div><div class=\"card-content card-form\"><div class=\"row\"><div ng-show=\"errorMessage\" class=\"error-message\"> \nOcorreu um erro ao realizar a sua confirmação de presença. <br/>Por favor, confirmar a presença pelo telefone: (31) 99204 2341</div><div ng-show=\"successMessage\" class=\"success-message\">{{successMessage}}</div><form name=\"confirmationForm\" ng-submit=\"$ctrl.submitEmail(contact);\" ng-show=\"!successMessage &amp;&amp; !errorMessage\" class=\"col s12\"><p>Todos os campos são obrigatório            </p><div class=\"row\">           <div class=\"input-field col s12\"><i class=\"material-icons prefix\">account_circle</i><input id=\"icon_prefix\" type=\"text\" ng-model=\"contact.name\" pattern=\".{3,}[ ].{3,}\" name=\"name\" required=\"required\" class=\"validate\"/><label for=\"icon_prefix\" data-error=\"Digite seu nome completo\" data-success=\"Ok!\">Nome Completo *</label></div></div><div class=\"row\"><div class=\"input-field col s12\"><i class=\"material-icons prefix\">mail</i><input id=\"icon_email\" type=\"email\" ng-model=\"contact.email\" required=\"required\" name=\"email\" class=\"validate\"/><label for=\"icon_email\" data-error=\"Formato: email@domain.xyz\" data-success=\"Ok!\">E-mail *</label></div></div><div class=\"row\"><div class=\"input-field col s12 l6\"><i class=\"material-icons prefix\">phone</i><input id=\"icon_telephone\" type=\"text\" ng-model=\"contact.phone\" required=\"required\" name=\"phone\" class=\"validate\"/><label for=\"icon_telephone\" data-error=\"Formato: DDXXXXXYYYY\" data-success=\"Ok!\">Telefone * </label></div><div class=\"input-field col s12 l6\"><p ng-init=\"attend=true\" class=\"checkbox\"><input id=\"attend\" type=\"checkbox\" ng-model=\"contact.attend\"/><label for=\"attend\">Confirmo minha presença</label></p><br/><br/><br/></div></div><div class=\"row\"><div class=\"input-field col s12\"><button type=\"submit\" ng-disabled=\"confirmationForm.$submitted\" class=\"waves-effect waves-light btn-large my-btn\"><i class=\"material-icons right\">email</i>Enviar                    </button></div></div></form></div></div></div></div></div>");
$templateCache.put("app/wishlist/wishlist.html","<div id=\"wishlist\" class=\"container\"><div class=\"card\"><div class=\"card-content\"><h3 class=\"main-title\">Lista de Presentes</h3><p class=\"lead\">Estamos disponibilizando nossa lista de casamento nas lojas Camicado e La Ville. Clique nos links abaixo para abrir a lista de casamento.</p></div></div><div class=\"row\"><div class=\"people-container\"><div class=\"s12 m6 col\"><div ng-click=\"$ctrl.openLink(\'https://www.lavillecasa.com.br/itens_lista.jsp?lista=A13817\')\" class=\"card hoverable\"><div class=\"waves-effect waves-block waves-light valign\"><img src=\"assets/images/laville-c202de5ef3.png\" class=\"responsive-img\"/></div><div class=\"card-action\"><a href=\"https://www.lavillecasa.com.br/itens_lista.jsp?lista=A13817\" target=\"_blank\">Lista de Casamento na La Ville</a></div></div></div><div class=\"s12 m6 col\"><div ng-click=\"$ctrl.openLink(\'http://www.camicado.com.br/weddinglist/products/60309617\')\" class=\"card hoverable\"><div class=\"waves-effect waves-block waves-light camicado valign\"><img src=\"assets/images/camicado-2941c84da5.png\" class=\"responsive-img\"/></div><div class=\"card-action\"><a href=\"http://www.camicado.com.br/weddinglist/products/60309617\" target=\"_blank\">Lista de Casamento na Camicado</a></div></div></div></div></div></div>");
$templateCache.put("components/footer/footer.html","<div class=\"container\"><div class=\"col l6 s12\"><p class=\"title\">Faltam {{numberOfRemainingDays}} dias para o casamento. Confirme sua presença!</p></div><div class=\"footer-copyright\"><div class=\"container\"><p class=\"larger\">13 de Agosto de 2016</p><p><span>Emília</span><span><img src=\"/assets/images/heart-dd6554adf5.png\"/></span><span>Henrique</span></p></div></div></div>");
$templateCache.put("components/navbar/navbar.html","<nav><div class=\"nav-wrapper container\"><a href=\"#!\" class=\"brand-logo\"><img src=\"/assets/images/heart-dd6554adf5.png\"/></a><a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse waves-effect waves-light\"><i class=\"material-icons\">menu</i></a><ul class=\"right hide-on-med-and-down\"><li><div>Faltam {{numberOfRemainingDays}} dias para o casamento.</div></li></ul><ul id=\"mobile-demo\" class=\"side-nav\"><li><span class=\"side-nav-header\"><img src=\"/assets/images/heart-dd6554adf5.png\"/>Faltam {{numberOfRemainingDays}} dias</span><a ui-sref=\"main\">Home</a></li><li class=\"tab\"><a ui-sref=\"people\">Padrinhos</a></li><li class=\"tab\"><a ui-sref=\"place\">O Lugar</a></li><li class=\"tab\"><a ui-sref=\"rsvp\">Sua Presença</a></li><li class=\"tab\"><a ui-sref=\"wishlist\">Lista de Presentes</a></li><li class=\"tab\"><a ui-sref=\"questions\">Dicas        </a></li></ul></div></nav><div class=\"header-title-container\"><div class=\"header-title\"><span>Emília</span><span><img src=\"/assets/images/heart-dd6554adf5.png\"/></span><span>Henrique</span><p class=\"date\">13 de Agosto de 2016</p></div></div><ul class=\"hide-on-med-and-down tabs menu container\"><li class=\"tab\"><a ui-sref=\"main\">Home</a></li><li class=\"tab\"><a ui-sref=\"people\">Padrinhos</a></li><li class=\"tab\"><a ui-sref=\"place\">O Lugar</a></li><li class=\"tab\"><a ui-sref=\"rsvp\">Sua Presença</a></li><li class=\"tab\"><a ui-sref=\"wishlist\">Lista de Presentes</a></li><li class=\"tab\"><a ui-sref=\"questions\">Dicas            </a></li></ul>");}]);