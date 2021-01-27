const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let requestObject;

app.get('/', (req, res) => {
    if (requestObject) {
        res.status(200)
            .send(JSON.stringify(requestObject));
        return;
    }

    res.status(200)
        .send('null');
});

app.post('/', (req, res) => {
    if (!requestObject) {
        requestObject = {...req.body};
        res.status(200)
            .send('ok');
        return;
    }

    res.status(400)
        .send();
});

app.put('/', (req, res) => {
    if (requestObject) {
        requestObject = {...req.body};
        process.stdout.write(requestObject)

        res.status(200)
            .send('ok');
        return;
    }

    res.status(400)
        .send();
});

app.patch('/', (req, res) => {
    if (requestObject) {
        requestObject = {...requestObject, ...req.body};
        res.status(200)
            .send('ok');
        return;
    }

    res.status(400)
        .send();
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
