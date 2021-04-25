jQuery(document).ready(function () {
	// get current user agent
	var userAgent = navigator.userAgent.toLowerCase();
	// if android exits index > -1 will be returned
	var isAndroid = userAgent.indexOf("android") > -1;
	// if isAndroid == true then our double tab script will be executed
	if (isAndroid === true && navigator.maxTouchPoints > 0) {
		Common.doubleTapToGo("#cm_navigation li:has(ul)");
	}
});


jQuery(document).ready(function (e) {

	function setCmEmptyForElements(element, hiddenElement) {
		if (jQuery(element).hasClass('cm_empty')) {
			if (hiddenElement == undefined) {
				jQuery(element).addClass('cm-templates-empty');
			} else {
				jQuery(hiddenElement).addClass('cm-templates-empty');
			}
		}
	}


	function setNavigationText() {
		try {
			if (beng.env.navigationText == undefined) {
				document.querySelector(' .mobile_navigation > a').innerHTML = '<i class="fa fa-bars"></i> ' + document.querySelector('.cm_current > a').innerText;
			} else {
				document.querySelector('.mobile_navigation a').innerHTML = '<i class="fa fa-bars"></i> <span></span>';
				document.querySelector('.mobile_navigation a > span').textContent = beng.env.navigationText;
			}
		} catch (e) {
			console.log("Error: " + e);
		}
	}

	setNavigationText();

	setTimeout(function () {
		// CM-EMPTY 
		setCmEmptyForElements('.cm-templates-footer');
		setCmEmptyForElements('.cm-templates-sidebar-container');
		setCmEmptyForElements('.cm-templates-title-container');
		setCmEmptyForElements('#logo');
		setCmEmptyForElements('#keyvisual');
		setCmEmptyForElements('#title');
		setCmEmptyForElements('#subtitle');
		setCmEmptyForElements('#widgetbar_site_1');
		setCmEmptyForElements('#widgetbar_site_2');
		setCmEmptyForElements('#widgetbar_page_1');
		setCmEmptyForElements('#widgetbar_page_2');


		if (jQuery('#widgetbar_site_1').hasClass('cm_empty') && jQuery('#widgetbar_page_1').hasClass('cm_empty') && jQuery('#widgetbar_site_2').hasClass('cm_empty')
			&& jQuery('#widgetbar_page_2').hasClass('cm_empty')) {
			jQuery('.cm-templates-sidebar-one').addClass('cm-templates-empty');
			jQuery('.design_content').css("width", "100%");
		}

		if (jQuery('#logo').hasClass('cm_empty') && jQuery('.title').hasClass('cm_empty') && jQuery('.subtitle').hasClass('cm_empty')) {
			jQuery('.head_wrapper').addClass('cm-templates-empty');
		}

	}, 100);



	//show mobile navigation
	jQuery('.mobile_navigation > a').click(function () {
		jQuery('body').toggleClass('open_navigation');
	});

});