angular.module("TodoApp", []).controller("TodoCtrl", function ($scope)
{
    $scope.user = {name: ""};
    $scope.users = [
        {name: "John", email: "john@example.com"},
        {name: "Chris", email: "chris@example.com"}
    ];

    $scope.greet = function (name)
    {
        alert("Hello " + name);
    };

});
