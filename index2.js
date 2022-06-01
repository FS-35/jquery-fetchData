let L = ['a','b','c','bhg']
console.log(L.includes('dh') ? true : false)
const index = L.filter(ele=>{
    if(ele.includes('b')){
        console.log(ele.indexOf('b'))
        return true
    }else {
        return false
    }
})

console.log(index)
