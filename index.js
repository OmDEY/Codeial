const express = require('express')
const port = 8000;
const app = express()
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'))
app.use(expressLayouts)
//extract style and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router

app.use('/', require('./routes/index'))

app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(port, function (err) {
    if(err){
        console.log(`Error in running the server : ${err}`)
    }

    console.log(`Server is running on port : ${port}`)
})