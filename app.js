let height=800,width=800, legend=100

let svg = d3.select('#canvas').attr("width",width).attr("height",height);
const color = d3.scaleSequential([0, 100], d3.interpolateBlues);


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
                                    "min": 24
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 69,
                                    "min": 15
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 15,
                                    "min": 37
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 28,
                                    "min": 15
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
                                    "min": 38
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 52,
                                    "min": 15
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 4,
                                    "min": 52
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 11,
                                    "min": 15
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
                                    "min": 24
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 35,
                                    "min": 15
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 5,
                                    "min": 46
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 13,
                                    "min": 15
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
                                    "min": 44
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 10,
                                    "min": 34
                                }
                            ]
                        },
                        {
                            "name": "VA",
                            "children": [
                                {
                                    "name": "Bestanden",
                                    "value": 4,
                                    "min": 52
                                },
                                {
                                    "name": "Nicht Bestanden",
                                    "value": 2,
                                    "min": 39
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

let treemap = d3.treemap().size([width, height - legend]).paddingInner(5)(hierarchy)

let BestandenArray = treemap.descendants().filter(d=>d.depth==4)
let CourseArray = treemap.descendants().filter(d=>d.depth==3)
let BachelorOrMasterArray = treemap.descendants().filter(d=>d.depth==2)
let StudyArray = treemap.descendants().filter(d=>d.depth==1)

let matchParent = (category) => {
    return CourseArray.findIndex(x=>x.data.name==category)
}


let cells = svg.selectAll(".cells")
.data(BestandenArray)
.enter()
.append("rect")
.attr("x", d=>d.x0)
.attr("y", d=>d.y0)
.attr("width", d=>d.x1-d.x0)
.attr("height", d=>d.y1-d.y0)
.style("stroke","white")
.style("fill", d=>color(d.data.min))