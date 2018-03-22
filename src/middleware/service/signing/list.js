'use strict';

const {throwError} = require('error-standardize');

module.exports = function* getActivitySigninList(req, res, next) {
	const Signing = res.sequelize.model('ufwdSigning');
	const Activity = res.sequelize.model('ufwdActivity');
	const activityId = req.params.activityId;

	const activity = yield Activity.findOne({
		where: {
			id: activityId
		}
	});

	if (!activity) {
		throwError('The activity is not existed', 404);
	}

	const signingList = yield Signing.findAll({
		where: {
			activityId
		}
	});

	if (signingList.length === 0) {
		throwError('The signing is not existed', 404);
	}

	res.data(signingList);

	next();
};