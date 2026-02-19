#!/bin/sh
set -e -x

# Setup prod and test db's and populate with example data

a=admin
u=blogAdmin
p=blogSekret
db=blogList
dev=blogTest

cd /docker-entrypoint-initdb.d
mongoimport --db=$db -u $u -p $p --authenticationDatabase $db --collection users initial_data/users.json
mongoimport --db=$db -u $u -p $p --authenticationDatabase $db --collection blogs initial_data/blogs.json
mongoimport --db=$dev -u $u -p $p --authenticationDatabase $dev --collection users initial_data/users.json
mongoimport --db=$dev -u $u -p $p --authenticationDatabase $dev --collection blogs initial_data/blogs.json
