package com.roadmap.Roadmap.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.roadmap.Roadmap.models.Quiz;

public interface QuizRepo extends MongoRepository<Quiz,String>{
    
}
