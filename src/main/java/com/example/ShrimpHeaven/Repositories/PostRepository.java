package com.example.ShrimpHeaven.Repositories;

import com.example.ShrimpHeaven.Models.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {

    Post findPostByTitle(String title);

}