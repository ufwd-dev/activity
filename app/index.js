'use strict';
import app from 'app';

import en_US from './i18n/en_US.yaml';
import zh_CN from './i18n/zh_CN.yaml';

app.i18n.mergeLocaleMessage('en', en_US);
app.i18n.mergeLocaleMessage('zh', zh_CN);

app.i18n.locale = 'zh';

app.menu.addGroup('ufwdActivity.menu.activity', [
	{
		label: 'ufwdActivity.activity.activities',
		path: '/ufwd/activity/list'
	},
]);

import Home from 'app/component/Home.vue';

import Activity from './component/Activity.vue';
import Detail from './component/Detail.vue';

app.router.addRoutes([
	{
		path: '/ufwd/activity',
		component: Home,
		meta: {
			requireAccount: true
		},
		children: [
			{
				path: 'list',
				component: Activity
			},
			{
				path: 'list/:id/detail',
				component: Detail
			}
		]
	}
]);