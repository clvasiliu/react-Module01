import express from 'express'

// INITIALIZE ROUTER AND APP
const app = express();
const router = express.Router();

// SET STATIC PATH
app.use(express.static('public'));

// CREATE ROUTER TO RUN ROUTES AND BIND ROUTER
router.get('/', (req, res) => {
    res.sendFile('index.html');
});
app.use(router);

// SET PORT AND LISTENER
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
