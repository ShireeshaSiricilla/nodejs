var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarEmployees"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
    if(err) console.error(err);
    console.log("DB Connected");
    var dbobj= db.db("zensarEmployees");

       dbobj.collection("EmployeeMasterData").findOne({}, function(err,res) {
     if(err) console.error(err);
        console.log(res.Fname);
    
        db.close();

    });
});
