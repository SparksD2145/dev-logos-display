import {Injectable} from '@angular/core';

@Injectable()
export class LogolistService {

  private logos: string[];

  constructor() {
    this.logos = [
      'angular.svg',
      'typescript.png',
      'reactivex.svg',
      'react.svg',

      'meteor-logo.svg',
      'ionic.svg',
      'cordova.svg',
      'electron.svg',
      'material-ui.svg',
      'materialize.svg',
      'bootstrap-4.svg',
      'foundation.svg',
      'JavaScript_logo_2.svg',
      'es6.svg',
      'HTML5_logo_and_wordmark.svg',
      'CSS.3.svg',

      'babel-10.svg',
      'webpack.svg',

      'sass-1.svg',
      'less.svg',

      'protactor.svg',
      'jasmine-2.svg',
      'karma.svg',
      'mocha-1.svg',
      'chai.svg',
      'eslint.svg',

      'nodejs.svg',

      'Npm-logo.svg',
      'yarn.png',
      'bower.svg',

      'pugpugjs.svg',
      'handlebars.svg',

      'git-icon.svg',
      'gitlab.svg',
      'bitbucket.svg',

      'grunt.svg',
      'gulp.svg',
      'jenkins-1.svg',
      'docker.svg',
      'projectatomic.svg',
      'vagrant.svg',
      'virtualbox.svg',

      'mongodb.png',
      'sequelize.svg',
      'mariadb.svg',
      'Postgresql_elephant.svg',
      'MySQL.svg',
      'sqlite.svg',
      'redis.svg',

      'elasticsearch.svg',

      'google-cloud.svg',
      'linode-1.svg',
      'digitalocean.svg',
      'heroku.svg',
      'mailgun.svg',
      'owncloud.jpg',
      'pushbullet.svg',

      'nodemon.svg',
      'socket-io.svg',
      'bluebird.png',
      'lodash.svg',
      'modernizr.svg',
      'chartjs.svg',
      'node-sass.svg',

      'Python-logo-notext.svg',
      'django.svg',
      'flask.svg',

      'express.png',
      'nginx.svg',
      'apache-13.svg',
      'xampp.svg',

      // Browsers
      'chrome-7.svg',
      'v8-5.svg',

      'firefox.svg',
      'gecko.gif',

      'microsoft-edge.svg',
      'internet-explorer-4.svg',

      'new-relic.svg',
      'google-analytics-3.svg',

      'jsfiddle.svg',

      'java.svg',
      'csharp.svg',
      'powershell.svg',
      'lua-5.svg',

      'eddystone.jpg',
      'json.svg',
      'yaml.svg',
      'oauth.svg',
      'physical-web.png',
      'open-source.svg',
      'markdown.svg',
      'rss.svg',

      'rackspace.svg',

      'jira.svg',
      'trello.svg',
      'slack-1.svg',
      'google-hangouts.svg',

      'vim.svg',
      'webstorm-icon.svg',
      'atom-4.svg',
      'photoshop-cc.svg',
      'adobe-illustrator-cc.svg',
      'after-effects.svg',
      'premiere.svg',
      'acrobat-pro.svg',
      'sketch.svg',
      'editorconfig.png',

      'mdn.svg',

      'Tux.svg',
      'Fedora_logo.svg',
      'centos.svg',
      'archlinux-logo-dark-scalable.518881f04ca9.svg',
      'debian-2.svg',
      'android.svg',
      'bash-3.svg',
      'Curl-logo.svg',
      'gnome-gnu-linux.svg',

      'macos.svg',
      'homebrew.png',
      'microsoft-windows-22.svg',

      'raspberry-pi.svg',

      'php-1.svg',
      'composer.svg',
      'wordpress-blue.svg',
      'jquery-1.svg',

      'google-nexus.svg',

    ];
  }
  getLogos(): string[] {
    return this.logos;
  }

}
