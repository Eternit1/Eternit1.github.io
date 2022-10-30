$(document).ready(function(){
    $(".head-nav").hover(function(){
        $(".head-nav-sub").slideDown("slow");
    });
    $(".back").mouseover(function(){
        $(".head-nav-sub").css("display","none");
    });
    $("#lg").click(function(){
        $(".loginback").css("display","block");
    });
    $(".close>a").click(function(){
        $(".loginback").css("display","none");
    });
});
// window.addEventListener('load',()=>{
//     document.querySelector("#lg").addEventListener("click",login)
// })
window.addEventListener('load',()=>{
    document.querySelector(".dl").addEventListener("click",login)
})
function login(){

    var name0 = "20391013";
    var pwd0 = "123456";
    var name = document.querySelector("#lg1").value;
    var pwd = document.querySelector("#lg2").value;
    if (name == name0&&pwd == pwd0){
        alert("登陆成功！")
        $(".loginback").css("display","none");
        document.getElementById("log").innerText="欢迎  "+name;
    }
    else {
        alert("用户名或密码错误,请重新输入！")
    }
}
function test(){
    var val = document.querySelector("#log").value;
}