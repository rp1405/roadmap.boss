package com.roadmap.Roadmap.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roadmap.Roadmap.models.Course;
import com.roadmap.Roadmap.models.Course.Topic;
import com.roadmap.Roadmap.models.Course.Topic.Subtopic;
import com.roadmap.Roadmap.repositories.CourseRepo;

@RestController
@RequestMapping("/api/private")
@CrossOrigin(origins = "*")
public class CourseData {
    @Autowired
    CourseRepo Courses;

    @GetMapping("/getCourse")
    @CrossOrigin(origins = "*")
    public Course getCourseById(@RequestParam String id) {
        return Courses.findById(id).orElse(null);
    }

    @PostMapping("/addNewCourse")
    @CrossOrigin(origins = "*")
    public Course addNewCourse(@RequestBody Course course) {
        return Courses.save(course);
    }

    @PatchMapping("/updateCourse")
    @CrossOrigin(origins = "*")
    public Course updateCourse(@RequestBody Course course) {
        return Courses.save(course);
    }

    @PatchMapping("/addNewTopic") // can also be used for updating the topic
    @CrossOrigin(origins = "*")
    public Course addNewTopic(@RequestParam String id, @RequestBody Topic topic) {
        Course course = Courses.findById(id).orElse(null);
        course.topics.put(topic.name, topic);
        return course;
    }

    @PatchMapping("/deleteTopic")
    @CrossOrigin(origins = "*")
    public Course deleteTopic(@RequestParam String id, @RequestBody String topicName) {
        Course course = Courses.findById(id).orElse(null);
        course.topics.remove(topicName);
        return course;
    }

    public class AddNewSubtopicReqBody {
        String topicName;
        Subtopic subtopic;
    }

    @PatchMapping("/addNewSubtopic")
    @CrossOrigin(origins = "*")
    public Course addNewSubtopic(@RequestParam String id, @RequestBody AddNewSubtopicReqBody body) {
        Course course = Courses.findById(id).orElse(null);
        course.topics.get(body.topicName).subtopics.put(body.subtopic.name, body.subtopic);
        return course;
    }

    public class DeleteSubtopicReqBody {
        String topicName;
        String subtopicName;
    }

    @PatchMapping("/deleteSubtopic")
    @CrossOrigin(origins = "*")
    public Course deleteSubtopic(@RequestParam String id, @RequestBody DeleteSubtopicReqBody body) {
        Course course = Courses.findById(id).orElse(null);
        course.topics.get(body.topicName).subtopics.remove(body.subtopicName);
        return course;
    }
}
