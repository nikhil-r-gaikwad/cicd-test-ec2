const https = require("https");

const PORT = 443;

const server = https.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <body style="background-color: #3498db;">
            <h1>Hello from Node.js team by Nikhil   !!!!</h1>
            <p>Application deployed using GitHub Actions → AWS EC2</p>
        </body>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
