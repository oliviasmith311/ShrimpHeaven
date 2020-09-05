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

import java.sql.Time;
import java.sql.Timestamp;

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
        Post post1 = new Post("The Joys Of The McElroys", author1, category1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis quam id, mollis nulla.", new Timestamp(System.currentTimeMillis()));
        postRepo.save(post1);
        Hashtag hashtag1 = new Hashtag("cool");
        hashtagRepo.save(hashtag1);
        post1.addHashtag(hashtag1);
        Hashtag hashtag4 = new Hashtag("wow");
        hashtagRepo.save(hashtag4);
        post1.addHashtag(hashtag4);
        Hashtag hashtag5 = new Hashtag("sexy");
        hashtagRepo.save(hashtag5);
        post1.addHashtag(hashtag5);
        Hashtag hashtag6 = new Hashtag("fantastic");
        hashtagRepo.save(hashtag6);
        post1.addHashtag(hashtag6);
        post1.addHashtag(hashtag1);
        post1.addHashtag(hashtag5);
        postRepo.save(post1);

        Author author2 = new Author("Greg Gregerson");
        authorRepo.save(author2);
        PostCategory category2 = new PostCategory("Stories");
        categoryRepository.save(category2);
        Post post2 = new Post("When I Met Clint", author2, category2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis quam id, mollis nulla.", new Timestamp(System.currentTimeMillis()));
        postRepo.save(post2);
        Hashtag hashtag2 = new Hashtag("romantic");
        hashtagRepo.save(hashtag2);
        post2.addHashtag(hashtag2);
        post2.addHashtag(hashtag6);
        post2.addHashtag(hashtag4);
        postRepo.save(post2);

        Author author3 = new Author("Justin McElroo");
        authorRepo.save(author3);
        PostCategory category3 = new PostCategory("Questions");
        categoryRepository.save(category3);
        Post post3 = new Post("Favorite McElroy goof?", author3, category3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis quam id, mollis nulla.", new Timestamp(System.currentTimeMillis()));
        postRepo.save(post3);
        Hashtag hashtag3 = new Hashtag("amazing");
        hashtagRepo.save(hashtag3);
        post3.addHashtag(hashtag3);
        post3.addHashtag(hashtag1);
        postRepo.save(post3);

        Post post4 = new Post ("Another post by me!", author2, category1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis guam id, mollus nulla.", new Timestamp(System.currentTimeMillis()));
        post4.addHashtag(hashtag2);
        post4.addHashtag(hashtag1);
        post4.addHashtag(hashtag5);
        postRepo.save(post4);

        Post post5 = new Post ("I love writing fake titles", author2, category1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis guam id, mollus nulla.", new Timestamp(System.currentTimeMillis()));
        post5.addHashtag(hashtag1);
        post5.addHashtag(hashtag4);
        post5.addHashtag(hashtag5);
        postRepo.save(post5);

        Post post6 = new Post ("I'm Amazing", author3, category2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis guam id, mollus nulla.", new Timestamp(System.currentTimeMillis()));
        post6.addHashtag(hashtag3);
        post6.addHashtag(hashtag6);
        post6.addHashtag(hashtag2);
        postRepo.save(post6);

        Post post7 = new Post ("Ghost Horse, Ghost Horse", author2, category2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis guam id, mollus nulla.", new Timestamp(System.currentTimeMillis()));
        post7.addHashtag(hashtag1);
        post7.addHashtag(hashtag3);
        post7.addHashtag(hashtag5);
        postRepo.save(post7);

        Post post8 = new Post ("I love Lin Manuel Miranda", author1, category3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a tortor condimentum, sagittis guam id, mollus nulla.", new Timestamp(System.currentTimeMillis()));
        post8.addHashtag(hashtag2);
        post8.addHashtag(hashtag4);
        post8.addHashtag(hashtag6);
        postRepo.save(post8);
    }
}