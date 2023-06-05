var images=["All.JPG","anusha.JPG","verti.JPG","Three.JPG"];
var names=["FAMILY","ANUSHA","VERTIKA","YADAIAH,DIVYA,VERTIKA"]
var i=0;

function next_btn()
{
i++;
var number_of_family_members=3;


if( i > number_of_family_members)
{
    i = 0;

}
var updated_images=images[i];
var updated_names= names[i];
document.getElementById("image").src= updated_images;
document.getElementById("names").innerHTML=updated_names;

}