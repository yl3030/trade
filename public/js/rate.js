// 長寬定義
var pn_width = $(".member_rate_plot_svg").width();
var pn_height = $(".member_rate_plot_svg").height();
var pn_margin = { left: 50, right: -1, top: 5, bottom: 35 };
var PNwidth = pn_width - pn_margin.left - pn_margin.right;
var PNheight = pn_height - pn_margin.bottom - pn_margin.top;
  
// 資料
  var PNdata = [
    [
      { date: "2020-10-30", num: -200 },
      { date: "2020-10-30", num: 100 },
      { date: "2020-10-31", num: 200 },
      { date: "2020-11-01", num: 300 },
      { date: "2020-11-02", num: 405 },
      { date: "2020-11-03", num: 500 },
      { date: "2020-11-04", num: 900 },
      { date: "2020-11-05", num: 100 },
      { date: "2020-11-06", num: 0 },
      { date: "2020-11-07", num: 700 },
      { date: "2020-11-08", num: 809 },
      { date: "2020-11-09", num: 100 },
      { date: "2020-11-10", num: 800 },
      { date: "2020-11-11", num: 400 },
      { date: "2020-11-12", num: 500 },
      { date: "2020-11-13", num: 300 },
      { date: "2020-11-14", num: 700 },
      { date: "2020-11-15", num: 100 },
      { date: "2020-11-16", num: 200 },
      { date: "2020-11-17", num: -140 },
      { date: "2020-11-18", num: 120 },
      { date: "2020-11-19", num: 600 },
      { date: "2020-11-20", num: 700 },
      { date: "2020-11-21", num: 900 },
      { date: "2020-11-22", num: 200 },
      { date: "2020-11-23", num: 50 },
      { date: "2020-11-24", num: -60 },
      { date: "2020-11-25", num: 300 },
      { date: "2020-11-26", num: 700 },
      { date: "2020-11-27", num: 200 },
      { date: "2020-11-28", num: 104 },
      { date: "2020-11-28", num: -200 },
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
let plotNum = $(".member_rate_plot").length;
for(let i = 1; i <= plotNum; i++){
  var PNsvg = d3
    .select("#ratePlot-" + i)
    .attr("width", pn_width)
    .attr("height", pn_height);

  // x、y軸定義
  var PNx = d3.scaleTime().rangeRound([0, PNwidth]);
  var PNx_axis = d3.axisBottom(PNx);
  var PNy = d3.scaleLinear().rangeRound([PNheight, 0]);
  var PNy_axis = d3.axisBottom(PNy);
  var xFormat = "%Y-%m-%d";
  var parseTime = d3.timeParse("%Y-%m-%d");

  // x、y軸範圍
  PNx.domain(
    d3.extent(PNdata[i-1], function (d) {
      return parseTime(d.date);
    })
  );
  PNy.domain([-200, 1000]);

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
    .style("stroke", "#2C90F4")
    .style("stroke-width", "2px")
    .attr("d", line);
  PNsvg.select(".line").style("fill", "#2C90F44A");

  // Add the X Axis
  PNg.append("g")
    .attr("transform", "translate(0," + PNheight + ")")
    // .call(d3.axisBottom(PNx).tickFormat(d3.timeFormat(xFormat)))

  // Add the Y Axis
  PNg.append("g")
    .call(d3.axisLeft(PNy).ticks(7))
    .attr("class", "yAxis")
    .selectAll(".tick")
    .select("text")
    .text(function (d) {
      return d + "%";
    })
    .style("font-family","lato")
    .style("color","#AFB2BD");

  // 點設定
//   let dataLength = PNdata[i-1].length;
//   let max=0, min=1000;
//   for(let j=1; j < dataLength-1; j++) {
//     if(PNdata[i-1][j].num > max) {
//         max = PNdata[i-1][j].num;
//     }
//     if(PNdata[i-1][j].num < min) {
//         min = PNdata[i-1][j].num;
//     }
//   }
PNsvg.selectAll("myCircles")
  .data(
    PNdata[i-1].filter(function (d) {
      return d;
    })
  )
  .enter()
  .append("circle")
  .attr("class", "dot")
  .attr("fill", "#fff") //點顏色
  .attr("stroke", "#2C90F4") //無外框
  .attr("cx", function (d) {
    //x座標
    return PNx(parseTime(d.date));
  })
  .attr("cy", function (d) {
    return PNy(d.num);
  })
  .attr("r", function (d) {
    if (PNy(d.num) == undefined) {
      return 0;
    } else {
      return 6;
    }
  })
  .attr("transform", "translate(" + pn_margin.left + "," + pn_margin.top + ")")
  .append("text").attr("class","rateNum")
  .text(function(d){
    return(d.num + "% " + d.date);
  });

PNsvg.selectAll("myCircles")
  .data(
    PNdata[i-1].filter(function (d) {
      return d;
    })
  )
  .enter()
  .append("text")
  .attr("class", function(d){
    return("d-" + d.date + " rateText")
  })
  .attr("dx", function (d) {
    //x座標
    return PNx(parseTime(d.date));
  })
  .attr("dy", function (d) {
    return PNy(d.num);
  })
  .attr("transform", "translate(15,-10)")
  .text(function(d){
    return(d.date);
  })
  .style("font-size","12px");


PNsvg.selectAll("myCircles")
  .data(
    PNdata[i-1].filter(function (d) {
      return d;
    })
  )
  .enter()
  .append("text")
  .attr("class", function(d){
    return("d-" + d.date + " rateText")
  })
  .attr("dx", function (d) {
    return PNx(parseTime(d.date));
  })
  .attr("dy", function (d) {
    return PNy(d.num);
  })
  .attr("transform", "translate(15,-25)")
  .text(function(d){
    return(d.num + "%");
  })
  .style("font-size","12px");

}




