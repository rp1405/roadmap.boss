import React from "react";
import Tree from "react-d3-tree";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
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
                                    {
                                      name: "Native",
                                    },
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

export default function OrgChartTree() {
  return (
    <div className="flex justify-center">
      <div className="w-[70%] h-[1500px]">
        <Tree data={data} />
      </div>
    </div>
  );
}
