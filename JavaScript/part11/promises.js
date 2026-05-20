function savetoDb(data){
    return new Promise((succes,failure) => {
        let internetSpeed = Math.floor(Math.random()*10);
        if (internetSpeed>4) {
            succes("succes: data saved");
        }else{
            failure("failure: data not saved");
        }
    });
}

savetoDb("Apna College")
    .then(() => {
        console.log("Data was saved");
        return savetoDb("Hello World");
    })
    .then(()=>{
        console.log("Data2 was saved");
    })
    .catch(() => {
        console.log("Data was not saved");
    })