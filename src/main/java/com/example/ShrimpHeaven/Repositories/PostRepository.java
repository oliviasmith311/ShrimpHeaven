package com.example.ShrimpHeaven.Repositories;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Models.Post;
import com.example.ShrimpHeaven.Models.PostCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface PostRepository extends CrudRepository<Post, Long> {

    Post findPostByTitle(String title);

    Post findPostById(Long id);

    Collection<Post> findAllByPostCategory(PostCategory category);

    Collection<Post> findAllByAuthor(Author author);

}