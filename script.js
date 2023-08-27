var arr = [
    { dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    story: "https://images.unsplash.com/photo-1643052734684-f7381029182e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
    { dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story: "https://images.unsplash.com/photo-1692721486777-65c1d2f6c7df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
    { dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    story: "https://images.unsplash.com/photo-1692733470142-bfa42928dc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
    { dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story: "https://images.unsplash.com/photo-1692751246822-147d13315cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
    { dp: "https://images.unsplash.com/photo-1543764477-646365e11da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1952&q=80",
    story: "https://images.unsplash.com/photo-1692715984205-451b1055249e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" }
];


var clutter = "";
arr.forEach(function(ele,index){
    clutter += `<div class="story">
    <img id="${index}" src="${ele.dp}" alt=""> 
</div>`
});

var stories = document.querySelector('.stories');
stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    // var value = arr[dets.target.id].story;
    document.querySelector('.full-img').style.display = "block";
    document.querySelector('.full-img').style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector('.full-img').style.display = "none";
    },1500);
});


var container = document.querySelector('.post');
var image = document.querySelector('#btn');
var like = document.querySelector('i');

image.addEventListener('dblclick',function(){
    like.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(function(){
        like.style.transform = 'translate(-50%,-50%) scale(0)';
    },800)
});