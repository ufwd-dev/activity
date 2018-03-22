'use strict';

const {throwError} = require('error-standardize');

module.exports = function* createActivity(req, res, next) {
	const Activity = res.sequelize.model('ufwdActivity');
	const {startTime, closeTime} = req.body;

	const start= Date.parse(startTime);
	const close = Date.parse(closeTime);

	if (start >= close) {
		throwError('The activity startTime is later than closeTime.', 403);
	}

	const activity = yield Activity.create(req.body);

	res.data(activity);

	next();
};