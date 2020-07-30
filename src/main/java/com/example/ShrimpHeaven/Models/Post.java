package com.example.ShrimpHeaven.Models;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;

@Entity
public class Post {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @ManyToOne
    private Author author;
    @ManyToOne
    private PostCategory postCategory;
    @ManyToMany
    private Collection<Hashtag> hashtags;

    private String postBody;

    public Post(){}

    public Post(String title, Author author, PostCategory postCategory, String postBody){
        this.title = title;
        this.author = author;
        this.postCategory = postCategory;
        this.hashtags = new HashSet<>();
        this.postBody = postBody;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Author getAuthor() {
        return author;
    }

    public PostCategory getPostCategory() {
        return postCategory;
    }

    public String getPostBody() {
        return postBody;
    }

    public Collection<Hashtag> getHashtags() {
        return hashtags;
    }

    public void addHashtag(Hashtag hashtagToAdd) {
        hashtags.add(hashtagToAdd);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id) &&
                Objects.equals(title, post.title) &&
                Objects.equals(author, post.author) &&
                Objects.equals(postCategory, post.postCategory) &&
                Objects.equals(postBody, post.postBody);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, author, postCategory, postBody);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author=" + author +
                ", postCategory=" + postCategory +
                ", postBody='" + postBody + '\'' +
                '}';
    }
}
