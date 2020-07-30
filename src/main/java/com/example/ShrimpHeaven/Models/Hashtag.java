package com.example.ShrimpHeaven.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Hashtag {

    @Id
    @GeneratedValue
    private Long id;

    @JsonIgnore
    @ManyToMany(mappedBy = "hashtags")
    private Collection<Post> posts;

    private String content;

    public Hashtag(){}

    public Hashtag(String content){
        this.content = content;
        this.posts = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public Collection<Post> getPosts() {
        return posts;
    }

    public String getContent() {
        return content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hashtag hashtag = (Hashtag) o;
        return Objects.equals(id, hashtag.id) &&
                Objects.equals(content, hashtag.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, content);
    }

    @Override
    public String toString() {
        return "Hashtag{" +
                "id=" + id +
                ", content='" + content + '\'' +
                '}';
    }

}

