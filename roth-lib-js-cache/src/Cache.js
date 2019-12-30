

var roth = roth || {};
roth.lib = roth.lib || {};
roth.lib.js = roth.lib.js || {};
roth.lib.js.cache = roth.lib.js.cache || {};

var loadScript = loadScript || function(path, attributeMap)
{
	if(!attributeMap)
	{
		attributeMap = {};
	}
	var rothkey = "l" + new Date().getTime();
	var builder = "";
	builder += "<script ";
	attributeMap.src = path + "?key=" + rothkey;
	for(var name in attributeMap)
	{
		builder += name + "=\"" + attributeMap[name] + "\" ";
	}
	builder += "></script>";
	document.write(builder);
};


var loadLink = loadLink || function(path, attributeMap)
{
	if(!attributeMap)
	{
		attributeMap = {};
	}
	var builder = "";
	var rothkey = "k" + new Date().getTime();
	builder += "<link ";
	attributeMap.href = path + "?key=" + rothkey;
	attributeMap.rel = attributeMap.rel || "stylesheet";
	attributeMap.type = attributeMap.type || "text/css";
	for(var name in attributeMap)
	{
		builder += name + "=\"" + attributeMap[name] + "\" ";
	}
	builder += " />";
	document.write(builder);
};



roth.lib.js.cache.version = "1.0.3-SNAPSHOT";
