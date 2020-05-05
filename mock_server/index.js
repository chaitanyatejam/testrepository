var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = new express();
var multer = require('multer')
app.use(express.static('web'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var db = __dirname + '/db';

var port = 3600;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/web/main-ui/assets/resources/assets')
    },
    filename: function (req, file, cb) {
        console.log('filename', file)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.send("I am listening");
})

app.post('/oauth/token', (req, res) => {
    if (req.body.refresh_token) {
        res.json({
            "access_token": new Date().getTime(),
            "token_type": "bearer",
            "refresh_token": "bb83f993-24bf-4952-9265-285640ae63a6",
            "expires_in": 1799,
            "scope": "read write"
        })
    } else {
        const userName = req.body.username.toLowerCase();
        const pass = req.body.password.toLowerCase();
        if (!users[userName]) {
            res.status(400);
            res.send('User Name is not valid');
            return;
        }
        if (pass !== users[userName]) {
            res.status(400);
            res.send('password is not valid');
            return;
        }
        res.json({
            "access_token": new Date().getTime() + '$' + userName,
            "token_type": "bearer",
            "refresh_token": "bb83f993-24bf-4952-9265-285640ae63a6",
            "expires_in": 1799,
            "scope": "read write"
        })
    }

})

var authGuard = function (req, res, next) {
    const headers = req.headers;
    if (headers.authorization) {
        next()
        // var token = headers.authorization.split('Bearer ')[1];
        // var diff = (new Date().getTime()) - Number(token);
        // // 5 min
        // if (diff > 300000) {
        //     res.status(401);
        //     res.json({
        //         message: 'Invalid access token'
        //     });
        // } else {
        //     next()
        // }
    } else {
        res.status(401);
        res.json({
            message: 'Not authorized'
        });
    }
}
app.use(authGuard)

app.get('/api/vux/getUserSettings/Mobile', (req, res) => {
    const headers = req.headers;
    if (!headers.authorization) {
        res.status(401);
        res.send('Token is not valid');
    }
    var username = headers.authorization.split('$')[1]
    res.sendFile(db + '/users/' + username + '.json');
})
app.get('/api/admin/getUserDetails', (req, res) => {
    const headers = req.headers;
    if (!headers.authorization) {
        res.status(401);
        res.send('Token is not valid');
    }
    var username = headers.authorization.split('$')[1]
    res.sendFile(db + '/users/' + username + '.json');
})
app.post('/api/oauth/revoke-token', (req, res) => {
    res.json({ success: true })
})

app.post('/api/vux/crud/saveOrUpdate', (req, res) => {

    updateformFile(res, req.body)
})

function updateformFile(res, data) {

    fs.writeFile(__dirname + '/db/form.json', JSON.stringify(data), err => { err ? res.sendStatus(500) : res.json({ success: true }).send() });
}



app.post('/api/vux/uploadFile', upload.single('file'), (req, res) => {
    // console.log('files', req.file);
    // fs.createWriteStream(imageName).write(imageBuffer);
    // var imageBuffer = req.body.file.buffer;
    // var imageName = 'public/images/map.png';
    // fs.createWriteStream(imageName).write(imageBuffer);
    res.status(200).json({
        message: 'uploaded',
    })
})

app.listen(port, '0.0.0.0', () => {
    console.log('server is listening on port: ' + port);
})

const users = {
    "admin": "admin",
    "form": "form",
    "samples": "samples",
    "webview": "webview",
    "tab": "tab",
    "td1v": "td1v",
    "ux": "ux",
    "demo": "demo",
    "krishna": "krishna"
}