

var canvas = d3.select("body").append("svg").attr("width", 500).attr("height", 500);

d3.json("Data.json", function(data){
    var treemap = d3.layout.treemap()
        .size([500,500])
        .nodes(data)

    console.log(treemap)
})
