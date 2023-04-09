const connectToMongo=require('./db');
require('dotenv').config();
const cors=require('cors')
connectToMongo();   
const express = require('express')
const app = express()
const port = 4000;
app.use(express.json())
app.use(cors());
///avilable routes////////
app.use('/api/student',require('./routes/student'));
app.use('/api/teacher',require('./routes/teacher'));
app.use('/api/attendence',require('./routes/attendence'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/result',require('./routes/result'));

app.listen(port, () => {
  console.log(`inotebook app listening on port ${port}`)
})