describe("TodoCtrl", function ()
{
    beforeEach(module("TodoApp"));

    describe("greet", function ()
    {
        var $scope, UserDAOMock;
        beforeEach(inject(function ($rootScope, $controller)
        {
            $scope = $rootScope.$new();
            UserDAOMock = jasmine.createSpyObj("UserDAOMock", ["get", "save"]);
            UserDAOMock.get.andReturn({success: jasmine.createSpy("successCallback")});
            UserDAOMock.save.andReturn({success: function (callback)
            {
                callback();
            }});
            $controller("TodoCtrl", {$scope: $scope, UserDAO: UserDAOMock});
            expect(UserDAOMock.get.calls.length).toBe(1);
            $scope.greet("Jack");
        }));

        it("should call UserDAO.save", function ()
        {
            expect(UserDAOMock.save).toHaveBeenCalledWith({name: "Jack", email: "Jack@example"});
        });

        it("should refresh users", function ()
        {
            expect(UserDAOMock.get.calls.length).toBe(2);
        });
    });
});
