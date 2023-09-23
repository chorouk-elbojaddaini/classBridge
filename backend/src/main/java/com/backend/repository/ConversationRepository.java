package com.backend.repository;

import com.backend.entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation,Long> {

    @Query("SELECT c FROM Conversation c LEFT JOIN FETCH c.messages WHERE c.idConversation = :conversationId")
    Optional<Conversation> findConversationWithMessages(@Param("conversationId") Long conversationId);
}
