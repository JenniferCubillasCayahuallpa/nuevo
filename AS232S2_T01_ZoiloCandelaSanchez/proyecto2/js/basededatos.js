// importar librerias
var express = require('express');
var mysql = require('mysql');
var cors = require ('cors');
var path = require ('path');
var app =express ( );

//utilizamos librerias

app .use(express.json( ));
app .use (express.static(path.join(__dirname, 'static' )));
app .use (cors( ));

var connection =mysql.createConnection(
    {
             host: "localhost",
             user: "root",
             password: "admin",
             database: "db_colegio"
    }
);

//comprobando la conexión
connection.connect(function (err) {
    if(err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
}
);

const port = process.env. PORT || 3000;
app.listen ( port , function ( ){
console.log ("Servidor funcionando en" + port);
});

app.get("/",function(req,res){
    console.log("Ruta inicial")
});

app.get("/api/dates/:current",(req,res) => {
    var request =req.params.current;
    connection.query(
        "select nombre, descripcion, DATE_FORMAT(dia, '%d/%m/%Y') AS dia from calendarie where dia = '" + request +"'",
        function(err,row,fields){
            if(err){
                throw err;
            }else if(row[0] !=null){
                res.json(
                    row[0]
                );
            }else{
                res.json(null)
            }
        }
    )
})