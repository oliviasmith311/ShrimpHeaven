package com.example.ShrimpHeaven.Repositories;

import com.example.ShrimpHeaven.Models.Hashtag;
import org.springframework.data.repository.CrudRepository;

public interface HashtagRepository extends CrudRepository<Hashtag, Long> {
    Hashtag findByContent(String content);
}
