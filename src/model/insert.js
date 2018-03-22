'use strict';

const lemonitor = require('lemonitor-service');
const sequelize = lemonitor.sequelize;

const Account = sequelize.model('account');
const Admini = sequelize.model('ufwdAdministrator');
const UfwdAccount = sequelize.model('ufwdAccount');
const { Activity, Signing, ActivityTag } = require('./activity');

Account.bulkCreate([
	{name: '11111', password: '123456'},
	{name: '22222', password: '123456'},
	{name: '33333', password: '123456'},
	{name: '44444', password: '123456'},
	{name: '55555', password: '123456'}
]);

Admini.create(
	{accountId: 1}
);
Admini.create(
	{accountId: 3}
);
Admini.create(
	{accountId: 4}
);

UfwdAccount.bulkCreate([
	{accountId: 1, name: '一', sex: 'female', phone: '138111111', examine: true},
	{accountId: 2, name: '二', sex: 'female', phone: '138222222', examine: true},
	{accountId: 3, name: '三', sex: 'male', phone: '138333333', examine: true},
	{accountId: 4, name: '四', sex: 'female', phone: '138444444', examine: true},
	{accountId: 5, name: '五', sex: 'male', phone: '138555555', examine: true}
]);

Activity.bulkCreate([
	{title: '活动一', content: '活动一', place: '地方一', startTime: '2018-03-22 07:53:22', closeTime: '2018-03-25 07:53:22', published: 1},
	{title: '活动二', content: '活动二', place: '地方二', startTime: '2018-03-23 07:53:22', closeTime: '2018-03-26 07:53:22', published: 1},
	{title: '活动三', content: '活动三', place: '地方三', startTime: '2018-03-24 07:53:22', closeTime: '2018-03-27 07:53:22', published: 1},
	{title: '活动四', content: '活动四', place: '地方四', startTime: '2018-03-25 07:53:22', closeTime: '2018-03-28 07:53:22', published: 0},
	{title: '活动五', content: '活动五', place: '地方五', startTime: '2018-03-26 07:53:22', closeTime: '2018-03-29 07:53:22', published: 0}
]);

ActivityTag.bulkCreate([
	{tag: '活动', activityId: 1},
	{tag: '建国', activityId: 1},
	{tag: '多人', activityId: 1},
	{tag: '活泼', activityId: 2},
	{tag: '喜庆', activityId: 2},
	{tag: '活动', activityId: 3},
	{tag: '多人', activityId: 3},
]);

Signing.bulkCreate([
	{accountId: 1, activityId: 1, time: '2018-03-22 07:53:22'},
	{accountId: 2, activityId: 1, time: '2018-03-22 07:53:22'},
	{accountId: 3, activityId: 1, time: '2018-03-22 07:53:22'},
	{accountId: 4, activityId: 1, time: '2018-03-22 07:53:22'},
	{accountId: 5, activityId: 1, time: '2018-03-22 07:53:22'},
	{accountId: 1, activityId: 2, time: '2018-03-23 07:53:22'},
	{accountId: 2, activityId: 2, time: '2018-03-23 07:53:22'},
	{accountId: 3, activityId: 2, time: '2018-03-23 07:53:22'},
	{accountId: 4, activityId: 2, time: '2018-03-23 07:53:22'},
	{accountId: 5, activityId: 2, time: '2018-03-23 07:53:22'},
	{accountId: 1, activityId: 3, time: '2018-03-24 07:53:22'},
	{accountId: 2, activityId: 3, time: '2018-03-24 07:53:22'},
	{accountId: 3, activityId: 3, time: '2018-03-24 07:53:22'},
	{accountId: 4, activityId: 3, time: '2018-03-24 07:53:22'},
	{accountId: 5, activityId: 3, time: '2018-03-24 07:53:22'},
]);