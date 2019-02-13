{
	urlProxy: "index.php",
	urlFramework: "js-i2b2/",
	//-------------------------------------------------------------------------------------------
	// THESE ARE ALL THE DOMAINS A USER CAN LOGIN TO
	lstDomains: [
		{ domain: "i2b2demo",
		  name: "HarvardDemo",
		  urlCellPM: "http://services.i2b2.org/i2b2/services/PMService/",
		  allowAnalysis: true,
		  //installer: "/webclient/plugin_installer/",
		  debug: false
		},
                { domain: "VCU",
                  name: "VCU",
                  urlCellPM: "http://act.cctr.vcu.edu:9090/i2b2/services/PMService/",
                  allowAnalysis: true,
                  //installer: "/webclient/plugin_installer/",
                  debug: false
                }
	]
	//-------------------------------------------------------------------------------------------
}
