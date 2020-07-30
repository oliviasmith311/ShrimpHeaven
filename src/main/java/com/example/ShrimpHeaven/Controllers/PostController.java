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

@Controller
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

    @RequestMapping({"/posts", "/", ""})
    public Collection<Post> displayPosts(){
        return (Collection<Post>) postRepository.findAll();
    }

    @GetMapping("/posts/{title}")
    public Post displaySinglePost(@PathVariable String title){
        Post retrievedPost = postRepository.findPostByTitle(title);

        return retrievedPost;
    }

    @PostMapping("/add-posts")
    public Collection<Post> addPost(@RequestParam String title, String author, String category, String postBody){
        Author authorToStore = new Author(author);
        PostCategory categoryToStore = new PostCategory(category);
        authorRepository.save(authorToStore);
        categoryRepository.save(categoryToStore);

        Post postToBeMade = new Post(title, authorToStore, categoryToStore, postBody);
        postRepository.save(postToBeMade);

        return (Collection<Post>) postRepository.findAll();
    }
}