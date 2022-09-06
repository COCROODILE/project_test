function resolveData(data) {
  var arr = []
  for (var k in data) {
    var str = k + '=' + data[k] //k:属性名 data[k]:属性值
    arr.push(str) //往数组里添加键值对
  }
  return arr.join('&') //将数组转化为字符串以&来拼接
}

/* var res=resolveData({
  name:'zhangsan',
  age:20
})
console.log(res); */

// options是外界传过来的一串参数
function itheima(options) {
  var xhr = new XMLHttpRequest()
  var qs = resolveData(options.data) //吧外界传递过来的参数转化为字符串格式

  if(options.method.toUpperCase()==='GET'){
    xhr.open(options.method,options.url+'?'+qs)
    xhr.send()
  }else if(options.method.toUpperCase()==='POST'){
    xhr.open(options.method,options.url)
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(qs)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result=JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}