/* Nepali initialisation for the jQuery UI date picker plugin. */
/* Written by Rabins Sharma Lamichhane (rabinsxp.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.ne = {
	closeText: "बन्द",
	prevText: "अघिल्लो",
	nextText: "पछिल्लो",
	currentText: "आज",
	monthNames: [ "बैशाख","जेठ","असार","श्रावण","भदौ","आश्विन",
	"कार्तिक","मंसिर ","पुष","माघ","फाल्गुन","चैत्र" ],
	monthNamesShort: [ "बैशाख","जेठ","असार","श्रावण","भदौ","आश्विन",
	"कार्तिक","मंसिर ","पुष","माघ","फाल्गुन","चैत्र" ],
	dayNames: [ "आइतबार", "सोमबार", "मंगलबार", "बबुधबार", "बिहिबार", "शुक्रबार", "शनिबार" ],
	dayNamesShort: [ "आइत", "सोम", "मंगल", "बुध", "बिहि", "शुक्र", "शनि" ],
	dayNamesMin: [ "रवि", "सोम", "मंगल", "बुध", "बिहि", "शुक्र", "शनि" ],
	weekHeader: "हप्ता",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ne );

return datepicker.regional.ne;

} ) );