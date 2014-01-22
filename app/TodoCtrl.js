angular.module("TodoApp", []).controller("TodoCtrl", function ($scope)
{
    $scope.user = {name: ""};

    $scope.greet = function (name)
    {
        alert("Hello " + name);
    };

});
