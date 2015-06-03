describe('*Testing Routes/', function() {
  beforeEach(module('app'));
  var location, route, rootScope;
  beforeEach(inject(
    function( _$location_, _$route_, _$rootScope_ ) {
      location = _$location_;
      route = _$route_;
      rootScope = _$rootScope_;
    }));


  describe('-Home Route/', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('partials/home.html')
        .respond(200);
      }));
    it('should Use The Correct Home Controller', function() {
      location.path('/');
      rootScope.$digest();
      expect(route.current.controller).toBe('homeController');

    });
  });

  describe('-Repos List Route/', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('partials/repositoriesList.html')
        .respond(200);
      }));
    it('Should Use The Correct Repositorie Controller', function() {
      location.path('/MDIAZ88');
      rootScope.$digest();
      expect(route.current.controller).toBe('requestRepoController');

    });
  });

  describe('-Commits List Route/', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('partials/commitsList.html')
        .respond(200);
      }));
    it('Should Use The Correct Commits Controller', function() {
      location.path('/MDIAZ88/angular-lab');
      rootScope.$digest();
      expect(route.current.controller).toBe('requestCommitsController');

    });
  });


});


