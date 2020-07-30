package com.example.ShrimpHeaven.Repositories;

import com.example.ShrimpHeaven.Models.Author;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Author, Long> {
    Author findAuthorById(Long id);
}