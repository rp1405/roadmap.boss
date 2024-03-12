import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface TreeNode {
  id: string;
  children?: TreeNode[];
}

interface Props {
  data: TreeNode;
}

const TreeChart: React.FC<Props> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const treeLayout = d3.tree<TreeNode>().size([height, width]);

    const root = d3.hierarchy<TreeNode>(data);

    treeLayout(root);

    const links = svg.selectAll(".link").data(root.links());
    links
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", (d: any) => {
        return (
          "M" +
          d.source.y +
          "," +
          d.source.x +
          "C" +
          (d.source.y + d.target.y) / 2 +
          "," +
          d.source.x +
          " " +
          (d.source.y + d.target.y) / 2 +
          "," +
          d.target.x +
          " " +
          d.target.y +
          "," +
          d.target.x
        );
      });

    const nodes = svg.selectAll(".node").data(root.descendants());
    nodes
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("cx", (d: any) => d.y)
      .attr("cy", (d: any) => d.x)
      .attr("r", 4);

    nodes
      .enter()
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d: any) => d.y + 8)
      .attr("y", (d: any) => d.x)
      .text((d: any) => d.data.id);
  }, [data]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      style={{ border: "1px solid black" }}
    >
      <g transform="translate(40,20)"></g>
    </svg>
  );
};

export default TreeChart;
