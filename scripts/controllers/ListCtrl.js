var ListCtrl = function($scope){
    //define model
    $scope.attendeeList = [{name: 'test', present: false}, {name: 'test2', present: false}];

    //controller
    $scope.addPerson = function(){
        $scope.attendeeList.push({name: $scope.newPerson, present: false});
        $scope.newPerson = '';
    };
    $scope.removePerson = function(indx){
        $scope.attendeeList.splice(indx,1);
    };
}