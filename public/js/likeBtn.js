const love = document.getElementById('like-btn');
const num = document.getElementById('likeNum')

love.addEventListener(('click'), likeclick)


let like = 0;
var likeclick = function(){
    like++
    num.innerHTML =`${like}`
}

