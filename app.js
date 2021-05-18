const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("hello world");
});
app.get("/wha", (req, res) => {
	res.status(418);
	res.set("X-Wow", "Yep");
	res.send("Weird!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

