var projectsConfig = function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'ProjectsController',
        templateUrl: 'view/projects.html'
    }).when('/project/:projectId', {
        controller: 'ProjectsController',
        templateUrl: 'view/projects.html'
    }).when('/addNote/:projectId', {
        controller: 'AddNoteController',
        templateUrl: 'view/addNote.html'
    }).when('/deleteNote/:projectId/:noteId', {
        controller: 'DeleteNoteController',
        templateUrl: 'view/addNote.html'
    });

};

var PsProjects = angular.module('PsProjects', ['ngRoute'])
.config(projectsConfig);