'use strict';

const {throwError} = require('error-standardize');

module.exports = function* getAccountSigninList(req, res, next) {
	const Signing = res.sequelize.model('ufwdSigning');
	const Account = res.sequelize.model('account');
	const accountId = req.params.accountId;

	const account = yield Account.findOne({
		where: {
			id: accountId
		}
	});

	if (!account) {
		throwError('The account is not existed', 404);
	}

	const signingList = yield Signing.findAll({
		where: {
			accountId
		}
	});

	if (signingList.length === 0) {
		throwError('The signing is not existed', 404);
	}

	res.data(signingList);

	next();
};