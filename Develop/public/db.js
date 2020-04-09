let db;

const request = window.indexedDB.open('workout',1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    db.createObjectStore("pending",{autoIncrement:true});
};



request.onsuccess = function(event){
    db = event.target.result;

    if(navigator.onLine){
        checkDatabase();
    }
}

request.onerror = function(event){
    console.log("SOMETHING WRONG IN THE DB FILE" + event.target.errorCode);
};


function saveRecord(record){
    const training = db.transaction(["pending"],"readwrite");
    const store = transaction.ObjectStore("pending");
    store.add(record);
}

function checkDatabase(){
    const training = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    const getAll = store.getAll();

    getAll.onsuccess = function(){
        if(getAll.result.length>0){
            fetch("")
        }
    }


}