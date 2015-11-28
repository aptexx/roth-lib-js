
var NumberUtil = NumberUtil || (function()
{
	
	return {
		
		formatInt : function(value)
		{
			var parsedValue = parseInt(value);
			return !isNaN(parsedValue) ? parsedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
		},
		
		formatDecimal : function(value)
		{
			var parsedValue = parseFloat(value);
			return !isNaN(parsedValue) ? parsedValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
		},
		
		formatPercent : function(value, decimal)
		{
			var parsedValue = parseFloat(value);
			return !isNaN(parsedValue) ? (parsedValue * 100).toFixed(decimal) : "";
		}
		
	}
	
})();



