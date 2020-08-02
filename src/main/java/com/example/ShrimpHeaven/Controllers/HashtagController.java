package com.example.ShrimpHeaven.Controllers;

import com.example.ShrimpHeaven.Models.Hashtag;
import com.example.ShrimpHeaven.Repositories.HashtagRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class HashtagController {

    private HashtagRepository hashtagRepository;

    public HashtagController(HashtagRepository hashtagRepository){
        this.hashtagRepository = hashtagRepository;
    }

    @GetMapping("/hashtags")
    public Collection<Hashtag> displayAllHashtags(){
        return (Collection<Hashtag>) hashtagRepository.findAll();
    }

    @GetMapping("/hashtags/{id}")
    public Hashtag displaySingleHashtag(@PathVariable Long id){
        return hashtagRepository.findById(id).get();
    }
}
