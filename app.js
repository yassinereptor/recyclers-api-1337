const express  = require('express');
const compression = require('compression');
const cors = require('cors');
const router = require('./route');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const processImage = require('express-processimage'),
	root = __dirname + '/storage';
const cloudinary = require('cloudinary').v2
const app = express();

const _PORT = 80;
app.set('port', process.env.PORT || _PORT);
const isProduction = process.env.NODE_ENV === 'production';

mongoose.promise = global.Promise;

app.use(compression());
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use('/api', router);
//app.use(processImage({root: root})).use(express.static(root));
//
cloudinary.config({
	cloud_name: 'dg9ewdyq2',
	api_key: '175647555712414',
	api_secret: '8n6806U6hp-h1l4_prImDj7W2u0'
});

if(!isProduction) {
	app.use(errorHandler());
}

if(!isProduction) {
	app.use((err, req, res, next) => {
		res.status = err.status || 500;

		res.json = {
			errors: {
				message: err.message,
				error: err,
			},
		};
		next();
	});
}

app.get('/:type/:name', function (req, res, next) {
	var options = {
		root: __dirname + '/storage/' + req.params.type,
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}

	var fileName = req.params.name
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err)
		} else {
			console.log('Sent:', fileName)
		}
	})
})

app.get("/", (req, res)=>{
	res.json("Hello");
});

app.listen(app.get("port"), () => console.log('Server running on port : ' + _PORT));
