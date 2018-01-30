let gulp=require('gulp');
let webserver=require('gulp-webserver')
let mock=require('mockjs')
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
                "Content-type":"text/json;charset=utf8",
                "Access-Control-Allow-Origin":"*"
            })
            if(req.url==='/mock'){
                let arr=[]
                for(var i=0;i<6;i++){
                    arr.push(mock.mock({
                        'title':'@ctitle(1,3)',
                        'name':'@cname(1,3)',
                        'img':`images/img${i+1}.png`
                    }))
                }
                res.end(JSON.stringify(arr))

            }
          
        }
    }))
})
gulp.task('default',['webserver','ting'])