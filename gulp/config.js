/**
 * Gulp config
 */

// Paths
const
    _root = './',                       // корневой каталог проекта
    _dist = 'dist/',                    // каталог, в который осуществляется сборка
    _src = 'src/',                      // каталог, в котором расположены исходники
    _css = 'css/',                      // подкаталог, в котором находятся стили
    _html = 'html/',                    // подкаталог, в котором находится разметка
    _js = 'js/',                        // подкаталог, в котором находятся скрипты
    _img = 'img/',                      // подкаталог, в котором находятся изображения
    _svg = 'svg/',                      // подкаталог, в котором находятся SVG-файлы
    _fonts = 'fonts/',                  // подкаталог, в котором находятся шрифты
    _maps = '../maps/',                 // подкаталог, в котором находятся карты кода
    _docs = 'docs/',                    // подкаталог, в котором находится сгенерированная документация
    _txtFrom = ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'];      // сопроводительные текстовые файлы

module.exports = {

    ghpOptions: {
        remoteUrl: "git@github.com:Enkil/front-kit.git"
    },
    
    paths: {
        root: _root,
        dist: _dist,
        src: _src,
        css: _css,
        html: _html,
        js: _js,
        img: _img,
        svg: _svg,
        fonts: _fonts,
        maps: _maps,
        txtFrom: _txtFrom
    },
    
    fonts: {
        src: _src + _fonts,
        dest: _dist + _fonts
    },

    html: {
        src: _src + _html,
        dest: _dist + _html,
        params: {
            pretty: devBuild
            // locals: {
            //     pkgVersion: pkg.version,
            //     pkgHomepage: pkg.homepage
            // }
        }
    },
    
    css: {
        mainFile: 'app.css',
        mainSrcFile: _src + _css + 'app.scss',
        src: _src + _css + '**/*.scss',
        dest: _dist + _css,
        destVendor: _src + _css + 'vendor/',
        autoprefixer: {
            browsers: ['last 3 versions', '> 1%', 'Firefox ESR']
        }
    },
    
    js: {
        src: _src + _js,
        dest: _dist + _js,
        destVendor: _src + _js + 'vendor/bower/',
        browserifySrc: [
            _src + _js + "app.js"
        ]
    },
    
    images: {
        src: [
            _src + _img + '**/*.*',
            '!client/src/img/sprite/*.*'
        ],
        dest: _dist + _img
    },
    
    pngSprite:{
        src: _src + _img + 'sprite/**/*.*',
        dest: _dist + _img + 'sprite/',
        destCSS: _src + _css + 'partials/abstracts/'
    },
    
    svg: {
        src: [
            _src + _svg + '**/*.*',
            '!client/src/svg/sprite/*.*'
        ],
        dest: _dist + _svg
    },

    svgSprite: {
        src: _src + _svg + 'sprite/**/*.*',
        dest: _dist + _svg + 'sprite/'
    },

    txt: {
        src: _txtFrom,
        dest: _dist
    },

    browserSync: {
        serve: {
            server: _dist,
            baseDir: _dist,
            directory: true,
            tunnel: false,
            host: 'localhost',
            port: 9000,
            injectChanges: true,
            logPrefix: "App"
        }
    },
    
    bower: {
        src: _src + 'vendor/'
    },
    
    docs: {
        srcHTML: _src + _html + '**/*.jade',
        srcCSS: _src + _css + '**/*.{css,scss,sass}',
        dest: _dist + _docs  
    }
};
