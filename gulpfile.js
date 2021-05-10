const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const a=function (cb) {
  src("./src/src/*.js")
        .pipe(babel({
          "presets": ["@babel/preset-react"]
        }))
        .pipe(dest("./libs/"))
  cb();
}
//编译js6到指定文件目录
exports.default = a;