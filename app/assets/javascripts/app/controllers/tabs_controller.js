var tabsController = function ($scope) {
    $scope.tabs = [
        { title:"Проекты", content:"Dynamic content 1" },
        { title:"Альтернативи", content:"Dynamic content 2" },
        { title:"Критерии", content:"Dynamic content 2" },
        { title:"Оценка", content:"Dynamic content 2" },
        { title:"Результат", content:"Dynamic content 2" }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            alert("You've selected the alert tab!");
        });
    };

    $scope.navType = 'pills';
};