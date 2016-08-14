function Shatter(){
  this.delaytime = 500;
}
Shatter.prototype.nextpage = function(whenClickThisElement,thisShatterboxApper){
  this.elementCheck(whenClickThisElement)
  this.elementCheck(thisShatterboxApper)
  var thisObj = this
  $(whenClickThisElement).click(function(){
    $(whenClickThisElement).parent('.shatterbox').addClass('unseen')
    setTimeout(function(){
      $(thisShatterboxApper).removeClass('unseen')
    },thisObj.delaytime)
  })
  return $(whenClickThisElement)
}
Shatter.prototype.elementCheck = function(elem){
  if (!$(elem)) {
    return console.log(elem+" doesn't exist");
  }
}
