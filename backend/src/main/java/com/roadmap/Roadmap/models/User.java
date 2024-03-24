package com.roadmap.Roadmap.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "User")
public class User {
    public static class CourseDetails<a,b,c> {
        public a course;
        public b topic;
        public c subTopic;
    }
    public static class QuizDetails<a,b> {
        public a quizId;
        public b questionNumber;
    }
    @Id
    public String id;
    public String name;
    public String username;
    public String email;
    public String mobileNumber;
    public Set<CourseDetails<String,String,String>> completedCourses; //will keep the tuple <courseName,topicName,subTopicName>
    public Set<QuizDetails<String,Integer>> completedQuestions;  //will keep the pair <quizid,questionNumber>
}
