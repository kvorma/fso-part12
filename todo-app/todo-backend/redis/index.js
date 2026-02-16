const redis = require('redis')
//const { promisify } = require('util')
const { REDIS_URL } = require('../util/config')

let client

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  client.isReady = false
  client.get = redisIsDisabled
  client.set = redisIsDisabled
} else {
  client = redis.createClient({
    url: REDIS_URL
  })
  client.on('error', err => console.log('Redis Client Error', err));
  client.connect()
}

module.exports = client;