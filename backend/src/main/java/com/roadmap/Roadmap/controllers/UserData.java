package com.roadmap.Roadmap.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.Roadmap.models.User;
import com.roadmap.Roadmap.models.User.CourseDetails;
import com.roadmap.Roadmap.models.User.QuizDetails;
import com.roadmap.Roadmap.repositories.UserRepo;


@RestController
@CrossOrigin(origins = "*")
public class UserData {
    @Autowired
    UserRepo Users;

    @GetMapping("/getUserDataById")
    @CrossOrigin(origins = "*")
    public User getUserDataById(@RequestParam String id){
        return Users.findById(id).orElse(null);
    }

    @PostMapping("/addNewUser")
    @CrossOrigin(origins = "*")
    public User addNewUser(@RequestBody User details){
        return Users.save(details);
    }

    @PatchMapping("/updateUser")
    @CrossOrigin(origins = "*")
    public User updateUser(@RequestBody User details){
        return Users.save(details);
    }


    public static class AddCompletedSubtopicReqBody{
        public String id;
        public CourseDetails<String,String,String> completedCourse;
    }
    @PatchMapping("/addCompletedSubtopic")
    @CrossOrigin(origins = "*")
    public User addCompletedSubtopic(@RequestBody AddCompletedSubtopicReqBody body){
        User user=Users.findById(body.id).orElse(null);
        user.completedCourses.add(body.completedCourse);
        return Users.save(user);
    }

    public static class AddCompletedQuestionReqBody{
        public String id;
        public QuizDetails<String,Integer> completedQuestion;
    }
    @PatchMapping("/addCompletedQuestion")
    @CrossOrigin(origins = "*")
    public User addCompletedQuestion(@RequestBody AddCompletedQuestionReqBody body){
        User user=Users.findById(body.id).orElse(null);
        user.completedQuestions.add(body.completedQuestion);
        return Users.save(user);
    }
}
