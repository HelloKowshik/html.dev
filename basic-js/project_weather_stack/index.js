const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// app.get('/', (req, res) => {
//     res.send('<h1>I am running on Node Server on PORT 4444</h1>');
// })
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => { 
    console.log('App is running on PORT: ' + PORT);
    mongoose.connect(`mongodb+srv://anik:12345@cluster0-ur9wb.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    }, () => { 
            console.log('Connected!');
    });
});