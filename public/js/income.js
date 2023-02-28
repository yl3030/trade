// 長寬定義
var pn_width = $(".docu-item_plot_svg").width();
var pn_height = $(".docu-item_plot_svg").height();
var pn_margin = { left: -1, right: -1, top: 0, bottom: 0 };
var PNwidth = pn_width - pn_margin.left - pn_margin.right;
var PNheight = pn_height - pn_margin.bottom - pn_margin.top;
  
// 資料
  var PNdata = [
    [
      { date: "2020/10", num: 0 },
      { date: "2020/10", num: 20 },
      { date: "2020/11", num: 30 },
      { date: "2020/12", num: 45 },
      { date: "2021/01", num: 50 },
      { date: "2021/02", num: 90 },
      { date: "2021/03", num: 10 },
      { date: "2021/03", num: 0 },
    ],[
      { date: "2020/10", num: 0 },
      { date: "2020/10", num: 80 },
      { date: "2020/11", num: 30 },
      { date: "2020/12", num: 5 },
      { date: "2021/01", num: 20 },
      { date: "2021/02", num: 60 },
      { date: "2021/03", num: 30 },
      { date: "2021/03", num: 0 },
    ],[
      { date: "2020/10", num: 0 },
      { date: "2020/10", num: 80 },
      { date: "2020/11", num: 30 },
      { date: "2020/12", num: 5 },
      { date: "2021/01", num: 20 },
      { date: "2021/02", num: 60 },
      { date: "2021/03", num: 30 },
      { date: "2021/03", num: 0 },
    ],[
      { date: "2020/10", num: 0 },
      { date: "2020/10", num: 80 },
      { date: "2020/11", num: 30 },
      { date: "2020/12", num: 5 },
      { date: "2021/01", num: 20 },
      { date: "2021/02", num: 60 },
      { date: "2021/03", num: 30 },
      { date: "2021/03", num: 0 },
    ],[
      { date: "2020/10", num: 0 },
      { date: "2020/10", num: 80 },
      { date: "2020/11", num: 30 },
      { date: "2020/12", num: 5 },
      { date: "2021/01", num: 20 },
      { date: "2021/02", num: 60 },
      { date: "2021/03", num: 30 },
      { date: "2021/03", num: 0 },
    ]
  ]


//   圖表定義
let plotNum = $(".docu-item").length;
for(let i = 1; i <= plotNum; i++){
  var PNsvg = d3
    .select("#docuPlot-" + i)
    .attr("width", pn_width)
    .attr("height", pn_height);

  // x、y軸定義
  var PNx = d3.scaleTime().rangeRound([0, PNwidth]);
  var PNx_axis = d3.axisBottom(PNx);
  var PNy = d3.scaleLinear().rangeRound([PNheight, 0]);
  var PNy_axis = d3.axisBottom(PNy);
  var xFormat = "%Y/%m";
  var parseTime = d3.timeParse("%Y/%m");

  // x、y軸範圍
  PNx.domain(
    d3.extent(PNdata[i-1], function (d) {
      return parseTime(d.date);
    })
  );
  PNy.domain([0, 100]);

  //   折線定義
  var line = d3
    .line()
    .x(function (d) {
      return PNx(parseTime(d.date));
    })
    .y(function (d) {
      return PNy(d.num);
    })
    .defined(function (d) {
      return d.num != null;
    });

  // 圖表位置
  var PNg = PNsvg.append("g").attr(
    "transform",
    "translate(" + pn_margin.left + "," + pn_margin.top + ")"
  );

  // 圖表設定
  PNg.append("path")
    .datum(PNdata[i-1])
    .attr("class", "line")
    .style("stroke", "#56C63A")
    .style("stroke-width", "2px")
    .attr("d", line);
  PNsvg.select(".line").style("fill", "#56C63A4D");

  // Add the X Axis
  PNg.append("g")
    .attr("transform", "translate(0," + PNheight + ")")
    .style("opacity","0")
    .call(d3.axisBottom(PNx).tickFormat(d3.timeFormat(xFormat)))

  // Add the Y Axis
  PNg.append("g")
    .call(d3.axisLeft(PNy).ticks(2))
    .attr("class", "yAxis")
    .style("opacity","0")

}


