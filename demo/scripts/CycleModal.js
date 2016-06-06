/**
 * @authors Cycle (marsak@Live.cn)
 * @date    2016-06-03 9:30
 * @version 1.0
 */
+(function($){
  var CycleGlobal = {
    global:function(){
      var cycle = {};
      cycle.showThisDom = function(x){$(".modal-content").hide();x.fadeIn(300);};
      return cycle;
    }
  };
  CycleModal = {
    modalForm:function(data){//类似form表单提交的效果
      var cycle = CycleGlobal.global();
      cycle.showModal = function(){//显示浮窗
      cycle.showThisDom(data.mainDom);
        data.mainDom.find(".modal-body").html(data.stuffDom.html());
        data.stuffDom.html("");
        $(".modal").addClass("CycleForm");
      };
      cycle.hideModal = function(){
        setTimeout(function(){
          data.stuffDom.html(data.mainDom.html());
          data.mainDom.find(".modal-body").html("");
          $(".modal").removeClass("CycleForm");
        },300);
      };
      return cycle;
    },
    modalMovie:function(data){//类似movie赋值参数展示类的效果
      var cycle = CycleGlobal.global();
      if(data.stuffHeight == ''||data.stuffHeight == undefined){
        data.stuffHeight = 360;
      }
      if(data.stuffWidth == ''||data.stuffWidth == undefined){
        data.stuffWidth = 640;
      }
      cycle.showModal = function(){
      cycle.showThisDom(data.mainDom);
        data.mainDom.find(".modal-body").html('<iframe width="'+data.stuffWidth+'" height="'+data.stuffHeight+'" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="'+data.stuffUrl+'"></iframe>');
        $(".modal").addClass("CycleMovie");
      };
      cycle.hideModal = function(){
        setTimeout(function(){
          data.mainDom.find(".modal-body").html("");
          $(".modal").removeClass("CycleMovie");
        },300);
      }
      return cycle;
    },
    modalHref:function(data){//类似href跳转的赋值参数展示类的效果
      var cycle = CycleGlobal.global();
      cycle.showModal = function(){
      cycle.showThisDom(data.mainDom);
        data.mainDom.find(".modal-body").html(data.stuffContent);
        $(".modal").addClass("CycleHref");
      };
      cycle.hideModal = function(){
        setTimeout(function(){
          data.mainDom.find(".modal-body").html("");
          $(".modal").removeClass("CycleHref");
        },300);
      }
      return cycle;
    }
  };
  return CycleModal;
})($);
