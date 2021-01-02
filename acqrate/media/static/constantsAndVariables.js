const TOGGLEMAPPAIR={
	".toUploadBtn":".toScanBtn",
	".toScanBtn":".toUploadBtn"
}	
const EVENTMANAGER = this;

var qrCodeValue;

function adjustToCenterX(className, parentName){
	var totalWidth=$(parentName).width();
	var subWidth=$(className).width();
	if(totalWidth>subWidth){
	    var marginWidth=(totalWidth-subWidth)/2;
	    $(className).css({"margin-left":marginWidth+"px"});
	}
}
function initializeClickEventsWoShadow(className){
	$(className).mousedown(function(){
		$(this).addClass("clicked");
	});
	$(className).mouseup(function(){
		$(this).removeClass("clicked");
	});
	$(className).on("touchstart", function(){
		$(this).addClass("clicked");
	});
	$(className).on("touchend", function(){
		$(this).removeClass("clicked");
	});
}

function initializeBtnEvents(className){
	$(className).mousedown(function(){
		$(this).removeClass("unClicked");
		$(this).addClass("clicked");
	});
	$(className).mouseup(function(){
		$(this).removeClass("clicked");
		$(this).addClass("unClicked");
	});
	$(className).on("touchstart", function(){
		$(this).removeClass("unClicked");
		$(this).addClass("clicked");
	});
	$(className).on("touchend", function(){
		$(this).removeClass("clicked");
		$(this).addClass("unClicked");
	});
}

function disableClick(element){
	$(element).off('mousedown');
	$(element).off('mouseup');
	$(element).off('touchstart');
	$(element).off('touchend');
	$(element).addClass("disableBtn");
}

function reenableClick(element){
	initializeBtnEvents(element);
	$(element).removeClass("disableBtn");
}

function reenableClickWoShadow(element){
	initializeClickEventsWoShadow(element);
	$(element).removeClass("disableBtn");
}

function isStringEqual(value1, value2){
	return value1.localeCompare(value2) == 0 ||
	value2 == "1";
}

function showModal(modalContentId){
	$(".modalContents").hide();
	$(modalContentId).show();
	$("#myModal").show();
}
