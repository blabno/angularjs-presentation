describe("Greeter", function ()
{
    beforeEach(function ()
    {
        browser().navigateTo("/api/reset");
    });

    it("should ...", function ()
    {
        browser().navigateTo("/");
        expect(repeater("table tr").count()).toBe(2);
        pause();
        input("user.name").enter("Jack");
        pause();
        element("button").click();
        pause();
        expect(repeater("table tr").count()).toBe(3);
    });
});
