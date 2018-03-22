'use strict';

const {
	isAccountSignedIn,
	$testBody,
	$testQuery
} = require('express-handler-loader')('all');

const {
	isAdminiSignedIn,
} = require('express-handler-loader')('ufwd');

const {
	createActivity,
	getActivityList,
	getActivity,
	isPublished,
	updateActivity,
	deleteActivity,
	createActivityTag,
	deleteActivityTag,
	getAccountSigninList,
	getActivitySigninList,
	getPublishedActivityList,
	createSignin,
	getOwnSignin
} = require('express-handler-loader')('ufwd_activity');

const router = module.exports = require('express').Router();

router.post('/api/ufwd/service/activity', $testBody({
	properties: {
		title: {
			type: 'string',
			minLength: 4
		},
		content: {
			type: 'string'
		},
		place: {
			type: 'string',
			minLength: 4
		},
		abstract: {
			type: 'string'
		},
		startTime: {
			type: 'string',
			pattern: '(^(19|20)[0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ((1|0)[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$)'
		},
		closeTime: {
			type: 'string',
			pattern: '(^(19|20)[0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ((1|0)[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$)'
		},
		published: {
			type: 'string',
			pattern: '(^0$|^1$)'
		}
	},
	required: ['title', 'content', 'place', 'abstract', 'startTime', 'closeTime', 'published'],
	additionalProperties: false
}), isAdminiSignedIn, createActivity);

router.get('/api/ufwd/service/activity', $testQuery({
	properties: {
		keyword: {
			type: 'string'
		},
		tag: {
			type: 'string'
		},
		published: {
			type: 'string',
			pattern: '(^0$|^1$)'
		},
		startTime: {
			type: 'string'
		},
		closeTime: {
			type: 'string'
		}
	},
	additionalProperties: false
}), isAdminiSignedIn, getActivityList);

router.get('/api/ufwd/service/activity/:activityId', isAdminiSignedIn, getActivity);

router.put('/api/ufwd/service/activity/:activityId', $testBody({
	properties: {
		title: {
			type: 'string',
			minLength: 4
		},
		content: {
			type: 'string'
		},
		place: {
			type: 'string',
			minLength: 4
		},
		abstract: {
			type: 'string'
		},
		startTime: {
			type: 'string',
			pattern: '(^(19|20)[0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ((1|0)[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$)'
		},
		closeTime: {
			type: 'string',
			pattern: '(^(19|20)[0-9][0-9]-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ((1|0)[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$)'
		},
		published: {
			type: 'string',
			pattern: '(^0$|^1$)'
		}
	},
	additionalProperties: false
}), isAdminiSignedIn, isPublished, updateActivity);

router.delete('/api/ufwd/service/activity/:activityId', isAdminiSignedIn, isPublished, deleteActivity);

router.post('/api/ufwd/service/activity/:activityId/tag', $testBody({
	properties: {
		tag: {
			type: 'string'
		}
	},
	additionalProperties: false,
	required: ['tag']
}), isAdminiSignedIn, getActivity, createActivityTag);

router.delete('/api/ufwd/service/activity/tag/:tagId', isAdminiSignedIn, deleteActivityTag);

router.get('/api/ufwd/sevice/activity/:activityId/account', isAdminiSignedIn, getActivitySigninList);

router.get('/api/ufwd/sevice/account/:accountId/activity', isAdminiSignedIn, getAccountSigninList);

router.get('/api/ufwd/app/activity', $testQuery({
	properties: {
		keyword: {
			type: 'string'
		},
		tag: {
			type: 'string'
		},
		startTime: {
			type: 'string'
		},
		closeTime: {
			type: 'string'
		}
	}
}), isAccountSignedIn, getPublishedActivityList);

router.post('/api/ufwd/app/activity/:activityId/signing', isAccountSignedIn, createSignin);

router.get('/api/ufwd/app/activity/:activityId/signing', isAccountSignedIn, getOwnSignin);
