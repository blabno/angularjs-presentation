describe("Greeter", function ()
{
    beforeEach(function ()
    {
        browser().navigateTo("/api/reset");
    });

    describe("on enter /", function ()
    {
        beforeEach(function ()
        {
            browser().navigateTo("/");
        });
        it("should show 2 users", function ()
        {
            expect(repeater("table tr").count()).toBe(2);
        });
    });

    describe("on greeting Jack", function ()
    {
        beforeEach(function ()
        {
            browser().navigateTo("/");
        });
        it("should show 3 users", function ()
        {
            input("user.name").enter("Jack");
            element("button").click();
            expect(repeater("table tr").count()).toBe(3);
        });
    });

    it("should be able to add new user", function ()
    {
        browser().navigateTo("/");
        expect(repeater("table tr").count()).toBe(2);
        input("user.name").enter("Jack");
        element("button").click();
        expect(repeater("table tr").count()).toBe(3);
    });
});
