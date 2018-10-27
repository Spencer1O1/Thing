console.log("Hello! You are currently using javascript injector!")

function saveScript(){
	var value = document.getElementById("CreatedScript").value;

	console.log(value);

	chrome.storage.sync.set({key : value}, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error.");
		}
		console.log("Script saved as: " + value);
	});
}

function useScript(){
	chrome.storage.sync.get(['key'] , function(result) {
		if(!chrome.runtime.error) {		
			var usingScript = result.key;
			console.log(result.key);
		}
	});


}

document.getElementById("CreateScript").addEventListener("click", saveScript);
document.getElementById("UseScript").addEventListener("click", useScript);