'use strict';

module.exports = function* updateActivity(req, res, next) {
	const activity = res.data();
	const construction = req.body;

	const result = yield activity.update(construction);

	res.data(result);

	next();
};