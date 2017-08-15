var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articalOne={
    title:'Artical one | zalak delvadiya',
    heading:'Artical one',
    date:'aug 14,2017',
    content:`
            <p>
                this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.HI
            </p>
            <p>
                this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.
            </p>
            <p>
                this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.
            </p>`
            
};
function createTemplete(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplete=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            
            ${content}
            
        </div>
        </div>
    </body>
    
</html>`

    ;
    return htmlTemplete;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one',function(req,res){
    res.send(createTemplete(articalOne));
});

app.get('/artical-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/artical-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
