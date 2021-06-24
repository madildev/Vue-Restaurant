// More here -> https://www.npmjs.com/package/mssql
const sql = require('mssql/msnodesqlv8');
const config = {
  connectionString: 'Driver=SQL Server;Server=DESKTOP-85Q47S3;Database=test;Trusted_Connection=true;'
};
const dbConnection = sql.connect(config, err => {
    if(err) 
    { // SQL error, but connection OK.
      console.log(" Server Error:"+ err);
    } else 
    { // All is rosey in your garden.
      console.log("Database is connected Successfully");
    };
  });
dbConnection.on('error', err => { // Connection broked.
  console.log(".:The Bad Place:.");
  console.log("  Fork: "+ err);
});

module.exports = dbConnection;