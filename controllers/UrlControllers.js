const ids = require('short-id');
const URL = require('../models/UrlsModels');

async function createShortUrl(req,res) {
    const body = req.body
    if(!body){
        return res.status(400).json({error:"url is requied"})
    }
    shortid = ids.generate();
    URL.create({
        shortId : shortid,
        originUrl : body.url,
        history : []
    });

    return res.render("home",{
        id:shortid
    });
}

async function createNewUri(req,res) {
    const Id = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId:Id},{$inc : {visit:1}});
    return res.redirect(entry.originUrl);
}

module.exports = {
    createShortUrl,
    createNewUri,
}