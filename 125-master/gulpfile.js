let gulp=require('gulp');
let webserver=require('gulp-webserver')
gulp.task('webserver',function(){
    gulp.src('./')
    .pipe(webserver({
        host:'localhost',
        port:8080,
        open:true
    }))
})
gulp.task('ting',function(){
    gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8090,
        middleware:function(req,res){
            res.writeHead(200,{
                "content-Type":"text/json;charset:utf-8;",
                "Access-Control-Allow-Origin":"*"
            })
            var data=require('fs').readFileSync('data.json')
            res.end(data)
        }
    }))
})
gulp.task('default',['webserver','ting'])