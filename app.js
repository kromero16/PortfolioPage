var main=function(){
	"use strict";

var addCommentFromInputBox = function(){
	var $new_comment;

	if($(".comment-input input") !== ""){
		$new_comment = $("<p>").text($(".comment-input input").val());
		$new_comment.hide();
		$(".comments").append(new_comment);
		$new_comment.fadeIn();
		$(".comment-input input").val("");
	}
}

}
$(document).ready(main);

