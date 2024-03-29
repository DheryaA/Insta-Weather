

const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');
const { partials } = require('handlebars');
const PORT = process.env.PORT || 3000;


//public static path
const static_path = path.join(__dirname, "../public");
const template_path= path.join(__dirname, "../templates/views");
const partials_path= path.join(__dirname, "../templates/partials");
//setting view engine
app.set('view engine','hbs');
//folder name convert
app.set('views',template_path);
//register your partials
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


//routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather")
});

app.get("*", (req, res) => {
    res.render('404',{
        errorMsg:'Opps! Page Not Found'
    })
});

app.listen(PORT, () => {
    console.log(`this is hello from port ${PORT}`);
});



