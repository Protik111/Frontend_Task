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
            callback(null, tables);
        }
    });

}

function tableToCollection(mysqlConnection, tableName, mongoCollection, callback) {
    const sql = `SELECT * FROM ${tableName}`
    mysqlConnection.query(sql, function (error, results, fields) {
        // console.log('results', results);
        if (error) {
            callback(error);
        } else {
            if (results.length > 0) {
                mongoCollection.insertMany(results, function (error) {
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

    const db = client.db('mytestingdb');

    const MysqlCon = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysqlroot',
        database: 'daily'
    });

    MysqlCon.connect((err) => {
        if (err) throw err;
        console.log('MySql Connected');
    });

    getMysqlTables(MysqlCon, function (error, tables) {
        const collection = db.collection(tables[0]);
        tableToCollection(MysqlCon, tables[0], collection, function (error) {
            if (error) throw error;
        });
    });
});


app.get('/', (req, res) => {
    res.send("Server is working.")
})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})