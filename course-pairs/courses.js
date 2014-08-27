var width = 1280;
var height = 1000;

var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);

var force = d3.layout.force()
    .gravity(.05)
    .distance(300)
    .charge(-100)
    .size([width, height]);

function run(error, json) {
    var linkedByIndex = {};
    json.links.forEach(function(d) {
        linkedByIndex[d.source + "," + d.target] = 1;
    });

    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
    };

    /* force will build the index internally */
    force
        .nodes(json.nodes)
        .links(json.links)
        .start();

    var link = svg.selectAll(".link")
        .data(json.links)
        .enter().append("line")
        .attr("class", "link");

    var node = svg.selectAll(".node")
        .data(json.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(force.drag)
        .on("mouseover", fade(.1))
        .on("mouseout", fade(1));

    function fade(opacity) {
        return function(d) {
            if (d3.select(this).select(".show")[0][0] == null ) {
                d3.select(this).select(".hidden").attr("class", "show");
            } else {
                d3.select(this).select(".show").attr("class", "hidden");
            }
            node.style("stroke-opacity", function(o) {
                thisOpacity = isConnected(d, o) ? 1 : opacity;
                this.setAttribute('fill-opacity', thisOpacity);
                return thisOpacity;
            });

            link.style("stroke-opacity", function(o) {
                return o.source === d || o.target === d ? 1 : opacity;
            });

            link.style("stroke", function(o) {
                if (opacity == 0.1) {
                    return o.source === d || o.target === d ? "grey" : "#EEE";
                }
            });

            link.style("stroke-dasharray", function(o) {
                if (opacity == 0.1) {
                    return o.source === d || o.target === d ? "none" : "5,10,5";
                }
            });
        };
    }

    node.append("circle")
        .attr("r", 6);
    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.name.split("|")[0] });

    node.append("text")
        .attr("dx", 12)
        .attr("dy", "-1em")
        .attr("class", "hidden")
        .text(function(d) { return d.name.split("|")[1] });

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

        node.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
    });

}

d3.json("pairs.json", run);
