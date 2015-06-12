var pullHAl={"_links":{"self":{"href":"/lfantone/glb-nodejs-practice/pulls/3"},"pull-requests":{"href":"/lfantone/glb-nodejs-practice/pulls"},"repository":{"href":"/lfantone/glb-nodejs-practice"},"repositories":{"href":"/lfantone"}},"name":"MDIAZ","number":3,"state":"open","locked":false,"created_date":"2015-06-04T11:32:34Z","updated_date":"2015-06-11T13:41:19Z","merged":false,"commits":24,"additions":5115,"deletions":413,"file_changes":33,"id":"HAL-JSON","type":"Pull-Request","origin":"Github"};
var errorMessage={Error:404,Message:"Pull Request NOT-Found please check the URL"};
var modalInstance={ };

describe('*Pull Request Modal Controller Test/',function(){

  var controller,
  $scope,
  serviceMock,
  promiseSpy={};


  beforeEach(module('app'));
  beforeEach(module('ui.bootstrap'));

  beforeEach(inject(function ($rootScope,$controller){
    $scope=$rootScope.$new();
    serviceMock=jasmine.createSpyObj('githubService',['getSinglePullRequest']);
    serviceMock.getSinglePullRequest.andReturn(promiseSpy);
  }));

  afterEach(function(){
    expect(serviceMock.getSinglePullRequest).toHaveBeenCalled();
  });


  it('Shoul Test The Success Response Promise',inject(function ($controller){
    promiseSpy.then=function (success,error){
      success(pullHAl);
    };

      controller=$controller('pullRequestModalController',{

      $scope:$scope,
      $modalInstance:modalInstance,
      githubService:serviceMock,
      items:{username:'lfantone',repository:'glb-nodejs-practice',number:3,id:36925536}

    });
    $scope.$apply();
    expect($scope.response).toEqual(pullHAl);
  }));


  it('Should Test The Error Response Promise/',inject(function ($controller){
    promiseSpy.then=function(success,error){
      error(errorMessage);
    };
    controller = $controller('pullRequestModalController', {
      $scope:$scope,
      $modalInstance:modalInstance,
      githubService:serviceMock,
      items:{username:'lfantone',repository:'glb-nodejs-practicessssssssss',number:3,id:36925536}
    });
    $scope.$apply();
    expect($scope.errorMessage).toEqual(errorMessage);
  }));

});