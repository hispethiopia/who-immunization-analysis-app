

Chart.pluginService.register({
	beforeDraw: function (chart, easing) {
		if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
			var ctx = chart.chart.ctx;
			ctx.save();
			ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
			ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
			ctx.restore();
		}
	}
});