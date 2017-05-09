const env = process.env.NODE_ENV || 'development';

const apis_by_environment = {
  development : {
    playven : 'http://localhost:3030/api',
    playven_base : 'http://localhost:3030/',
    assets : 'http://localhost:3030'
  },
  test : {
    playven : 'http://localhost:3030/api',
    playven_base : 'http://localhost:3030/',
  },
  production : {
    playven : 'https://rc.playven.com/api',
    playven_base : 'https://rc.playven.com/',
    assets : 'https://rc.playven.com'
  }
}

module.exports = apis_by_environment[env];
