const express = require("express");
const app = express();

app.get("/api/text", (req, res) => {
	res.json({ body: "text ok" });
});

const port = 4000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
