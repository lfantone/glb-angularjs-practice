var reposHAL={"_links":{"self":{"href":"/MDIAZ88"}},"_embedded":{"Repos":[{"_links":{"self":{"href":"/MDIAZ88/angular-education"},"next":{"href":"/repos/MDIAZ88/angular-education/commits"}},"name":"angular-education"},{"_links":{"self":{"href":"/MDIAZ88/angular-lab"},"next":{"href":"/repos/MDIAZ88/angular-lab/commits"}},"name":"angular-lab"},{"_links":{"self":{"href":"/MDIAZ88/angular-test-patterns"},"next":{"href":"/repos/MDIAZ88/angular-test-patterns/commits"}},"name":"angular-test-patterns"},{"_links":{"self":{"href":"/MDIAZ88/AngularJS-Learning"},"next":{"href":"/repos/MDIAZ88/AngularJS-Learning/commits"}},"name":"AngularJS-Learning"},{"_links":{"self":{"href":"/MDIAZ88/angularjsTest"},"next":{"href":"/repos/MDIAZ88/angularjsTest/commits"}},"name":"angularjsTest"},{"_links":{"self":{"href":"/MDIAZ88/glb-angularjs-practice"},"next":{"href":"/repos/MDIAZ88/glb-angularjs-practice/commits"}},"name":"glb-angularjs-practice"},{"_links":{"self":{"href":"/MDIAZ88/grunt-nodemon"},"next":{"href":"/repos/MDIAZ88/grunt-nodemon/commits"}},"name":"grunt-nodemon"},{"_links":{"self":{"href":"/MDIAZ88/html5bootcamp"},"next":{"href":"/repos/MDIAZ88/html5bootcamp/commits"}},"name":"html5bootcamp"},{"_links":{"self":{"href":"/MDIAZ88/ng-jwt-workshop"},"next":{"href":"/repos/MDIAZ88/ng-jwt-workshop/commits"}},"name":"ng-jwt-workshop"},{"_links":{"self":{"href":"/MDIAZ88/PhlyRestfully"},"next":{"href":"/repos/MDIAZ88/PhlyRestfully/commits"}},"name":"PhlyRestfully"},{"_links":{"self":{"href":"/MDIAZ88/protractor"},"next":{"href":"/repos/MDIAZ88/protractor/commits"}},"name":"protractor"},{"_links":{"self":{"href":"/MDIAZ88/rv-protractor"},"next":{"href":"/repos/MDIAZ88/rv-protractor/commits"}},"name":"rv-protractor"},{"_links":{"self":{"href":"/MDIAZ88/sessions-angularJs"},"next":{"href":"/repos/MDIAZ88/sessions-angularJs/commits"}},"name":"sessions-angularJs"},{"_links":{"self":{"href":"/MDIAZ88/startup"},"next":{"href":"/repos/MDIAZ88/startup/commits"}},"name":"startup"},{"_links":{"self":{"href":"/MDIAZ88/ui-router"},"next":{"href":"/repos/MDIAZ88/ui-router/commits"}},"name":"ui-router"},{"_links":{"self":{"href":"/MDIAZ88/userapp-angular"},"next":{"href":"/repos/MDIAZ88/userapp-angular/commits"}},"name":"userapp-angular"}]},"id":"HAL","name":"HAL+JSON-Test","origin":"Github","status":"Public","total":16};

describe("Github Service Test/", function(){

    beforeEach(module("app"));

    var service,
        $httpBackend;

    beforeEach(inject(function(githubService, _$httpBackend_){
        service = githubService;
        $httpBackend = _$httpBackend_;
    }));

    describe("reposQuery Test/", function(){

        it("Repos Query should be defined/", function(){
            $httpBackend.whenGET("http://localhost:3000/LALA").respond([{message:"NOT - Found", error: 404}]);
            expect(service.reposQuery()).toBeDefined();
        });

        it("Should respond with Error", function(){
            $httpBackend.whenGET("http://localhost:3000/LALA").respond([{message:"NOT - Found", error: 404}]);
            var promise = service.reposQuery('LALA'),
                result = null;

            promise.then(function(res){
                result = res;
            }, function(err,status){
                console.log(err);
                result = err;
            });
            $httpBackend.flush();
            expect(result).toEqual([{message:"NOT - Found", error: 404}]);
        });


        it("Should respond with Success", function(){
            $httpBackend.whenGET("http://localhost:3000/MDIAZ88").respond(reposHAL);
            var promise = service.reposQuery('MDIAZ88'),
                result = null;

            promise.then(function(res){
                result = res;
            }, function(err,status){
                console.log(err);
                result = err;
            });
            $httpBackend.flush();
            expect(result).toEqual(reposHAL);
        });

        
    });

});