package com.roadmap.Roadmap.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map; 

@Document(collection = "Course")
public class Course {
    public class Topic {
        public class Subtopic{
            public String name;
            public String content;
        }
        public String name;
        public Map<String,Subtopic> subtopics;
    }
    @Id
    public String id;
    public String name;
    public Map<String,Topic> topics;
}


/* Sample object

{
    id:"12345"
    name:"Frontend"
    topics:
    {
        "HTML":
        {
            name:"HTML",
            subtopics:
            {
                "SEO":
                {
                    name:"SEO",
                    content:"SEO is an important thing"
                }
            }
        }
    }
}

More Sample Data
{
    id:"67890"
    name:"Backend"
    topics:
    {
        "Java":
        {
            name:"Java",
            subtopics:
            {
                "Spring Boot":
                {
                    name:"Spring Boot",
                    content:"Spring Boot is a popular Java framework"
                },
                "Hibernate":
                {
                    name:"Hibernate",
                    content:"Hibernate is an ORM framework for Java"
                }
            }
        }
    }
}*/