/**
 * @authors Cycle (marsak@Live.cn)
 * @date    2016-06-07 10:23
 * @version 2.0
 */
+(function($){
  var CycleGlobal = {
    global:function(){
      var cycle = {};
      cycle.showThisDom = function(x){$(".modal-content").hide();x.fadeIn(300);};
      return cycle;
    },
    create:function(data){
      var top = '<div class="modal fade" id="modal-simple" tabindex="-1" aria-labelledby="simple-label" style="display: none;"><div class="modal-dialog" role="dialog"><button type="button" class="close-new" data-dismiss="modal" aria-label="Close"><i class="photofont icon photo-tanchu-roundclose"></i></button>';

      var bottom = '</div></div>';
      var body = '';
      if(data){
        if(data.indexOf("form")>-1){
          body += '<div class="modal-content modal-content__form"><div class="modal-body"></div></div>';
        }
        if(data.indexOf("movie")>-1){
          body += '<div class="modal-content modal-content__movie"><div class="modal-body"></div></div>';
        }
        if(data.indexOf("href")>-1){
          body += '<div class="modal-content modal-content__href"><div class="modal-body"></div></div>';
        }
      }

      return top+body+bottom;
    }
  };
  CycleModal = {
    createNow:function(){
      var create = CycleGlobal.create($("#CycleModal").attr("data-type"));
      $("#CycleModal").html(create);
    },
    modalForm:function(data){//类似form表单提交的效果
      var cycle = CycleGlobal.global();
      cycle.showModal = function(){//显示浮窗
        cycle.showThisDom(data.mainDom);
        data.mainDom.find(".modal-body").html(data.stuffDom.html());
        data.stuffDom.html("");
        $(".modal").addClass("CycleForm");
      };
      $('#modal-simple').on('hide.bs.modal', function () {
        if(this.className.indexOf("CycleForm")>-1){
          setTimeout(function(){//隐藏
            data.stuffDom.html(data.mainDom.html());
            data.mainDom.find(".modal-body").html("");
            $(".modal").removeClass("CycleForm");
          },300);
        }
      });
      return cycle;
    },
    modalMovie:function(data){//类似movie赋值参数展示类的效果
      var cycle = CycleGlobal.global();
      if(!data.stuffHeight.toString()){
        data.stuffHeight = '360';
      }
      if(!data.stuffWidth.toString()){
        data.stuffWidth = '640';
      }
      cycle.showModal = function(){
        cycle.showThisDom(data.mainDom);
        data.mainDom.find(".modal-body").html('<iframe width='+data.stuffWidth+' height='+data.stuffHeight+' frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="'+data.stuffUrl+'"></iframe>');
        $(".modal").addClass("CycleMovie");
      };
      $('#modal-simple').on('hide.bs.modal', function () {
        if(this.className.indexOf("CycleMovie")>-1){
          setTimeout(function(){//隐藏
            data.mainDom.find(".modal-body").html("");
            $(".modal").removeClass("CycleMovie");
          },300);
        }
      });
      return cycle;
    },
    modalHref:function(data){//类似href跳转的赋值参数展示类的效果
      var cycle = CycleGlobal.global();
      cycle.showModal = function(){
        cycle.showThisDom(data.mainDom);
        data.mainDom.find(".modal-body").html(data.stuffContent);
        $(".modal").addClass("CycleHref");
      };
      $('#modal-simple').on('hide.bs.modal', function () {
        if(this.className.indexOf("CycleHref")>-1){
          setTimeout(function(){//隐藏
            data.mainDom.find(".modal-body").html("");
            $(".modal").removeClass("CycleHref");
          },300);
        }
      });
      return cycle;
    }
  };
  CycleModal.createNow();
  return CycleModal;
})($);
