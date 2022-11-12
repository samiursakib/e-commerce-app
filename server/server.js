const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const Product = require('./models');

const port = process.env.PORT | 3000;
const uri = 'mongodb+srv://cluster0.yyp8n.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';
const app = express();
const upload = multer({ dest: 'uploads/'});

app.use(express.json());
app.use(express.urlencoded());
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('mongoose connected')
);

app.get('/', (req, res) => {
    res.send('home page');
});

app.post('/products/create', (req, res) => {
    // try {
        const { name, shortcode, price, quantity, description, countItems } = req.body;
        console.log(req.body, req.file);
        const { filename } = req.file.filename;
        console.log(req.body);
        const product = new Product({
            name,
            shortcode,
            price,
            // image: {
            //     data: null,
            //     contentType: 'image/png'
            // },
            quantity,
            description,
            countItems
        });
        console.log(product);
        product.save(function (err) {
            if (err)
                return console.error(err);
            else {
                res.send('product added');
            }
        });
    //     });
    //     const pizza = await Product.save({});
    //     res.send('data posted', pizza);
    // } catch (err) {
    //     console.log(err);
    // }
});

app.post('/test', (req, res) => {
    console.log(req.body);
    res.send('posted in home page');
});
app.listen(port, () => console.log('app listening on ', port));