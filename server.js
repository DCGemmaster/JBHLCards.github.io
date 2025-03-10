const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Trading Card Game API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
