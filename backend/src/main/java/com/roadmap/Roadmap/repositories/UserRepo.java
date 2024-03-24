package com.roadmap.Roadmap.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.roadmap.Roadmap.models.User;

public interface UserRepo extends MongoRepository<User,String>{
    
}
