package com.backend.entity;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Conversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idConversation;


    @ManyToOne
    private User student;

    @ManyToOne
    private User teacher;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @OneToMany
    private List<Message> messages;
}
