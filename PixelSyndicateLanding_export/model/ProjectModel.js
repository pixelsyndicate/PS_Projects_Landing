PsProjects.service('ProjectModel', function () {

    this.getProjects = function () {

        return [{
            id: 0,
            title: 'Angular Guidebook',
            summary: 'this was a lab project for the book, "Instant AngularJS Starter" by Dan Menard.',
            url: 'http://www.pixelsyndicate.com/projects/angularjs/guidebook/guidebook.html'
        },
                {
                    id: 1,
                    title: 'DFW Enlightened',
                    summary: 'The Ingress Dallas/Ft. Worth Enlightened agents needed a landing page for their domain, DFWEnlightened.com ',
                    url: 'http://www.pixelsyndicate.com/projects/ingress/dfwenl/' 
                },
                {
                    id: 2,
                    title: '2007 NHL All-Stars',
                    summary: 'I had a great opportunity to attend the NHL All-Star weekend in Dallas, TX, so I grabbed as many photos as I could.',
                    url: 'http://www.pixelsyndicate.com/projects/AllStarWallpapers/'
                },
                {
                    id: 3,
                    title: 'My TaeKwonDo Experiences',
                    summary: 'A dated blog I kept of my experiences with Roy Kurban\'s American Blackbelt Academy',
                    url: 'http://www.pixelsyndicate.com/projects/'
                },{
                    id: 4,
                    title: 'The Insulin Wizard Preview',
                    summary: 'A public look at the development of The Insulin Wizard, a project built by a need to support my two type-1 diabetic children.',
                    url: 'http://www.pixelsyndicate.com/The_Insulin_Wizard/'
                }];
    };
});

