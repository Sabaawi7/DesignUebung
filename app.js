let height=800,width=800, legend=100

let svg = d3.select('#canvas').attr("width",width).attr("height",height);
const color = d3.scaleSequential([0, 75], d3.interpolateBlues);


let data = {
    "name": "Root",
    "children": [
        {
            "name": "Wirtschaftsinformatik",
            "children": [
                {
                    "name": "Master",
                    "children": [
                        {
                            "name": "Viz",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 58,
                                    "timeToComplete": [69, 72, 46, 24, 78, 80, 72, 73, 58, 74, 48, 64, 68, 78, 73, 24, 54, 24, 58, 38, 77, 68, 48, 78, 75, 39, 64, 79, 78, 69, 63, 77, 68, 50, 72, 63, 63, 68, 83, 54, 60, 69, 69, 78, 68, 69, 78, 43, 73, 81, 73, 50, 68, 58, 68, 74, 63, 59]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 69,
                                    "timeToComplete": [58, 72, 79, 65, 63, 34, 79, 76, 64, 43, 63, 70, 36, 15, 71, 73, 34, 15, 65, 78, 71, 64, 68, 52, 73, 46, 52, 47, 70, 82, 72, 39, 48, 75, 48, 59, 86, 65, 78, 52, 15, 72, 45, 70, 39, 72, 65, 39, 58, 68, 49, 60, 73, 47, 72, 74, 80, 36, 75, 56, 75, 15, 64, 72, 34, 69, 15, 65, 24]
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 15,
                                    "timeToComplete": [78, 77, 77, 80, 76, 69, 78, 46, 58, 67, 37, 60, 46, 50, 72]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 28,
                                    "timeToComplete": [68, 58, 89, 63, 78, 79, 71, 52, 70, 79, 70, 67, 46, 43, 67, 67, 15, 76, 72, 77, 47, 74, 72, 34, 86, 15, 56, 63]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Bachelor",
                    "children": [
                        {
                            "name": "Viz",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 19,
                                    "timeToComplete": [61, 64, 63, 68, 59, 74, 68, 79, 74, 73, 65, 51, 77, 73, 38, 45, 78, 72, 79]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 52,
                                    "timeToComplete": [61, 68, 82, 72, 65, 75, 68, 34, 68, 76, 74, 49, 75, 68, 82, 61, 68, 44, 69, 68, 39, 71, 56, 49, 74, 50, 15, 66, 74, 30, 15, 67, 45, 72, 68, 50, 68, 74, 79, 37, 71, 68, 27, 65, 79, 66, 47, 79, 15, 63, 80, 63]
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 4,
                                    "timeToComplete": [52, 64, 52, 72]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 11,
                                    "timeToComplete": [49, 68, 81, 69, 50, 80, 75, 15, 62, 56, 45]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "(Wirtschafts-)Mathematik",
            "children": [
                {
                    "name": "Master",
                    "children": [
                        {
                            "name": "Viz",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 18,
                                    "timeToComplete": [74, 81, 50, 72, 81, 70, 79, 77, 78, 46, 69, 45, 65, 79, 63, 24, 68, 73]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 35,
                                    "timeToComplete": [67, 39, 70, 48, 78, 71, 75, 61, 60, 69, 68, 63, 63, 46, 76, 48, 37, 73, 64, 48, 51, 82, 70, 73, 74, 83, 24, 65, 15, 15, 68, 68, 72, 77, 81]
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 5,
                                    "timeToComplete": [48, 78, 75, 46, 68]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 13,
                                    "timeToComplete": [63, 34, 75, 72, 74, 49, 15, 79, 75, 69, 68, 65, 89]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Bachelor",
                    "children": [
                        {
                            "name": "Viz",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 13,
                                    "timeToComplete": [73, 76, 52, 85, 44, 82, 63, 51, 67, 79, 64, 51, 78]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 10,
                                    "timeToComplete": [34, 65, 83, 77, 69, 36, 64, 54, 72, 75]
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 4,
                                    "timeToComplete": [63, 81, 52, 56]
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 2,
                                    "timeToComplete": [39, 74]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}


let hierarchy = d3.hierarchy(data).sum(d=>d.value)

let treemap = d3.treemap().size([width, height - legend]).paddingInner(5).paddingOuter(5)(hierarchy)

let BestandenArray = treemap.descendants().filter(d=>d.depth==4)
let CourseArray = treemap.descendants().filter(d=>d.depth==3)
let BachelorOrMasterArray = treemap.descendants().filter(d=>d.depth==2)
let StudyArray = treemap.descendants().filter(d=>d.depth==1)



svg.selectAll(".study-cells")
    .data(StudyArray)
    .enter()
    .append("rect")
    .attr("x", d=>d.x0)
    .attr("y", d=>d.y0)
    .attr("width", d=>d.x1-d.x0)
    .attr("height", d=>d.y1-d.y0+45)
    .style("stroke","white")
    .style("fill", "lightgray")
    .attr("fill-opacity", 0.5)

svg.selectAll(".study-text")
    .data(StudyArray)
    .enter()
    .append("text")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0 + 13)
    .attr("text-anchor", "left")
    .attr("fill", "black")
    .text(d => d.data.name);


svg.selectAll(".BachelorOrMaster-cells")
    .data(BachelorOrMasterArray)
    .enter()
    .append("rect")
    .attr("x", d=>d.x0)
    .attr("y", d=>d.y0+10)
    .attr("width", d=>d.x1-d.x0)
    .attr("height", d=>d.y1-d.y0)
    .style("stroke","white")
    .style("fill", "lightgray")
    .attr("fill-opacity", 0.5)

svg.selectAll(".BachelorOrMaster-text")
    .data(BachelorOrMasterArray)
    .enter()
    .append("text")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0 + 22)
    .attr("text-anchor", "left")
    .attr("fill", "black")
    .text(d => d.data.name);

svg.selectAll(".Course-cells")
    .data(CourseArray)
    .enter()
    .append("rect")
    .attr("x", d=>d.x0)
    .attr("y", d=>d.y0+20)
    .attr("width", d=>d.x1-d.x0)
    .attr("height", d=>d.y1-d.y0)
    .style("stroke","white")
    .style("fill", "lightgray")
    .attr("fill-opacity", 0.5)

svg.selectAll(".Course-text")
    .data(CourseArray)
    .enter()
    .append("text")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0 + 32)
    .attr("text-anchor", "left")
    .attr("fill", "black")
    .text(d => d.data.name);


let cells = svg.selectAll(".cells")
    .data(BestandenArray)
    .enter()
    .append("rect")
    .attr("x", d=>d.x0)
    .attr("y", d=>d.y0+28)
    .attr("width", d=>d.x1-d.x0)
    .attr("height", d=>d.y1-d.y0)
    .style("stroke","white")
    .style("fill", d=>color(Math.min(...d.data.timeToComplete)))


svg.selectAll(".bestanden-text")
    .data(BestandenArray)
    .enter()
    .append("text")
    .attr("x", d => d.x0 + (d.x1 - d.x0) / 2)
    .attr("y", d => d.y0 +36+ (d.y1 - d.y0) / 2)
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .text(d => d.data.name.charAt(0));
    
