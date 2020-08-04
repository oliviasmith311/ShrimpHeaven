package com.example.ShrimpHeaven.Controllers;

import com.example.ShrimpHeaven.Models.Post;
import com.example.ShrimpHeaven.Models.PostCategory;
import com.example.ShrimpHeaven.Repositories.PostCategoryRepository;
import com.example.ShrimpHeaven.Repositories.PostRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class PostCategoryController {

    private PostCategoryRepository categoryRepository;
    private PostRepository postRepository;

    public PostCategoryController(PostCategoryRepository categoryRepository, PostRepository postRepository){
        this.categoryRepository = categoryRepository;
        this.postRepository = postRepository;
    }

    @GetMapping("/categories")
    public Collection<PostCategory> displayAllCategories(){
        return (Collection<PostCategory>) categoryRepository.findAll();
    }

    @GetMapping("/categories/{id}")
    public Collection<Post> displayAllPostsOfSingleCategory(@PathVariable Long id){
        return postRepository.findAllByPostCategory(categoryRepository.findById(id).get());
    }
}
