/**
 * Created by Biousco on 3/22.
 */
/**
 * Created by Biousco on 3/21.
 */
define(['./../module'], function (controllers) {
  'use strict';
  controllers.controller('ArticlePostCtrl', ['$scope', 'ReviewService', '$state', 'modAlert',
    function ($scope, ReviewService, $state, modAlert) {

      $scope.postReview = function () {
        var datas = {
          title: $scope.title,
          brief: $scope.brief,
          content: $scope.content,
          banner: $scope.banner,
          product_id: $scope.product_id
        };
        ReviewService.addReview(datas).success(function (data) {
          if (data.ret_code == 0) {
            modAlert.success('文章发布成功！');
            $state.go('article.manage');
          }
        });
      };

      $scope.onUpload = function () {
        modAlert.success('图片上传中...请稍后');
      };

      $scope.fileCallback = function (response) {
        var data = JSON.parse(response.data);
        if (data.ret_code == 0) {
          $scope.banner = data.photo_url;
          modAlert.success('图片上传成功！');
        } else {
          modAlert.fail('图片上传失败...请重试：' + data.ret_msg);
        }
      };

    }]);
});
