'use strict';

const {throwError} = require('error-standardize');

module.exports = function* getOwnSignin(req, res, next) {
	const accountId = req.session.accountId;
	const activityId = req.params.activityId;
	const Signing = res.sequelize.model('ufwdSigning');
	
	const signing = yield Signing.findOne({
		where: {
			accountId, activityId
		}
	});

	if (!signing) {
		throwError('The signing is not existed', 404);
	}
	res.data(signing);

	next();
};