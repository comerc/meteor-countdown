Package.describe({
  name: 'comerc:countdown',
  summary: 'A jQuery countdown plugin',
  version: '0.1.0',
  git: 'https://github.com/comerc/meteor-countdown.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('jquery', 'client');
  api.addFiles([
    'countdown.js',
  ], 'client');
});
