const express = require("express");
const mysql = require('mysql2') ;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors() );
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user:"root",
    password:"Mysql@123",
    database: "LanguageLearningDB"

})

    // db.query(`select * from users`, (err, result, field)=>{
    //     if(err){
    //       return console.log(err);
    //     }
    //     return console.log(result);
    //   })

    //   db.query( "INSERT INTO `users`(`username`, `email`, `password`) VALUES ('Mampi', 'mampi@gmail.com', 'ASDqwe45667')", (err, data)=>{
    //     if(err){
    //       return console.log(err);
    //     }
    //     return console.log(data);
    //   })

    //     db.query( "SELECT lanuageOption FROM lanuageDetails", (err, data)=>{
    //     if(err){
    //       return console.log(err);
    //     }
    //     return console.log(data);
    //   })


app.post('/api/users/signup',(req,res) => {
    const sql = "INSERT INTO Users(`name`,`email`,`password`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
        
     ]
    db.query(sql,[values],(err,data) =>{
        if(err){
            return res.status(500).json("Error");
        }
        return res.status(200).json(data);
    })

})

app.post('/api/users/login',(req,res) => {
    const sql = "SELECT * FROM Users WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password ], (err, data) => {
        if(err){
            return res.status(500).json("Error");
        }
               if(data.length > 0) {                
                return res.status(200).json("Success");           
             } else {                
                return res.status(500).json("Fail");            
            }   
            
    })

})

app.get('/api/selectLanguage',(req,res) => {
    db.query("SELECT course_id,language,level FROM Courses", (err, data) => {
        if(err){
            return res.json("Error");
        }
               if(data.length > 0) {                
                return res.status(200).json(data);           
             } else {                
                return res.status(500).json("Fail");            
            }   
            
    })

})



app.get('/api/LearningDetails', (req, res) => {
    const { course_id } = req.query; // Get course_id from query parameters

    if (!course_id) {
        return res.status(400).json("Course ID is required");
    }

    db.query("SELECT `content_url` FROM Lesson WHERE `course_id` = ?",[course_id], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json("No content found for the specified course ID");
        }
    });
});


    app.listen(5000,()=>{
      console.log("listening");
  })