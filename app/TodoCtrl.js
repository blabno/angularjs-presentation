var todoApp = angular.module("TodoApp", ["ngAnimate", "markdownModule"]).controller("TodoCtrl", function ($scope, UserDAO)
{
    $scope.user = {name: ""};
    $scope.users = [];

    $scope.greet = function (name)
    {
        var user = {name: name, email: name + "@example"};
        UserDAO.save(user).success(function ()
        {
            $scope.users.push(user);
        });
    };

    function refreshUsers()
    {
        UserDAO.get().success(function (users)
        {
            $scope.users = users;
        });
    }

    refreshUsers();
});
