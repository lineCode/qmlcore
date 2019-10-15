var logPanelFlag = window["$manifest$logPanel"]

if (logPanelFlag) {
	console.log("LOGPANEL111")
	log = function(dummy) {
		var args = Array.prototype.slice.call(arguments)
		var logger = document.getElementById("logger") || undefined
		if (logger)
			logger.innerHTML += args.join(" ") + "<br>"
	}
} else {
	log = console.log.bind(console)
}