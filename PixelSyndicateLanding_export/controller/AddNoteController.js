PsProjects.controller(
    'AddNoteController',
    function ($scope, $location, $routeParams, NoteModel) {

        // since we would be using $routeParams.projectId 3x, put it in a var
        var projectId = $routeParams.projectId;

        $scope.cancel = function () {
            $location.path('/project/' + projectId);
        };


        $scope.createNote = function () {

            // take note.content and pass it and the selected project to the AddNote method.
            NoteModel.addNote(projectId, $scope.note.content);

            $location.path('/project/' + projectId);
        };
    }
);