/**
 * Gulp config
 */

// Paths
const
    _root =     './',
    _build =    'build/',                    // каталог, в который осуществляется сборка
    _src =      'src/',                      // каталог, в котором расположены исходники
    _css =      'css/',                      // подкаталог, в котором находятся стили
    _html =     '',                    // подкаталог, в котором находится разметка
    _js =       'js/',                        // подкаталог, в котором находятся скрипты
    _img =      'img/',                      // подкаталог, в котором находятся изображения
    _svg =      'svg/',                      // подкаталог, в котором находятся SVG-файлы
    _fonts =    'fonts/',                  // подкаталог, в котором находятся шрифты
    _maps =     '../maps/',                 // подкаталог, в котором находятся карты кода
    _docs =     'docs/',                    // подкаталог, в котором находится сгенерированная документация
    _txtFrom =  ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/img/favicon/manifest.json','src/img/favicon/browserconfig.xml','src/php/composer.json','src/php/form.php','src/php/functions.php','src/php/settings-sample.php','src/php/settings.php','src/php/services/sypex.php','src/php/services/google.php'];      // сопроводительные текстовые файлы

module.exports = {

    gitRepository: {
        remoteUrl: "git@github.com:Enkil/good-r.ru.git"
    },
    
    paths: {
        root: _root,
        build: _build,
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
        build: _build + _fonts
    },

    html: {
        src: _src + _html,
        build: _build,
        params: {
            // pretty: devBuild
            pretty: true
        }
    },
    
    css: {
        mainFile: 'app.css',
        mainSrcFile: _src + _css + 'app.scss',
        src: _src + _css + '**/*.scss',
        build: _build + _css,
        destVendor: _src + _css + 'vendor/',
        autoprefixer: {
            browsers: ['last 3 versions', '> 1%', 'Firefox ESR']
        }
    },
    
    js: {
        src: _src + _js,
        build: _build + _js,
        destVendor: _src + _js + 'vendor/bower/',
        browserifySrc: [
            _src + _js + "app.js"
        ]
    },
    
    images: {
        src: [
            _src + _img +'**/*.{jpg,jpeg,png,gif}',
            '!src/img/sprite/*.*'
        ],
        build: _build + _img
    },
    
    pngSprite:{
        src: _src + _img + 'sprite/**/*.*',
        build: _build + _img + 'sprite/',
        imgPath: '../' + _img + 'sprite/',
        destCSS: _src + _css
    },
    
    svg: {
        src: [
            _src + _svg + '**/*.*',
            '!/src/svg/sprite/*.*'
        ],
        build: _build + _svg
    },
    
    svgSprite: {
        src: _src + _svg + 'sprite/**/*.*',
        build: _build + _svg + 'sprite/'
    },
    
    txt: {
        src: _txtFrom,
        build: _build
    },
    
    browserSync: {
        serve: {
            server: _build,
            baseDir: _build,
            // directory: true,
            tunnel: false,
            host: 'localhost',
            port: 9000,
            injectChanges: true,
            logPrefix: "App"
        }
    },
    
    bower: {
        src: _src + 'vendor/'
    }
};
