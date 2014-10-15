PsProjects.service('NoteModel', function () {
    
    // return a JSON array of project notes
    this.getNotesForProject = function (projectId) {
      
        // this will eventually return actual notes from the project
        var now = new Date();
        
        var note = { content: 'No notes available yet', id: now };
        
        var project = JSON.parse(window.localStorage.getItem(projectId));
        if(!project)
        {
            return [];
        }
        
        return project.notes;
    };
    
});