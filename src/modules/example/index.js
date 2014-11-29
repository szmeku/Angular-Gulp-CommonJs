module.exports = function(app){

    app.config(['$stateProvider', function($stateProvider){

        $stateProvider
            .state('example',{
                url: '/',
                templateUrl: 'src/modules/example/index.html',
                controller: require('./example.ctrl.js')
            })

    }])
};