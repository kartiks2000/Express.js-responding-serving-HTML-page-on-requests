// Responding with a HTML page on requests.
// We respond with HTML pages using the "res.sendFile()" , inside of which pass the address of the html file BUT we dont pass relative or absolute path directly because it does not need the path from our current location to the HTML file but from the Root of the OS to the HTML file.
// We do this by using the "path" module and then use the "path.join()" method to make the path automatically.

const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/addproduct');
});

router.use('/addproduct',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","addproduct.html"));
});

module.exports = router;