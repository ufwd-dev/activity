'use strict';

const {throwError} = require('error-standardize');
const Sequelize = require('sequelize');

module.exports = function* getPublishedActivityList(req, res, next) {
	const Activity = res.sequelize.model('ufwdActivity');
	const ActivityTag = res.sequelize.model('ufwdActivityTag');
	const {keyword, startTime, closeTime, tag} = req. query;
	const query = {
		where: {
			published: 1
		},
		include: [{
			model: ActivityTag 
		}]
	};

	keyword ? (query.where.title = {[Sequelize.Op.like]: `%${keyword}%`}, query.where.content = {[Sequelize.Op.like]: `%${keyword}%`},
		query.where.place = {[Sequelize.Op.like]: `%${keyword}%`}, query.where.abstract = {[Sequelize.Op.like]: `%${keyword}%`}) : undefined;

	startTime ? (query.where.startTime = {[Sequelize.Op.gt]: new Date(startTime)}) : undefined;

	closeTime ? (query.where.closeTime = {[Sequelize.Op.gt]: new Date(closeTime)}) : undefined;
	

	tag ? (query.include[0].where = {}, query.include[0].where.tag = {[Sequelize.Op.like]: `%${tag}%`}) :undefined;

	const activityList = yield Activity.findAll(query);

	if (activityList.length === 0) {
		throwError('The activity is not existed.', 404);
	}

	res.data(activityList);

	next();
};