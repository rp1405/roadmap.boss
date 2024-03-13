import FAQ from "./FAQ";
import HeadingOfTopic from "./HeadingOfTopic";
import TreeChart from "./Tree";
interface TreeNode {
  id: string;
  children?: TreeNode[];
}
const treeData: TreeNode = {
  id: "Root",
  children: [
    {
      id: "Child 1",
      children: [
        { id: "Child 1.1" },
        { id: "Child 1.2" },
        {
          id: "Child 1.3",
          children: [{ id: "Child 1.3.1" }, { id: "Child 1.3.2" }],
        },
      ],
    },
    {
      id: "Child 2",
      children: [
        { id: "Child 2.1" },
        { id: "Child 2.2" },
        {
          id: "Child 2.3",
          children: [
            { id: "Child 2.3.1" },
            { id: "Child 2.3.2" },
            {
              id: "Child 2.3.3",
              children: [{ id: "Child 2.3.3.1" }, { id: "Child 2.3.3.2" }],
            },
          ],
        },
      ],
    },
    // Add more children or levels as needed
  ],
};

export default function DetailPage() {
  return (
    <div className="w-[100vw] items-center justify-center">
      <HeadingOfTopic
        topicName="Frontend Developer"
        topicDescription="Step by step guide to becoming a modern frontend developer in 2024"
      />
      <TreeChart
        data={treeData}
        nodeRadius={8} // Customize node radius
        nodeColor="#ffcc00" // Customize node color
        textColor="#333" // Customize text color
        linkColor="#666" // Customize link color
        linkStrokeWidth={2} // Customize link stroke width
        enableNodeHover={true} // Enable node hover interaction
        onNodeHover={(node: TreeNode) => {
          console.log("Hovered node:", node.id);
        }} // Handle node hover interaction
        nodeStroke="#999" // Customize node stroke color
        nodeStrokeWidth={1.5} // Customize node stroke width
        nodeHighlightOpacity={0.9} // Customize node hover highlight opacity
        nodeTextOpacity={0.8} // Customize unhovered node text opacity
        // tooltipContent={(node: TreeNode) => (
        //   <div>
        //     <strong>Node ID:</strong> {node.id}
        //   </div>
        // )} // Provide custom tooltip content
        enableTooltips={true} // Enable tooltips
      />
      <FAQ />
    </div>
  );
}
