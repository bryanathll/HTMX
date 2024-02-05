const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const multer = require('multer')

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage});

app.get('/', (req, res) =>{
    res.send('<h2> Welcome to the Node Hypermedia API </h2>');
})

app.post("/message", async (req, res)=>{

    // use setTimeout for loading indicator
//     setTimeout(() =>{
//         res.send(`<div><h3>Hello Motherfucker</h3><div>`);
//   },5000);
// })
    res.send(`<div><h3>Hello World!</h3><div>`);
})

app.post('/echopayload', async(req,res)=>{

    const email = req.body.email;
    const pass = req.body.pass;

    res.send(`<div> <b>Email:</b>${email}</div><b>Password:</b>${pass}`);
});

app.post("/upload", upload.single("file"), async (req, res) => {
    const filepath = req.file.path;
    console.log(filepath);
    res.send(`<b>Upload Successful</b>: ${filepath}`)
})

const PORT = process.env.PORT || 1330;

app.listen (PORT, () =>{
    console.log(`App is now running on post: ${PORT}`);
})