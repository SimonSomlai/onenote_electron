function createDb() {
    // Type 3: Persistent datastore with automatic loading
    var Datastore = require('nedb'),
        db = new Datastore({
            filename: 'database.db',
            autoload: true
        });

    // Of course you can create multiple datastores if you need several
    // collections. In this case it's usually a good idea to use autoload for all collections.
    db = {};
    db.users = new Datastore('database.db');

    // You need to load each database (here we do it asynchronously)
    db.users.loadDatabase();
}

function createNote(){
  $("#submit").on("click", function(e){
    e.preventDefault()
  }
}

$(document).ready(function() {
    createDb();
    insertDb();
})
