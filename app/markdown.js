angular.module('markdownModule', []).directive('markdown', function ()
{
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, iElement, attrs)
        {
            //noinspection JSUnresolvedVariable
            var content = attrs.markdown;
            if (undefined == content || content.length < 1) {
                content = iElement.html();
                //noinspection JSPotentiallyInvalidConstructorUsage
                iElement.html(new Showdown.converter().makeHtml(content));
            } else {
                scope.$watch(content, function (newValue)
                {
                    if (undefined != newValue) {
                        //noinspection JSPotentiallyInvalidConstructorUsage
                        iElement.html(new Showdown.converter().makeHtml(newValue));
                    } else {
                        iElement.html("");
                    }
                }, true)
            }

        }
    };
});