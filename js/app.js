/**
 * Created by ET on 2016-03-21.
 */

(function(){

    //Object for platforms / devices clients can choose
    var platforms = [
        {name: 'iPhone'},
        {name: 'iPad'},
        {name: 'Android Phone'},
        {name: 'Android Tablet'},
        {name: 'Windows Phone'},
        {name: 'Web'},
        {name: 'Phonegap'}
    ];


    //Object for app features for clients to choose
    var features = [
        {name: 'Email Login', price: 1050},
        {name: 'Social Login', price: 1300},
        {name: 'Dashboard', price: 1200},
        {name: 'Activity Feed', price: 1300},
        {name: 'Rating System', price: 1050},
        {name: 'Camera / Photos', price: 1010},
        {name: 'GeoLocation', price: 1030},
        {name: 'Compass', price: 1500},
        {name: 'Custom User Interface', price: 1600},
        {name: 'Accept Payments', price: 100},
        {name: 'Sync Across All Devices', price: 1050},
        {name: 'User Profiles', price: 1050},
        {name: 'Camera / Video', price: 1100},
        {name: 'Audio / Music', price: 1020}
    ];

    var app = angular.module("buildAppCalculator", []);

    //controller for platform selection
    app.controller("PlatformController", function(){
        this.devices = platforms;
    });

    //Controller for app features
    app.controller("FeaturesController", function($scope){
       this.apps = features;
       this.listAppPrices = [];

       // // add name and price into the new array which is used to show in the table
       // this.addPrices = function(name, price){
       //     //Checks if the exact name, price property exists in the array and return boolean
       //     var found = this.listAppPrices.some(function (e){
       //         console.log(e.name);
       //        return ((e.name === name) && (e.price === price)) ;
       //     });

       //     //If found not true then push the new values into the array
       //     if(!found){
       //         this.listAppPrices.push({name: name, price: price});
       //     }
       // };

       // adds all the prices of the array which gives the total
       this.totalAppPrice = function(){
         var total = 0;
         for(var i = 0; i < this.listAppPrices.length; i++){
             total += this.listAppPrices[i].price;
         }
           return total;
       };

       // // remove the whole object in the array when remove is clicked
       // this.remove = function(index) {
       //     this.listAppPrices.splice(index, 1);
       // };
       $scope.dummyArray = [];
        var f = 0,
            x = 0,
            rem = false;
        this.setSelected = function(app, index) {
            console.log("app ", app);

            //remove an item
            if (app.selected) {
                console.log(" list ", $scope.dummyArray);
                $scope.dummyArray.forEach(function(e, ind) {
                    if (e.name === app.name) {
                        console.log(ind, " e ", e);
                        rem = true;
                        $scope.dummyArray.splice(ind, 1);
                    }
                });
                console.log("dumm ", $scope.dummyArray);

                this.listAppPrices = $scope.dummyArray;

            } else {
                rem = false;
            }
            //used to select a div and change its colour
            app.selected ? app.selected = false : app.selected = true;

            //add an item
            if (!rem) {
                if ($scope.dummyArray.length) {
                    $scope.dummyArray.forEach(function(each) {
                        console.log("each ");
                        if (each.name !== app.name) {
                            console.log("inside if ");
                            f = 1;
                        }
                    });
                } else {
                    console.log("inside else ");
                    $scope.dummyArray.push(app);

                }
                if (f === 1) {
                    f = 0;
                    console.log("push");
                    $scope.dummyArray.push(app);
                }
                console.log(" list--> ", $scope.dummyArray.length);
                this.listAppPrices = $scope.dummyArray;
            }

        }
    });
})();