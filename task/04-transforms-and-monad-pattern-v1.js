const fs = require('fs');
const { Task, Either, Id } = require('./types');
const { Right, Left, fromNullable } = Either;
const { List, Map } = require('immutable-ext');

const httpGet = (path, params) =>
    Task.of(`${path}: result`)

const getUser = x => httpGet('/user', { id: x });
const getTimeline = x => httpGet(`/timeline/${x}`, {});
const getAds = () => httpGet('/ads', {});

let res = List([getUser, getTimeline, getAds])
    .traverse(Task.of, f => f())
    .fork(console.log, x => console.log(x.toJS()))