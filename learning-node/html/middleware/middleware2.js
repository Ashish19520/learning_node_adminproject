const express = require('express');
const app = express();
const reqFilter=require('./middleware');
const router=express.Router();
const port = 4500;

router.use(reqFilter);
app.get('/', (req, res) => res.send('HOME PAGE!'))
router.get('/about', (req, res) => res.send('ABOUT PAGE'))
router.get('/users',reqFilter, (req, res) => res.send('USERS PAGE!'))
app.get("/help", (req, res) => res.send("HeLP PAGE!"));
app.use('/',router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))