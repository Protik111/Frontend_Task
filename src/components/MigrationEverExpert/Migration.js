const mysql = require("mysql2");
const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const app = express();

const port = 3000;



function getMysqlTables(mysqlConnection, callback) {
    mysqlConnection.query("show full tables;", function (error, results, fields) {
        if (error) {
            callback(error);
        } else {
            var tables = [];
            results.forEach(function (row) {
                for (let key in row) {
                    if (row.hasOwnProperty(key)) {
                        tables.push(row[key]);
                    }
                }
            });
            console.log('results', results);
            callback(null, tables);
        }
    });

}

function tableToCollection(mysqlConnection, tableName, mongoCollection, callback) {
    console.log('tablename', tableName);
    const sql = `SELECT * FROM ${tableName}`
    mysqlConnection.query(sql, function (error, results, fields) {
        console.log('results', results, fields);
        if (error) {
            callback(error);
        } else {
            if (fields.length > 0) {
                mongoCollection.insertMany(fields, {}, function (error) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null);
                        console.log('Inserted Successfully');
                    }
                });
            } else {
                callback(null);
            }
        }
    });
}

MongoClient.connect("mongodb://localhost:27017", function (error, client) {
    if (error) throw error;

    var db = client.db('mytestingdb');

    var MysqlCon = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysqlroot',
        database: 'bulk'
    });

    MysqlCon.connect((err) => {
        if (err) throw err;
        console.log('MySql Connected');
    });

    // var jobs = 0;

    getMysqlTables(MysqlCon, function (error, tables) {
        console.log('tables from sql ', tables);
        // tables.forEach(function (table) {
            const collection = db.collection(tables[0]);
            // ++jobs;
            tableToCollection(MysqlCon, tables[0], collection, function (error) {
                if (error) throw error;
                // --jobs;
            });
        // })
        console.log(tables);
    });

    // Waiting for all jobs to complete before closing databases connections.
    // const interval = setInterval(function() {
    //     if(jobs<=0) {
    //         clearInterval(interval);
    //         console.log('done!');
    //         client.close();
    //         MysqlCon.end();
    //     }
    // }, 300);
});


app.get('/', (req, res) => {
    res.send("Server is working.")
})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})