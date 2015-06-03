var commitsHAL={"_links":{"self":{"href":"/MDIAZ88"}},"_embedded":{"Commits":[{"_links":{"self":{"href":"/MDIAZ88/eabait/f10e20d4907e265cd6876bae5506cda074819b2d"}},"sha":"f10e20d4907e265cd6876bae5506cda074819b2d","Commit_Date":"2014-10-31T18:10:09Z","Author":"Esteban S. Abait","Message":"Merge pull request #2 from jvallelunga/master\n\nAnti-Pattern added"},{"_links":{"self":{"href":"/MDIAZ88/jvallelunga/b08e47ef9dd9b0cab4eb1f7d31105c751b2d107a"}},"sha":"b08e47ef9dd9b0cab4eb1f7d31105c751b2d107a","Commit_Date":"2014-10-31T18:06:58Z","Author":"jvallelunga","Message":"Update README.md\n\nAnti-Pattern added"},{"_links":{"self":{"href":"/MDIAZ88/eabait/c0db7a006577188a3e8931583ec30dc6209aa25c"}},"sha":"c0db7a006577188a3e8931583ec30dc6209aa25c","Commit_Date":"2014-04-09T14:21:00Z","Author":"Esteban S. Abait","Message":"Update README.md"},{"_links":{"self":{"href":"/MDIAZ88/eabait/bdb7023050ce74b42752ce671df9cb6a8793ca82"}},"sha":"bdb7023050ce74b42752ce671df9cb6a8793ca82","Commit_Date":"2014-02-19T13:21:43Z","Author":"Esteban S. Abait","Message":"Update README.md"},{"_links":{"self":{"href":"/MDIAZ88/eabait/163cb9de9abcc719577f67f29648d04b56960dd3"}},"sha":"163cb9de9abcc719577f67f29648d04b56960dd3","Commit_Date":"2014-02-19T13:21:28Z","Author":"Esteban S. Abait","Message":"Update README.md"},{"_links":{"self":{"href":"/MDIAZ88/eabait/950f997d698520b248c3cba3b0e73227beab9a34"}},"sha":"950f997d698520b248c3cba3b0e73227beab9a34","Commit_Date":"2014-02-19T13:19:17Z","Author":"Esteban S. Abait","Message":"Updated README.md"},{"_links":{"self":{"href":"/MDIAZ88/eabait/ba4d6f6e95368cb3827030626ebcbc3efeafa23c"}},"sha":"ba4d6f6e95368cb3827030626ebcbc3efeafa23c","Commit_Date":"2014-02-17T18:28:59Z","Author":"Esteban S. Abait","Message":"Initial commit"}]},"id":"HAL","name":"HAL+JSON-Test2","origin":"Github","total":7};

describe('*Repositories Controller Test/',function(){
  var controller,
  $scope,
  serviceMock,
  promiseSpy={}; 

  beforeEach(module('app'));
  beforeEach(inject(function ($rootScope,$controller){

    $scope=$rootScope.$new();

    serviceMock=jasmine.createSpyObj('githubService',['commitsQuery']);

    serviceMock.commitsQuery.andReturn(promiseSpy);

  }));  

  afterEach(function(){
    expect(serviceMock.commitsQuery).toHaveBeenCalled();
  });

  it('Should Test The Success Response Promise/',inject(function ($controller){
    promiseSpy.then=function(success,error){
      success(commitsHAL);
    };
    controller = $controller('requestCommitsController', {
      $scope : $scope,
      githubService: serviceMock
    });
    $scope.$apply();
    expect($scope.commits).toEqual(commitsHAL);
  }));


});


