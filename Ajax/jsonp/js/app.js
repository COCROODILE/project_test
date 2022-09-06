const data={
    name:'vangie'
}
// console.log(data);

// 处理数据
function handle(data) {
    const result = document.querySelector('#result')
    result.innerHTML = data.name
}

handle(data)