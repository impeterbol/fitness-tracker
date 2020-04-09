import { response } from "express";

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
    const training = db.training(["pending"],"readwrite");
    const store = training.ObjectStore("pending");
    store.add(record);
}

function checkDatabase(){
    const training = db.transaction(["pending"], "readwrite");
    const store = training.objectStore("pending");
    const getAll = store.getAll();

    getAll.onsuccess = function(){
        if(getAll.result.length>0){
            fetch("/api/workouts", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
              })
              .then(response => response.json())
                .then(()=>{
                    const transaction = db.transaction(["pending"], "readwrite");
                    // access your pending object store
                const store = training.objectStore("pending");
                      // clear all items in your store
                store.clear();
                })
        }
    }


}
// listen for app coming back online
window.addEventListener("online", checkDatabase);