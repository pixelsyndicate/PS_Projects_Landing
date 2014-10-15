// this is my controller for project
PsProjects.controller(
    'ProjectsController',
    
    function ($scope, $location, $routeParams, ProjectModel, NoteModel) {
        
        // get all the project models
        var projects = ProjectModel.getProjects();
        
        // fill the models with their note collections
        for (var i=0; i<projects.length; i++) {
            projects[i].notes = NoteModel.getNotesForProject(projects[i].id);
        }
        
        // make values available to the views/controllers by putting them into $scope
        $scope.projects = projects;
        $scope.selectedProjectId = $routeParams.projectId;
        
        // eventhandler for the DELETE button
        $scope.onDelete = function(noteId) {
            var confirmDelete = confirm('Are you sure you want to delete this note?');
            if(confirmDelete) {
                $location.path('/deleteNote/' + $routeParams.projectId + '/' + noteId);
            }
        };
    }
);




