service:
===========================

## POST /api/ufwd/service/activity
创建活动
```
{
    title: string,
    content: string,
    place: string,
    attract: string,
    startTime: date,
    closeTime: date,
}
```

## GET /api/ufwd/service/activity?keyword=string&tag=string,startTime=string,closeTime=string
查看所有的活动

## GET /api/ufwd/service/activity/:activityId
查看某一个活动

## PUT /api/ufwd/service/activity/:activityId
修改某一个活动
```
{
    place: string,
    startTime: date,
    closeTime: date
}
```

## DELETE /api/ufwd/service/activity/:activityId
删除某一个活动

## POST /api/ufwd/service/activity/:activityId/tag
给某个活动添加标签
```
{
    tag: string
}
```

## GET /api/ufwd/sevice/account/:accountId/activity
查看某个用户所有的的签到信息

## GET /api/ufwd/sevice/activity/:activityId/account
查看某个活动所有的的签到信息

app:
======================================

## GET /api/ufwd/app/activity?keyword=string&startTime=string&closeTime=string&tag=string
查看所有的活动

## POST /api/ufwd/app/activity/:activityId/signing
添加签到

## GET /api/ufwd/app/activity/:activityId/signing
查看自己的某条签到信息