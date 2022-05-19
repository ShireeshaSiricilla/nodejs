var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarEmployees"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
    if(err) console.error(err);
    console.log("DB Connected");
    var dbobj= db.db("zensarEmployees");

    dbobj.collection("EmployeeMasterData").find().toArray(function(err,res) {
 if(err) console.error(err);
        console.log(JSON.stringify(res));
        db.close();
    });
});

    //   dbobj.collection("EmployeeMasterData").findOne({}, function(err,res) {
     //if(err) console.error(err);
       // console.log(res.firstname);
       // console.log(res.Lname);
        //db.close();

    



