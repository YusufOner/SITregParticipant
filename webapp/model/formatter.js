sap.ui.define([
	], function () {
		"use strict";

		return {


			/**
			 * convert Preevening and Posteveningevent value 
			 * Y --> Yes
			 * N --> No
			 * M --> Maybe
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} true or false
			 */
			eventValue : function (sValue) {
				var oResourceBundle = this.getModel("i18n").getResourceBundle();
				var sResult = "";
				
				if (sValue === "Y") {
					sResult = "yes";
				}
				else if(sValue === "N"){
					sResult = "no";
				}
				else if(sValue === "M" || sValue === null){
					sResult = "maybe";
				}
				else if(sValue === "W"){
					sResult = "waitinglist";
				}
				return oResourceBundle.getText(sResult);

			},

			/**
			 * convert RSVP value from String to Boolean
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} true or false
			 */
			rsvpSwitchValue : function (sValue) {
				
				var bResult = new sap.ui.model.type.Boolean();
				
				if (!sValue) {
					return true;
				}
				if(sValue === "0"){
					bResult = false;
				}else{
					bResult = true;
				}
				return bResult;				

			},

			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			/**
			 * Return the Registration Numbers for the Event
			 *
			 * @public
			 * @param {int} iMaxParticipants Number of maximum participants
			 * @param {int} iParticipants Number of current participants
			 * @param {int} iFree Number of free places
			 * @returns {string} Registration Numbers
			 */
			registrationNumbers : function (iMaxParticipants, iParticipants, iFree) {
				if(iMaxParticipants !== null) {
			    	var oResourceBundle = this.getModel("i18n").getResourceBundle();
			    	return oResourceBundle.getText("masterRegistrationNumbers", [iFree, iParticipants, iMaxParticipants]);
				}
			},
			RSVPstatus : function (sRSVP) {
				var oResourceBundle = this.getModel("i18n").getResourceBundle();
				if(sRSVP === "Y") {
					return oResourceBundle.getText("masterRSVPstatusY");
				} else if(sRSVP === "W") {
					return oResourceBundle.getText("masterRSVPstatusWaitinglist");
				} else {
					return oResourceBundle.getText("masterRSVPstatusN");
				}
			}
		};

	}
);