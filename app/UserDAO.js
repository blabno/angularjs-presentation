todoApp.factory("UserDAO", function ($http)
{
    return {
        get: function ()
        {
            return $http.get("/api/user");
        }
    }
});
