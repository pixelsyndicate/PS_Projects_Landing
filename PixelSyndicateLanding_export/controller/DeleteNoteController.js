
PsProjects.controller(
    'DeleteNoteController',
    function ($scope, $location, $routeParams, NoteModel) {
        
        // since we would be using $routeParams.chapterId 2x, put it in a var
        var projectId = $routeParams.projectId;
        
        NoteModel.deleteNote(projectId, $routeParams.noteId);
        
        $location.path('/project/' + projectId);
    }
);