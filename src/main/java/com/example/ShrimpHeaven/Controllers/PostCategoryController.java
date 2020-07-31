package com.example.ShrimpHeaven.Controllers;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Models.PostCategory;
import com.example.ShrimpHeaven.Repositories.AuthorRepository;
import com.example.ShrimpHeaven.Repositories.PostCategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class PostCategoryController {

    private PostCategoryRepository categoryRepository;

    public PostCategoryController(PostCategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    public Collection<PostCategory> displayAllCategories(){
        return (Collection<PostCategory>) categoryRepository.findAll();
    }

    @GetMapping("/categories/{id}")
    public PostCategory displaySingleCategory(@PathVariable Long id){
        PostCategory categoryToDisplay = categoryRepository.findById(id).get();
        return categoryToDisplay;
    }
}
