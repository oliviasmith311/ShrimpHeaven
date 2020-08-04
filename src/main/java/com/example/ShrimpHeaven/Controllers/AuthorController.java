package com.example.ShrimpHeaven.Controllers;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Models.Post;
import com.example.ShrimpHeaven.Repositories.AuthorRepository;
import com.example.ShrimpHeaven.Repositories.PostRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class AuthorController {

    private AuthorRepository authorRepository;
    private PostRepository postRepository;

    public AuthorController(AuthorRepository authorRepository, PostRepository postRepository){
        this.authorRepository = authorRepository;
        this.postRepository = postRepository;
    }

    @GetMapping("/authors")
    public Collection<Author> displayAllAuthors(){
        return (Collection<Author>) authorRepository.findAll();
    }

    @GetMapping("/authors/{id}")
    public Collection<Post> displayAllPostsBySingleAuthor(@PathVariable Long id){
        return postRepository.findAllByAuthor(authorRepository.findAuthorById(id));
    }
}
