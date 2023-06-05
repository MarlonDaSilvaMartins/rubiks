const kociemba = require('kociemba');
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/index', function(req,res){
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Max-Age", "1800");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.setHeader('Content-Type', 'application/json');

    let cube = req.query.cube;
    console.log(cube);

    let solution = solveCube(cube);

    res.json({"solution" : solution});
})

app.use('/', router);
app.use(cors())
app.listen(process.env.port || 3000);
console.log('running');

function solveCube(cube){
    let solution = kociemba.solve(cube);
    console.log(solution);
    return solution;
}