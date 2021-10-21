
let $container = document.getElementById("container");
let $sun = document.getElementById("sun");

$sun.addEventListener("click",() => {
    if($container.classList.contains("dark-container")){
        $container.classList.remove("dark-container");
        document.body.classList.remove("dark-body");
    }else{
        $container.classList.add("dark-container");
        document.body.classList.add("dark-body");
    }

});

