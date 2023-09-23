package com.backend.repository;

import com.backend.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {
    @Query(value = "SELECT m FROM Message m WHERE m.conversation.idConversation = :conversationId")
    List<Message> findByConversationId(@Param("conversationId") Long conversationId);
}
