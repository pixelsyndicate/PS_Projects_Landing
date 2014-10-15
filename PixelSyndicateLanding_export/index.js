var projectsConfig = function ($routeProvider) {
    
    $routeProvider.when('/', {
        controller: 'ProjectsController',
        templateUrl: 'view/projects.html'
    }).when('/project/:projectId', {
        controller: 'ProjectsController',
        templateUrl: 'view/projects.html'
    });
    
};

var PsProjects = angular.module('PsProjects', ['ngRoute'])
.config(projectsConfig);