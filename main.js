menu_array_list = ["Chicken Tandori Pizza", "Margherita Pizza", "Extra Cheese Pizza", 
"Paneer Tikka Pizza", "Surpreme Veggie Pizza"];
 function getmenu() {
   console.log("I am in getmenu()");
   var htmldata;
   htmldata = "<ol class = 'menulist'>";
   menu_array_list.sort();
   for(var i = 0;i<menu_array_list.length;i++){
       htmldata = htmldata + "<li>" +menu_array_list[i]+"</li>";
   }
htmldata = htmldata +"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
 }
 function add_item() {
   var htmldata;
   var item = document.getElementById("add_item").valve;
   menu_array_list.push(item);
   menu_array_list.sort();
   htmldata = "<section class = 'cards'>";
   for(var i = 0;i<menu_array_list.length;i++){
 htmldata = htmldata +"<div class = 'card'>"+"<img src = 'images/pizzaImg.png'>"+menu_array_list[i]+
 "</div>";   
}
htmldata = htmldata+"</section>";
document.getElementById("display_addedmenu").innerHTML = htmldata;
 }
