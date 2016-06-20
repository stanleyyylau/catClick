var ViewModel = function() {
    var self=this;
    self.catModel = ko.observable(new Model());
    self.catClick = function() {
        alert("test");
        self.catModel().catCount(self.catModel().catCount() + 1);
    };
};

var Model = function() {
    this.catName = ko.observable("John");
    this.catUrl = ko.observable("https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg");
    this.catCount = ko.observable(0);
    this.nickNames = ko.observableArray([{
        catName: "pussy"
    }, {
        catName: "doddy"
    }, {
        catName: "haha"
    }]);
    this.catLevel = ko.computed(function() {
        if (this.catCount() == 3) {
            return "infant";
        } else if (this.catCount() == 5) {
            return "baby";
        } else if (this.catCount() == 10) {
            return "adult";
        }
    }, this);
};

ko.applyBindings(new ViewModel());
