package com.example.ShrimpHeaven.Controllers;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Models.Post;
import com.example.ShrimpHeaven.Models.PostCategory;
import com.example.ShrimpHeaven.Repositories.AuthorRepository;
import com.example.ShrimpHeaven.Repositories.HashtagRepository;
import com.example.ShrimpHeaven.Repositories.PostCategoryRepository;
import com.example.ShrimpHeaven.Repositories.PostRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class PostController {

    private PostRepository postRepository;
    private AuthorRepository authorRepository;
    private PostCategoryRepository categoryRepository;
    private HashtagRepository hashtagRepository;

    private Author author;
    private PostCategory category;

    public PostController(PostRepository postRepository, AuthorRepository authorRepository, PostCategoryRepository categoryRepository, HashtagRepository hashtagRepository){
        this.postRepository = postRepository;
        this.authorRepository = authorRepository;
        this.categoryRepository = categoryRepository;
        this.hashtagRepository = hashtagRepository;
    }

    @RequestMapping("/")
    public Collection<Post> displayPosts(){
        return (Collection<Post>) postRepository.findAll();
    }

    @GetMapping("/posts/{id}")
    public Post displaySinglePost(@PathVariable Long id){
        Post retrievedPost = postRepository.findPostById(id);

        return retrievedPost;
    }

    @PostMapping("/")
    public Collection<Post> addPost(@RequestBody Post post){
        Author authorToStore = new Author(post.getAuthor().getName());

        for(Author author : authorRepository.findAll()){
            if(author.equals(post.getAuthor())){
                authorToStore = author;
            }
        }
        authorRepository.save(authorToStore);

        PostCategory categoryToStore = new PostCategory(post.getPostCategory().getTitle());

        for(PostCategory category : categoryRepository.findAll()){
            if(category.equals(post.getPostCategory())){
                categoryToStore = category;
            }
        }
        categoryRepository.save(categoryToStore);

        Post postToBeMade = new Post(post.getTitle(), authorToStore, categoryToStore, post.getPostBody());
        postRepository.save(postToBeMade);

        return (Collection<Post>) postRepository.findAll();
    }
}