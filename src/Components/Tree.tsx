import React from "react";
import Tree, { TreeLinkDatum } from "react-d3-tree";

const data = {
  name: "Internet",
  children: [
    {
      name: "HTML",
      children: [
        {
          name: "CSS",
          children: [
            {
              name: "JavaScript",
              children: [
                {
                  name: "React.js",
                  children: [
                    {
                      name: "Node.js",
                      children: [
                        {
                          name: "Express.js",
                          children: [
                            {
                              name: "MongoDB",
                              children: [
                                {
                                  name: "Hosting",
                                  children: [
                                    { name: "Native" },
                                    { name: "Extra1" },
                                    { name: "Extra2" },
                                    { name: "Extra3" },
                                  ],
                                },
                                { name: "Extra4" },
                                { name: "Extra5" },
                                { name: "Extra6" },
                              ],
                            },
                            { name: "Extra7" },
                            { name: "Extra8" },
                            { name: "Extra9" },
                          ],
                        },
                        { name: "Extra10" },
                        { name: "Extra11" },
                        { name: "Extra12" },
                      ],
                    },
                    { name: "Extra13" },
                    { name: "Extra14" },
                    { name: "Extra15" },
                  ],
                },
                { name: "Extra16" },
                { name: "Extra17" },
                { name: "Extra18" },
              ],
            },
            { name: "Extra19" },
            { name: "Extra20" },
            { name: "Extra21" },
          ],
        },
        { name: "Extra22" },
        { name: "Extra23" },
        { name: "Extra24" },
      ],
    },
    { name: "Extra25" },
    { name: "Extra26" },
    { name: "Extra27" },
  ],
};

const pathClassFunc = (linkData: TreeLinkDatum, orientation: String) => {
  if (linkData.target.children) {
    return "diagonal";
  } else {
    return "step";
  }
};

export default function OrgChartTree() {
  const myTreeConfig = {
    nodeSize: { x: 200, y: 200 }, // Adjust the size of nodes
    separation: { siblings: 2, nonSiblings: 2 }, // Adjust the separation between nodes
    depthFactor: 500, // Adjust the distance between levels
    translate: { x: 500, y: 50 }, // Adjust the position of the tree
    orientation: "vertical", // Set the orientation of the tree
  };

  return (
    <div className="flex justify-center">
      <div className="w-[70%] h-[500px]">
        <Tree
          data={data}
          initialDepth={2}
          translate={myTreeConfig.translate}
          nodeSize={myTreeConfig.nodeSize}
          separation={myTreeConfig.separation}
          depthFactor={myTreeConfig.depthFactor}
          orientation={"vertical"}
          svgClassName="" // Apply custom class to the SVG element
          leafNodeClassName="bg-red-500" // Apply custom class to leaf nodes
          branchNodeClassName="branch-node" // Apply custom class to branch nodes
          pathClassFunc={pathClassFunc} // Apply custom class to paths (links)
          // pathFunc={"diagonal"}
        />
      </div>
    </div>
  );
}
