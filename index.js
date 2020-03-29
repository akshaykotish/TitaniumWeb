var is_done = 0;

var body = document.getElementById("body");
var static_area = document.getElementById("static_area");
var fire1 = document.getElementById("fire1");
var fire3 = document.getElementById("fire3");
var fire4 = document.getElementById("fire4");
var logo = document.getElementById("logo");
var title = document.getElementById("title");
var tag_line = document.getElementById("tag_line");
var services = document.getElementById("services");
var white_field = document.getElementById("white_field");
var boxes = document.getElementsByClassName("box");

function check(){
    if(body.scrollTop >= 100 && is_done == 0){
        add_after_classes();
    }
    else if(body.scrollTop == 0 && is_done == 1)
    {
        remove_after_classes();
    }
    console.log(body.scrollTop);
}

function add_after_classes()
{
    static_area.classList.remove("static-pg");
    fire1.classList.remove("fire");
    fire3.classList.remove("fire3");
    fire4.classList.remove("fire4");
    logo.classList.remove("logo");
    title.classList.remove("title");
    tag_line.classList.remove("tag_line{");
    services.classList.remove("servicess");
    white_field.classList.remove("white-field");
    
    static_area.classList.add("afterstatic-pg");
    fire1.classList.add("afterfire");
    fire3.classList.add("afterfire");
    fire4.classList.add("afterfire");
    logo.classList.add("afterlogo");
    title.classList.add("aftertitle");
    tag_line.classList.add("aftertag_line");
    services.classList.add("afterservices");
    white_field.classList.add("afterwhite-field");

    for(var i=0; i<boxes.length; i++)
    {
        boxes[i].style.display = "none";
    }
    is_done = 1;
}


function remove_after_classes()
{
    static_area.classList.remove("afterstatic-pg");
    fire1.classList.remove("afterfire");
    fire3.classList.remove("afterfire");
    fire4.classList.remove("afterfire");
    logo.classList.remove("afterlogo");
    title.classList.remove("aftertitle");
    tag_line.classList.remove("aftertag_line");
    services.classList.remove("afterservices");
    white_field.classList.remove("afterwhite-field");

    static_area.classList.add("static-pg");
    fire1.classList.add("fire");
    fire3.classList.add("fire3");
    fire4.classList.add("fire4");
    logo.classList.add("logo");
    title.classList.add("title");
    tag_line.classList.add("tag_line");
    services.classList.add("services");
    white_field.classList.add("white-field");
    for(var i=0; i<boxes.length; i++)
    {
        boxes[i].style.display = "block";
    }
    is_done = 0;
}