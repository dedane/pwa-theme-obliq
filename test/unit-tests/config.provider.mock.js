let configFile = {
  'export': {
    'categories': {
      'find': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportcategories',
      'findOne': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportcategory'
    },
    'posts': {
      'find': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportarticles',
      'findOne': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportarticle'
    },
    'pages': {
      'find': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportpages',
      'findOne': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportpage'
    },
    'comments': {
      'find': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=exportcomments',
      'insert': '//dev2.techlady.co/wp-content/plugins/wordpress-mobile-pack/export/content.php?content=savecomment'
    }
  },
  'translate': {
    'path': 'https://s3-eu-west-1.amazonaws.com/appticles-devel/others/locales3/de_DE.json'
  },
  'socialMedia': {
    'facebook': true,
    'twitter': true,
    'google': true
  },
  'commentsToken': 'ZWVjY2I0ZTU3MGMwOWMwNWI1YTZmMzE5MjM0MWE1YmZfMTQ1ODk0MTQxMA==',
  'articlesPerCard': 'auto',
  'homeText': 'This is some homepage content',
  'websiteUrl': '//dev2.techlady.co?wmp_theme_mode=desktop',
  'logo': '//cdn-kits.appticles.com/resources/images/logo.png',
  'icon': '//cdn-kits.appticles.com/resources/icons/152x152.png',
  'defaultCover': '//cdn-kits.appticles.com/resources/covers/phone/pattern-1.jpg',
  'googleAds': {
    'adsInterval': 15,
    'phone': {
      'networkCode': 1060237,
      'adUnitCode': 'dev.demo.ad.test1',
      'sizes': [
        [
          336,
          280
        ],
        [
          300,
          300
        ],
        [
          300,
          250
        ],
        [
          250,
          250
        ]
      ]
    },
    'tablet': null
  }
};

angular.module('appticles.configuration')
  .provider('configuration', globalConfigurationProvider);

/**
 * @ngdoc service
 * @name appticles.configuration.globalConfigurationProvider
 *
 * @description Wraps over the application configuration provided by the configuration service
 * before the application is bootstrapped
 *
 * @return {Object} The configuration object retrieved from the configuration service
 */
function globalConfigurationProvider() {

  this.$get = () => configFile;
};
