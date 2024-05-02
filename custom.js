import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
	var links = document.getElementsByTagName("a");
	for (var i = 0 ; i < links.length ; i++) {
  links[i].innerText = "test";
		alert(links[i]);
	}
}
