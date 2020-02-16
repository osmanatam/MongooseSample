var models = require('./../spotifymongoose');


const webusermanager = {
    add: (req,res) => {
        var webuser = new models.webuser();
        webuser.email = req.body.email;
        webuser.password = req.body.password;

        webuser.save((err,result) => {
            if(!err){
                res.send("Success!");

            }
        })
    },
    getall: (req,res) => {
        models.webuser.find({},(err,document) => {
            if(!err){
                res.json(document);
            }
        })
    }
}

module.exports = {
    webusermanager
}
