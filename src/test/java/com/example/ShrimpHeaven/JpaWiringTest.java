package com.example.ShrimpHeaven;

import com.example.ShrimpHeaven.Models.Author;
import com.example.ShrimpHeaven.Models.Hashtag;
import com.example.ShrimpHeaven.Models.Post;
import com.example.ShrimpHeaven.Models.PostCategory;
import com.example.ShrimpHeaven.Repositories.AuthorRepository;
import com.example.ShrimpHeaven.Repositories.HashtagRepository;
import com.example.ShrimpHeaven.Repositories.PostCategoryRepository;
import com.example.ShrimpHeaven.Repositories.PostRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaWiringTest {

    @Autowired
    private PostRepository postRepo;
    @Autowired
    private AuthorRepository authorRepo;
    @Autowired
    private PostCategoryRepository categoryRepo;
    @Autowired
    private HashtagRepository hashtagRepo;
    @Autowired
    private TestEntityManager entityManager;

    private Author testAuthor;
    private PostCategory testCategory;
    private Hashtag testHashtag;
    private Post testPost;

    @BeforeEach
    void setUp() {
        testAuthor = new Author("test author");
        authorRepo.save(testAuthor);
        testCategory = new PostCategory("test title");
        categoryRepo.save(testCategory);
        testHashtag = new Hashtag("test content");
        hashtagRepo.save(testHashtag);
        testPost = new Post("test title", testAuthor, testCategory, "test body");
        testPost.addHashtag(testHashtag);
        postRepo.save(testPost);
    }

    @Test
    public void postShouldSaveToPostRepo(){
        entityManager.flush();
        entityManager.clear();

        Optional<Post> retrievedPostOptional = postRepo.findById(testPost.getId());

        Post retrievedPost = retrievedPostOptional.get();

        assertThat(retrievedPost).isEqualTo(testPost);
    }

    @Test
    public void authorShouldHavePosts(){
        entityManager.flush();
        entityManager.clear();

        Author retrievedAuthor = authorRepo.findAuthorById(testAuthor.getId());

        assertThat(retrievedAuthor.getPosts()).contains(testPost);
    }

    @Test
    public void categoryShouldHavePosts(){
        entityManager.flush();
        entityManager.clear();

        PostCategory retrievedCategory = categoryRepo.findById(testCategory.getId()).get();

        assertThat(retrievedCategory.getPosts()).contains(testPost);
    }

    @Test
    public void postShouldHaveHashtags(){
        entityManager.flush();
        entityManager.clear();

        Post retrievedPost = postRepo.findById(testPost.getId()).get();
        assertThat(retrievedPost.getHashtags()).contains(testHashtag);
    }

    @Test
    public void hashtagsShouldHavePosts(){
        entityManager.flush();
        entityManager.clear();

        Hashtag retrievedHashtag = hashtagRepo.findByContent(testHashtag.getContent());
        assertThat(retrievedHashtag).isEqualTo(testHashtag);
    }
}
