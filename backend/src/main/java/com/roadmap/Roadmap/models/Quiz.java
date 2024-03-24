package com.roadmap.Roadmap.models;

import java.util.Vector;

import org.springframework.data.annotation.Id;

public class Quiz {
    public class Question{
        public String question;
        public String answer;
    }
    @Id
    public String id;
    public String name;
    public Vector<Question> questions; 
}
