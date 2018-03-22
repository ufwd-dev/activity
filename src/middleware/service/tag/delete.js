'use strict';

const {throwError} = require('error-standardize');

module.exports = function* deleteActivityTag(req, res, next) {
	const ActivityTag = res.sequelize.model('ufwdActivityTag');
	const tagId = req.params.tagId;
	
	const activityTag = yield ActivityTag.findOne({
		where: {
			id: tagId
		}
	});

	if (!activityTag) {
		throwError('The activityTag is not exsited.', 404);
	}

	const result = yield activityTag.destroy();

	res.data({
		destroy: result
	});

	next();
};