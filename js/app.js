var ViewModel = function() {
  this.catName = ko.observable("John");
  this.catUrl = ko.observable("https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg");
  this.catCount = ko.observable(0);
  this.catLevel = ko.computed(function(){
    if(this.catCount()==3){
      return "infant";
    }else if(this.catCount()==5){
      return "baby";
    }else if(this.catCount()==10){
      return "adult";
    }
  },this);
  this.catClick = function(){
    this.catCount(this.catCount()+1);
  };
}

ko.applyBindings(new ViewModel());
