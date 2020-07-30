package com.example.ShrimpHeaven;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Models.Hashtag;
import com.example.ShrimpHeaven.Models.Post;
import com.example.ShrimpHeaven.Models.PostCategory;
import com.example.ShrimpHeaven.Repositories.AuthorRepository;
import com.example.ShrimpHeaven.Repositories.HashtagRepository;
import com.example.ShrimpHeaven.Repositories.PostCategoryRepository;
import com.example.ShrimpHeaven.Repositories.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private AuthorRepository authorRepo;
    private PostCategoryRepository categoryRepository;
    private HashtagRepository hashtagRepo;
    private PostRepository postRepo;

    public Populator(AuthorRepository authorRepo, PostCategoryRepository categoryRepo, HashtagRepository hashtagRepo, PostRepository postRepo) {
        this.authorRepo = authorRepo;
        this.categoryRepository = categoryRepo;
        this.hashtagRepo = hashtagRepo;
        this.postRepo = postRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Author author1 = new Author("Olivia Smith");
        authorRepo.save(author1);
        PostCategory category1 = new PostCategory("Thoughts & Opinions");
        categoryRepository.save(category1);
        Post post1 = new Post("The Joys Of The McElroys", author1, category1, "These boys are great!");
        postRepo.save(post1);
        Hashtag hashtag1 = new Hashtag("cool");
        hashtagRepo.save(hashtag1);
        post1.addHashtag(hashtag1);
        postRepo.save(post1);
    }
}