var initialCats = [{
        catName: "Rainy",
        catUrl: "https://c2.staticflickr.com/3/2406/2177097057_df86bce3f8_n.jpg",
        catCount: 0,
        nickNames:['rain rain','god calling you','whatever']
    }, {
        catName: "Kevin",
        catUrl: "https://c3.staticflickr.com/3/2346/2171640282_c8ca853a62_n.jpg",
        catCount: 0,
        nickNames:['gaven']
    }, {
        catName: "Holly",
        catUrl: "https://c1.staticflickr.com/3/2602/3977203168_b9d02a0233_m.jpg",
        catCount: 0,
        nickNames:['holland']
    }, {
        catName: "Sara",
        catUrl: "https://c2.staticflickr.com/8/7049/13244364473_7b71bc5a4f_n.jpg",
        catCount: 0,
        nickNames:['queen of pictures']
    }, {
        catName: "Sup",
        catUrl: "https://c5.staticflickr.com/8/7786/17202266828_46e1464ef1_n.jpg",
        catCount: 0,
        nickNames:['do.wong']
    }, {
        catName: "Test",
        catUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-mMhJoPJTLxf4xGX8Iy3_tWKMABW0O7-X4HZ9fcnDOqXvYK6eDucCcmX_",
        catCount: 0,
        nickNames:['oh shit','its test']
    }
]

var ViewModel = function() {
    var self=this;

    this.catList = ko.observableArray([]);


    initialCats.forEach(function(catItem){
      self.catList.push( new Model(catItem) );
    });

    self.catModel = ko.observable(self.catList()[0]);

    self.changeCurrentCat = function(beingClick){
      self.catModel(beingClick);
    }
    self.catClick = function() {
        self.catModel().catCount(self.catModel().catCount() + 1);
    };
};

var Model = function(object) {
    this.catName = ko.observable(object.catName);
    this.catUrl = ko.observable(object.catUrl);
    this.catCount = ko.observable(object.catCount);
    this.nickNames = ko.observableArray(object.nickNames);
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
