var user=angular.module('user',[]);
user.controller('mainController',function($scope){
	
$scope.profile_pic="pic.png";
$scope.posts=[];
$scope.actualPosts=[];
$scope.showSlider=false;

$scope.openModal=function(){
$scope.message='';
$scope.showSlider=true;
};
$scope.openPicModal=function(){
$scope.message='';
$scope.showSliderPic=true;
};

$scope.postUpdate=function(){
	$scope.showSlider=false;
$scope.posts.push({type:"text",message:$scope.message,important:false});
}

$scope.insertPic=function(){
	$scope.showSliderPic=false;
$scope.posts.push({type:"img",pic_url:$scope.pic_url,pic_caption:$scope.pic_caption,important:false});
}
$scope.markImportant=function(post){
	var i=$scope.posts.indexOf(post);
	$scope.posts[i].important=!post.important
}
$scope.filterPosts=function(type){
	$scope.actualPosts=$scope.posts.slice(0);
var p=$scope.posts.filter(function(post){
	if (type=='important')
		return post.important;
	else
	return post.type==type;
});
$scope.posts=p;

}
$scope.search=function(){
	var text=$scope.search_value;
$scope.posts=$scope.actualPosts.slice(0);
var p=$scope.posts.filter(function(post){
	if (post.type=='text')
		return post.message.indexOf(text)!=-1;
	else
	return post.pic_caption.indexOf(text)!=-1;
});
$scope.posts=p;
}
})