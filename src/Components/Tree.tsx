import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface TreeNode {
  id: string;
  children?: TreeNode[];
}

interface Props {
  data: TreeNode;
  nodeRadius?: number; // Optional prop for customization (default: 4)
  nodeColor?: string; // Optional prop for customization (default: #fff)
  textColor?: string; // Optional prop for customization (default: #000)
  linkColor?: string; // Optional prop for customization (default: #ccc)
  linkStrokeWidth?: number; // Optional prop for customization (default: 1)
  enableNodeHover?: boolean; // Optional prop for interactivity (default: false)
  onNodeHover?: (node: TreeNode) => void; // Optional callback for hover interaction (default: empty function)
  nodeStroke?: string; // Optional prop for node stroke (default: #ccc)
  nodeStrokeWidth?: number; // Optional prop for node stroke width (default: 1)
  nodeHighlightOpacity?: number; // Optional prop for node hover highlight opacity (default: 1)
  nodeTextOpacity?: number; // Optional prop for unhovered node text opacity (default: 0.7)
  tooltipContent?: (node: TreeNode) => string; // Optional callback for custom tooltip content
  enableTooltips?: boolean; // Optional prop to enable tooltips (default: false)
}

const TreeChart: React.FC<Props> = ({
  data,
  nodeRadius = 4,
  nodeColor = "#fff",
  textColor = "#000",
  linkColor = "#ccc",
  linkStrokeWidth = 1,
  enableNodeHover = false,
  onNodeHover = () => {},
  nodeStroke = "#ccc",
  nodeStrokeWidth = 1,
  nodeHighlightOpacity = 1,
  nodeTextOpacity = 0.7,
  tooltipContent = (node) => node.id || "No tooltip content available", // Default tooltip content
  enableTooltips = false,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const treeLayout = d3.tree<TreeNode>().size([height, width]); // Swap width and height

    const root = d3.hierarchy<TreeNode>(data);

    // Calculate node positions with downward growth direction
    treeLayout(root);

    // Update links
    const links = svg.selectAll(".link").data(root.links());
    links
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", (d: any) => {
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          "C" +
          d.source.x +
          "," +
          (d.source.y + d.target.y) / 2 +
          " " +
          d.target.x +
          "," +
          (d.source.y + d.target.y) / 2 +
          " " +
          d.target.x +
          "," +
          d.target.y
        );
      })
      .attr("stroke", linkColor)
      .attr("stroke-width", linkStrokeWidth);

    // Update nodes
    const nodes = svg.selectAll(".node").data(root.descendants());
    nodes
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y)
      .attr("r", nodeRadius)
      .attr("fill", nodeColor)
      .attr("stroke", nodeStroke)
      .attr("stroke-width", nodeStrokeWidth)
      .on("mouseover", (event: any, d: any) => {
        if (enableNodeHover) setHoveredNodeId(d.data.id);
        onNodeHover(d.data); // Use d.data instead of d

        // Optional tooltip handling
        if (enableTooltips) {
          const tooltip = d3
            .select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

          tooltip
            .html(
              typeof tooltipContent === "function"
                ? tooltipContent(d.data) // Use d.data instead of d
                : tooltipContent
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px")
            .transition()
            .duration(200)
            .style("opacity", 0.9);
        }
      })
      .on("mouseout", () => {
        if (enableNodeHover) {
          setHoveredNodeId(null);

          // Optional tooltip handling
          if (enableTooltips) {
            d3.select("body")
              .select(".tooltip")
              .transition()
              .duration(200)
              .style("opacity", 0)
              .remove();
          }
        }
      });

    // Update text elements
    nodes
      .enter()
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d: any) => d.x + 8)
      .attr("y", (d: any) => d.y)
      .attr("text-anchor", "start")
      .attr("font-size", "10px")
      .attr("fill", textColor)
      .text((d: any) => d.data.id)
      .style("opacity", (d: any) =>
        d.data.id === hoveredNodeId ? nodeHighlightOpacity : nodeTextOpacity
      );
  }, [
    data,
    nodeRadius,
    nodeColor,
    textColor,
    linkColor,
    linkStrokeWidth,
    enableNodeHover,
    onNodeHover,
    nodeStroke,
    nodeStrokeWidth,
    nodeHighlightOpacity,
    nodeTextOpacity,
    tooltipContent,
    enableTooltips,
  ]);

  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex justify-center my-10">
        <svg
          ref={svgRef}
          width="100%"
          height="2000px" // Adjusted height
          viewBox="0 0 100% 2000" // Adjusted viewBox
        >
          <g transform="translate(20,20)"></g>
        </svg>
      </div>
    </div>
  );
};

export default TreeChart;
