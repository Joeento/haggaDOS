'use strict';

const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const Room = require('./models/Room');

const PORT = process.env.PORT || 5000;

const app = express();
const router = express.Router();


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/rooms', function(req, res) {
	Room.find(function(err, rooms) {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: rooms });
	});
});

router.get('/room/:id', function(req, res) {
	Room.findById(req.params.id, function(err, room) {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: room });
	});
});

router.post('/rooms', function(req, res) {
	const room = new Room({
		name: req.body.name,
		page: 0
	});

	room.save(function(err) {
		return res.json({ success: true, data: room });
	});
});

router.post('/room/:id/page/:page', function(req, res) {
	Room.findById(req.params.id, function(err, room) {
		if (err) return res.json({ success: false, error: err });
		room.page = req.params.page;
		room.save(function(err) {
			if (err) return res.json({ success: false, error: err });
			return res.json({ success: true, data: room });
		});
	});
});


// append /api for our http requests
app.use('/api', router);

if (process.env.ENVIORNMENT === 'production') {
	app.use(express.static(path.resolve(__dirname, '../client/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
	});
}


// launch our backend into a port
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));