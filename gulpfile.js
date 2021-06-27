const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const a = function (cb) {
  src("./src/src/*.js")
    .pipe(babel({
      "presets": ["@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "entry",//兼容，依赖core-js
            "corejs": '3',
            loose: true,
            modules: false
          }
        ]
      ]
    }))
    .pipe(dest("./libs/"))
  cb();
}
//编译js6到指定文件目录
exports.default = a;