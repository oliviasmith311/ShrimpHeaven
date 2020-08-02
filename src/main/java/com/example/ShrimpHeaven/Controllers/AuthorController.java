package com.example.ShrimpHeaven.Controllers;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Repositories.AuthorRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class AuthorController {

    private AuthorRepository authorRepository;

    public AuthorController(AuthorRepository authorRepository){
        this.authorRepository = authorRepository;
    }

    @GetMapping("/authors")
    public Collection<Author> displayAllAuthors(){
        return (Collection<Author>) authorRepository.findAll();
    }

    @GetMapping("/authors/{id}")
    public Author displaySingleAuthor(@PathVariable Long id){
        Author authorToDisplay = authorRepository.findAuthorById(id);
        return authorToDisplay;
    }
}
