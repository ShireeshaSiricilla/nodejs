var MongoClient = require ('mongodb').MongoClient;
var db;
var connectionString = "mongodb://127.0.0.1:27017/zensarEmployees"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
    if(err) console.error(err);
    console.log("DB Connected");
    var dbobj= db.db("zensarEmployees");

var data1 = [{ "firstname": "Divya"
},
{ "firstname": "Manisha"
}
];
dbobj.collection("EmployeeMasterData").insertMany(data1, function(err,res) {

   if(err) console.error(err);

   console.log("Successful");

   db.close();

});
});