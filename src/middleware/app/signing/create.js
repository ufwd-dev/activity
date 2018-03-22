'use strict';

const {throwError} = require('error-standardize');
const moment = require('moment');

module.exports = function* createSignin(req, res, next) {
	const accountId = req.session.accountId;
	const activityId = req.params.activityId;
	const Signing = res.sequelize.model('ufwdSigning');
	const Activity = res.sequelize.model('ufwdActivity');
	const date = moment(new Date(), 'YYYY-MM-DD HH:mm:ss');

	const activity = yield Activity.findOne({
		where: {
			id: activityId,
			published: 1
		}
	});

	if (!activity) {
		throwError('The activity is not existed.', 404);
	}

	const signing = yield Signing.findOne({
		where: {
			accountId, activityId,
		}
	});

	if (signing) {
		throwError('You have signined.', 403);
	}

	const newSignin = yield Signing.create({
		accountId, activityId,
		time: date
	});

	res.data(newSignin);

	next();
};