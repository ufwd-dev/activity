'use strict';

// require('./insert');

const lemonitor = require('lemonitor-service');
const sequelize = lemonitor.sequelize;

const UfwdAccount = sequelize.model('ufwdAccount');
const { Activity, Signing, ActivityTag } = require('./activity');

Activity.hasMany(Signing, {
	foreignKey: 'activityId'
});
Signing.belongsTo(Activity, {
	foreignKey: 'activityId'
});

UfwdAccount.hasMany(Signing, {
	foreignKey: 'accountId'
});
Signing.belongsTo(UfwdAccount, {
	foreignKey: 'accountId'
});

Activity.hasMany(ActivityTag, {
	foreignKey: 'activityId'
});
ActivityTag.belongsTo(Activity, {
	foreignKey: 'activityId'
});