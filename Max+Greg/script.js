var facelocation=document.getElementById("thanks");
var faces = ["maxsface.jpg", "gregsface.jpg"];
var currentface=0;

function swapfaces() {
    facelocation.style.background = "url("+faces[(currentface+1)%2]+");";
    facelocation.style.backgroundSize="100%";
    currentface++;
    setTimeout(swapfaces, 3000);
}
