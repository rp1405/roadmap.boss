package com.roadmap.Roadmap.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Course")
public class Course {
    public static class Timeline{
        public String topic;
    }
    @Id
    public String id;
    public String name;
    public Timeline timeline;
}
