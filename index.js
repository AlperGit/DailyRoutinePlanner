import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));

//Render index.ejs file
app.get("/", (req, res) => {
    res.render("index.ejs");
});
//Listen on port 3000 for incoming traffick
app.listen(port, () => {
    console.log("Listening on port" + port);
});