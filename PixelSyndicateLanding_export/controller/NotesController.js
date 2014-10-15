// this is my controller for the notes
PsProjects.controller(
  'NotesController',
    function ($scope, $routeParams, ProjectModel, NoteModel) {
        
        var projects = ProjectModel.getProjects();
        
        for (var i=0; i<projects.length; i++) {
            projects[i].notes = NoteModel.getNotesForProject(projects[i].id);
        }
        
        // setting properties into $scope is making them available to the view or the controller
        
        $scope.selectedProjectId = 'prjt';
    }
);


