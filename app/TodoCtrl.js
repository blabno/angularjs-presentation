var todoApp = angular.module("TodoApp", []).controller("TodoCtrl", function ($scope, UserDAO)
{
    $scope.user = {name: ""};
    $scope.users = [];

    $scope.greet = function (name)
    {
        alert("Hello " + name);
    };

    UserDAO.get().success(function (users)
    {
        $scope.users = users;
    });
});
