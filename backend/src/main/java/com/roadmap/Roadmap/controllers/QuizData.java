package com.roadmap.Roadmap.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.roadmap.Roadmap.models.Quiz.Question;
import com.roadmap.Roadmap.models.Quiz;
import com.roadmap.Roadmap.repositories.QuizRepo;

public class QuizData {
    
    @Autowired
    QuizRepo Quizzes;

    @GetMapping("/getQuiz")
    @CrossOrigin(origins = "*")
    public Quiz getQuizDataById(@RequestParam String id){
        return Quizzes.findById(id).orElse(null);
    }

    @PostMapping("/addNewQuiz")
    @CrossOrigin(origins = "*")
    public Quiz addNewQuiz(@RequestBody Quiz details){
        return Quizzes.save(details);
    }

    @PatchMapping("/updateQuiz")
    @CrossOrigin(origins = "*")
    public Quiz updateQuiz(@RequestBody Quiz details){
        return Quizzes.save(details);
    }

    @PatchMapping("/addNewQuestion")
    @CrossOrigin(origins = "*")
    public Quiz addNewQuestion(@RequestParam String id, @RequestBody Question question){
        Quiz quiz=Quizzes.findById(id).orElse(null);
        quiz.questions.add(question);
        return quiz;
    }

    @PatchMapping("/deleteQuestion")
    @CrossOrigin(origins = "*")
    public Quiz deleteQuestion(@RequestParam String id, @RequestBody Integer questionNo){
        Quiz quiz=Quizzes.findById(id).orElse(null);
        quiz.questions.remove(questionNo-1);
        return quiz;
    }

    public class UpdateQuestionBody{
        Integer questionNo;
        Question question;
    }
    @PatchMapping("/updateQuestion")
    @CrossOrigin(origins = "*")
    public Quiz updateQuestion(@RequestParam String id, @RequestBody UpdateQuestionBody body){
        Quiz quiz=Quizzes.findById(id).orElse(null);
        quiz.questions.setElementAt(body.question, body.questionNo);
        return quiz;
    }
}
