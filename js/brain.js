// // Cache selectors
// var lastId,
//     topMenu = $("#top-menu"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href='#"+id+"']").parent().addClass("active");
//    }                   
// });

var heightPage, target;
var page1_Height, page2_Height, page3_Height, page4_Height, page5_Height;

window.onload = function(){

  var allHeight = 0; 
  page1_Height = allHeight; allHeight = $(".page_1").outerHeight() + allHeight; //     allHeight += page1_Height;
  page2_Height = allHeight; allHeight = $(".page_2").outerHeight() + allHeight; //     allHeight += page2_Height;
  page3_Height = allHeight; allHeight = $(".page_3").outerHeight() + allHeight; //     allHeight += page3_Height;
  page4_Height = allHeight; allHeight = $(".page_4").outerHeight() + allHeight; //     allHeight += page4_Height;
  page5_Height = allHeight; allHeight = $(".page_5").outerHeight() + allHeight; //     allHeight += page5_Height;

  // console.log('page1_Height - '+page1_Height+'['+$(".page_1").height()+'] >> '+$(".page_1").scrollTop());
  // console.log('page2_Height - '+page2_Height+'['+$(".page_2").height()+'] >> '+$(".page_2").scrollTop());
  // console.log('page3_Height - '+page3_Height+'['+$(".page_3").height()+'] >> '+$(".page_3").scrollTop());
  // console.log('page4_Height - '+page4_Height+'['+$(".page_4").height()+'] >> '+$(".page_4").scrollTop());

}

$(window).scroll(function(){
  target = $(window).scrollTop();
  var targetH = $(window).height();

  // console.log('targetH - '+targetH);
  // console.log('(targetH-target) - '+(targetH-target));

// console.log( target );
  // if(target <= $page1.position().top || target >= $page1.height()){
  //   $('.nav').find('nav_active').removeClass("nav_active");
  //   $page1.addClass("nav_active");
  //   console.log( 'page1' );
  // }

// target <= page4_Height
// console.log(target+' <= '+page4_Height );

  $('.nav').find('.nav_active').removeClass("nav_active");

  if(target <= page1_Height){
    $('div.nav_item:eq(0)').addClass("nav_active");
  }
  else if(target <= page2_Height){
    $('div.nav_item:eq(1)').addClass("nav_active");
  }
  else if(target <= page3_Height){
    $('div.nav_item:eq(2)').addClass("nav_active");
  }
  else if(target <= page4_Height){
    $('div.nav_item:eq(3)').addClass("nav_active");
  } 
  else{// if(target <= page5_Height){
    $('div.nav_item:eq(4)').addClass("nav_active");
  } 

  // if()
  // var page_1 = $(".page_1").position();
  // console.log('>> '+page_1);  

  // console.log(  );

});


// nav_item

$('.nav_item').on('click', function() {

  var Num = $(this).attr('data-num');
  // console.log(Num);
  // console.log(String('page'+Num+'_Height'));
  // console.log(this[String('page'+Num+'_Height')]);  
  // console.log(window[String('page'+Num+'_Height')]);  
  $(window).scrollTop(window[String('page'+Num+'_Height')]);

});