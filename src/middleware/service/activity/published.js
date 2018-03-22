'use strict';

const {throwError} = require('error-standardize');

module.exports = function* isPublished(req, res, next) {
	const Activity = res.sequelize.model('ufwdActivity');
	const activityId = req.params.activityId;

	const activity = yield Activity.findOne({
		where: {
			id: activityId,
			published: 0
		}
	});

	if (!activity) {
		throwError('The activity is not existed', 404);
	}

	res.data(activity);

	next();
};