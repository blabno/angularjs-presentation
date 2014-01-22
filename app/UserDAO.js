todoApp.factory("UserDAO", function ($http)
{
    return {
        get: function ()
        {
            return $http.get("/api/user");
        },
        save: function (user)
        {
            return $http.post("/api/user", user);
        }
    }
});
