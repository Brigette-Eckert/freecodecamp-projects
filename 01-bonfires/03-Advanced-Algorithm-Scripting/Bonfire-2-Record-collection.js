//You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
// Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
// If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
// Your function must always return the entire collection object.

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
        function updateRecords(id, prop, value) {
            if(!collection.hasOwnProperty(id)){
                var newRecord = {id: id, prop: prop, value: value};
                collection.push(newRecord);
            } else{
                var record = collection[id];
                //making sure tracks is an array
                if(prop == "tracks" && !record.hasOwnProperty("tracks")){
                    console.log("new tracks");
                    record[prop] = [value];
                } else if(prop == "tracks" && record.tracks.length >= 0){
                     record.tracks.push(value);
                } else {
                record[prop] = value;
                    }
                //delete prop if empty
                if(value === ""){
                    delete record[prop];
                
                }
    }

    console.log(collection);
    return collection;
}

// Free Code Camp Tests
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");