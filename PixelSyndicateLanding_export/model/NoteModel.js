PsProjects.service('NoteModel', function () {
/// Should return a JSON array of project objects
    this.getNotesForProject = function (projectId) {
        // the parameter projectId is used as the key for this database
        var project = JSON.parse(window.localStorage.getItem(projectId));
        if (!project) {
            return [];
        }
        return project.notes;
    };
    
    /// this saves 
    this.addNote = function (projectId, noteContent) {
        var now = new Date();
        // use the noteContent parameter and create a new note object model
        // we are using the current Date() as our primary KEY
        var note = { content: noteContent, id: now };
        // get the current from database
        // the parameter projectId is used as the key for this database
        var project = JSON.parse(window.localStorage.getItem(projectId));
        if (!project) {
            project = { id: projectId, notes: [] };
        }
        
        // this .push() will add the new note to the chapter's notes collection
        project.notes.push(note);
        // save current to our database
        // the parameter projectId is used as the key for this database
        // the value is JSON formatted using stringify()
        window.localStorage.setItem(projectId, JSON.stringify(project));
    };
    
    /// this deletes
    this.deleteNote = function (projectId, noteId) {
        
        // get the current data
        // the parameter projectId is used as the key for this database
        var project = JSON.parse(window.localStorage.getItem(projectId));
        
        // ignore if there are not notes for this project
        if (!project || !project.notes) {
            return;
        }
        
        
        for (var i = 0; i < project.notes.length; i++)
        {
            if(project.notes[i].id === noteId) {
                project.notes.splice(i,1);
                // save date to our database
                // the parameter projectId is used as the key for this database
                // the value is JSON formatted using stringify()
                window.localStorage.setItem(projectId, JSON.stringify(project));
                return;
            }
            
        }
    };
});