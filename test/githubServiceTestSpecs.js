describe("Github Service Test/", function(){

    beforeEach(module("app"));

    var service,
        $httpBackend;

    beforeEach(inject(function(githubService, _$httpBackend_){
        service = githubService;
        $httpBackend = _$httpBackend_;
    }));

    describe("reposQuery Test/", function(){

        it("reposQuery should be defined/", function(){
            $httpBackend.whenGET("http://localhost:3000/LALA").respond([{message:"NOT - Found", error: 404}]);
            expect(service.reposQuery()).toBeDefined();
        });

        it("should reject the promise and respond with error", function(){
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
            expect(result).toBe("[{message:\'NOT - Found\', error: 404}]");
        });

        
    });

});