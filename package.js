/* global Package */

Package.describe({
  name: 'msvmsv123:apollo-accounts',
  version: '3.3.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor accounts in GraphQL',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lauyilouis/meteor-apollo-accounts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2');

  api.use(
    [
      'tmeasday:check-npm-versions@0.3.1',
      'check',
      'accounts-base',
      'oauth2',
      'npm-bcrypt',
      'random',
      'ecmascript',
      'http',
      'random',
      'oauth',
      'service-configuration',
      'accounts-oauth',
    ],
    'server'
  );

  api.mainModule('src/index.js', 'server');
});

Package.onTest(function(api) {});
