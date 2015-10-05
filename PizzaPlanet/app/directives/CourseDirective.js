
	app.directive('course', function() {
   //define the directive object
   var directive = {};
   
   //restrict = E, signifies that directive is Element directive
   directive.restrict = 'E';
   directive.controller= 'mainController';
   //template replaces the complete element with its text. 
   directive.templateUrl = 'course.html';

   directive.scope = {
   	course : "=course" 
   
   }
   return directive;
});