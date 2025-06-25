const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/feed.xml", (req, res) => {
	const xml = fs.readFileSync("feed.xml", "utf8");
	res.set("Content-Type", "application/rss+xml");
	res.send(xml);
});

app.get("/", (req, res) => {
	res.send("MOI RSS Feed Server is running. Go to /feed.xml");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
