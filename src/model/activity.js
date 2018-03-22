'use strict';

const lemonitor = require('lemonitor-service');
const Sequelize = require('sequelize');
const sequelize = lemonitor.sequelize;

const Activity = sequelize.define('ufwdActivity', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	place: {
		type: Sequelize.STRING,
		allowNull: false
	},
	abstract: {
		type: Sequelize.STRING
	},
	startTime: {
		type: Sequelize.DATE,
		allowNull: false
	},
	closeTime: {
		type: Sequelize.DATE,
		allowNull: false
	},
	published: {
		type: Sequelize.TINYINT,
		defaultValue: 0,
		allowNull: false
	}
}, {
	paranoid: true
});

const Signing = sequelize.define('ufwdSigning', {
	time: {
		type: Sequelize.DATE,
		allowNull: false
	}
}, {
	paranoid: true
});

const ActivityTag = sequelize.define('ufwdActivityTag', {
	tag: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = { Activity, Signing, ActivityTag };