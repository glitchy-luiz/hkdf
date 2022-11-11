module.exports = (app)=>{
    app.get('/casa.ejs',(req,res)=>{
        res.render('casa.ejs')
    })
}