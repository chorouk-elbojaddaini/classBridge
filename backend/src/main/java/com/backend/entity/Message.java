package com.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Message {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMsg;

    private String content;

    private Date date;

    private String senderEmail;

    @ManyToOne
    @JoinColumn(name = "conversation_id")
    private Conversation conversation;


}
