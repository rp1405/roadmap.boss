package com.roadmap.Roadmap.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.roadmap.Roadmap.models.Course;

public interface CourseRepo extends MongoRepository<Course,String>{
    
}
