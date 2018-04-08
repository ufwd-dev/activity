'use strict';

const lemonitor = require('lemonitor-service');
const sequelize = lemonitor.sequelize;

const UfwdAccount = sequelize.model('ufwdAccount');
const { Activity, Attendance, ActivityTag } = require('./activity');

Activity.hasMany(Attendance, {
	foreignKey: 'activityId'
});
Attendance.belongsTo(Activity, {
	foreignKey: 'activityId'
});

UfwdAccount.hasMany(Attendance, {
	foreignKey: 'accountId'
});
Attendance.belongsTo(UfwdAccount, {
	foreignKey: 'accountId'
});

Activity.hasMany(ActivityTag, {
	foreignKey: 'activityId'
});
ActivityTag.belongsTo(Activity, {
	foreignKey: 'activityId'
});