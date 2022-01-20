module.exports = (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">about</a></li>
            </ul>
                <h1>Rota About</h1>
            </body>
        </html>
    `);
}