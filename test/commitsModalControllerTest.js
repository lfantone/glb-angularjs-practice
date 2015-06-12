var commitHAL={"_links":{"self":{"href":"/lfantone/glb-nodejs-practice/commits/e48cfd34ccff6a3707d3a821c0721e8aec2d774f"},"commits":{"href":"/lfantone/glb-nodejs-practice/commits"},"repository":{"href":"/lfantone/glb-nodejs-practice"},"repositories":{"href":"/lfantone"}},"_embedded":{"Files":[{"filename":"README.md","status":"modified","additions":1,"deletions":1,"changes":2}]},"author":"Luciano Fantone","date":"2015-06-09T12:44:19Z","message":"Update README.md","url":"https://github.com/lfantone/glb-nodejs-practice/commit/e48cfd34ccff6a3707d3a821c0721e8aec2d774f","file":"README.md","id":"HAL-JSON","type":"Commit","origin":"Github"};
var errorMessage={Error:404,Message:"Commit NOT-Found please check the URL"};
var modalInstance={ };

describe('*Commit Modal Controller Test/',function(){

  var controller,
  $scope,
  serviceMock,
  promiseSpy={};


  beforeEach(module('app'));
  beforeEach(module('ui.bootstrap'));

  beforeEach(inject(function ($rootScope,$controller){
    $scope=$rootScope.$new();
    serviceMock=jasmine.createSpyObj('githubService',['getSingleCommit']);
    serviceMock.getSingleCommit.andReturn(promiseSpy);
  }));

  afterEach(function(){
    expect(serviceMock.getSingleCommit).toHaveBeenCalled();
  });


  it('Shoul Test The Success Response Promise',inject(function ($controller){
    promiseSpy.then=function (success,error){
      success(commitHAL);
    };

      controller=$controller('commitModalController',{

      $scope:$scope,
      $modalInstance:modalInstance,
      githubService:serviceMock,
      items:{username:'lfantone',repository:'glb-nodejs-practice',sha:'e48cfd34ccff6a3707d3a821c0721e8aec2d774f'}

    });
    $scope.$apply();
    expect($scope.response).toEqual(commitHAL);
  }));


  it('Should Test The Error Response Promise/',inject(function ($controller){
    promiseSpy.then=function(success,error){
      error(errorMessage);
    };
    controller = $controller('commitModalController', {
      $scope:$scope,
      $modalInstance:modalInstance,
      githubService:serviceMock,
      items:{username:'lfantone',repository:'glb-nodejs-practicessssssssss',sha:'sssssssss'}
    });
    $scope.$apply();
    expect($scope.errorMessage).toEqual(errorMessage);
  }));

});