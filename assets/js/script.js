function createDb(){
    var Datastore = require('nedb'),
        db = new Datastore({
            filename: '../database/database.db',
            autoload: true
        });
    window.db = db;
};

function createNote(){
    $("#submit").on("click", function(e){
            e.preventDefault();
            var title = $("#title").val();
            var descr = $("#descr").val();
            var doc = {
                title: title,
                description: descr,
            };
            db.insert(doc, function(err, newDoc) {});
        });
    };

function loadNotes(){
    db.find({}, function(err, docs){
        $.each(docs, function(index, note){
            title = note.title;
            description = note.description;
            html = '<a href="#" class="list-group-item">' +
                '<h4 class="list-group-item-heading">' + title + '</h4>' +
                '<p class="list-group-item-text">' + description + '</p></a>';
            $("#note-group").append(html);
        });
    });
  }

$(document).ready(function() {
    createDb();
    createNote();
    loadNotes();
})
