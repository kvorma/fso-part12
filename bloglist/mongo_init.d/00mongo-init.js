/* eslint-disable @stylistic/js/semi */
/* eslint-disable no-undef */
db = db.getSiblingDB('blogList');
db.createUser({
  user: 'blogAdmin',
  pwd: 'blogSekret',
  roles: [
    {
      role: 'readWrite',
      db: 'blogList',
    }
  ],
});

db.createCollection('users');
db.createCollection('blogs');

db = db.getSiblingDB('blogTest');
db.createUser({
  user: 'blogAdmin',
  pwd: 'blogSekret',
  roles: [
    {
      role: 'readWrite',
      db: 'blogTest',
    }
  ],
});

db.createCollection('users');
db.createCollection('blogs');