module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
            '  <%= pkg.name %> site v<%= pkg.version %>\n' +
            '  <%= pkg.license %> License\n' +
            '  Created by <%= pkg.author %>\n' +
            '*/\n\n',
    less: {
      production: {
        files: {
          "assets/css/app.min.css": "assets/_less/app.less"
        },
        options: {
          compress: true,
          banner: '<%= banner %>'
        }
      }
    },
    uglify: {
      custom: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'assets/js/app.min.js': 'assets/js/app.js'
        }
      },
      jquery: {
        files: {
          'assets/js/vendors/jquery.min.js': 'app/bower_components/jquery/dist/jquery.js'
        }
      }
    },
    connect: {
      // Static Server
      // npm install grunt-contrib-connect --save-dev
      server: {
        options: {
          port: 3000,
          // default is false
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify', 'less']);
  grunt.registerTask('server', ['connect:server']);
};