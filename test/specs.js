describe("My First Test", function(){
	it("should be true", function(){
		expect(true).toBe(true);
	});
});


describe('Testing routes/', function() {
	beforeEach(module('app'));
	var location, route, rootScope;
	beforeEach(inject(
		function( _$location_, _$route_, _$rootScope_ ) {
			location = _$location_;
			route = _$route_;
			rootScope = _$rootScope_;
		}));


	describe('Home Route/', function() {
		beforeEach(inject(
			function($httpBackend) {
				$httpBackend.expectGET('partials/home.html')
				.respond(200);
			}));
		it('should use the correct home controller', function() {
			location.path('/');
			rootScope.$digest();
			expect(route.current.controller).toBe('homeController');

		});
	});

	describe('Repos List Route/', function() {
		beforeEach(inject(
			function($httpBackend) {
				$httpBackend.expectGET('partials/reposList.html')
				.respond(200);
			}));
		it('should use the correct repositorie controller', function() {
			location.path('/MDIAZ88');
			rootScope.$digest();
			expect(route.current.controller).toBe('requestRepoController');

		});
	});

	describe('Commits List Route/', function() {
		beforeEach(inject(
			function($httpBackend) {
				$httpBackend.expectGET('partials/commitsList.html')
				.respond(200);
			}));
		it('should use the correct commits controller', function() {
			location.path('/MDIAZ88/angular-lab');
			rootScope.$digest();
			expect(route.current.controller).toBe('requestCommitsController');

		});
	});


});


describe('Testing repos controller/', function() {
	var $controller;  
	beforeEach(module('app'));
	beforeEach(function(){
		//module('app');
		inject(function(_$controller_){
			$controller = _$controller_;
		});
	});  
	it('should test something/', function() {
		var $scope = {};
		var controller = $controller('homeController', { $scope: $scope });
		expect(true).toBe(true);    
	});  
});