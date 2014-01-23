var todoApp = angular.module("TodoApp", ["markdownModule"]).controller("TodoCtrl", function ($scope, UserDAO)
{
    $scope.user = {name: ""};
    $scope.users = [];

    $scope.greet = function (name)
    {
        UserDAO.save({name: name, email: name + "@example"}).success(refreshUsers);
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
