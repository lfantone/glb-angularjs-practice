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
        $httpBackend.expectGET('partials/homeTemplate.html')
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
        $httpBackend.expectGET('partials/repositoriesListView.html')
        .respond(200);
      }));
    it('Should Use The Correct Repositorie Controller', function() {
      location.path('/MDIAZ88');
      rootScope.$digest();
      expect(route.current.controller).toBe('repositoriesController');

    });
  });

  describe('-Commits and Pull Requests List Route/', function() {
    beforeEach(inject(
      function($httpBackend) {
        $httpBackend.expectGET('partials/pullsAndCommitsListView.html')
        .respond(200);
      }));
    it('Should Use The Correct Commits and Pull Requests Controller', function() {
      location.path('/lfantone/glb-nodejs-practice');
      rootScope.$digest();
      expect(route.current.controller).toBe('pullsAndCommitsController');

    });
  });


});


