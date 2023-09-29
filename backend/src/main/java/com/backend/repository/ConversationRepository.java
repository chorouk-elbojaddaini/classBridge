package com.backend.repository;

import com.backend.entity.Conversation;
import com.backend.entity.Course;
import com.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation,Long> {

    @Query("SELECT c FROM Conversation c LEFT JOIN FETCH c.messages WHERE c.idConversation = :conversationId")
    Optional<Conversation> findConversationWithMessages(@Param("conversationId") Long conversationId);

    Conversation findByStudentAndTeacherAndCourse(User student, User teacher, Course course);

    @Query(value = "SELECT * FROM conversation c  WHERE c.teacher_id = :teacherId",nativeQuery = true)
    List<Conversation> findByTeacherId(Long teacherId);

    @Query(value = "SELECT * FROM conversation c  WHERE c.teacher_id = :teacherId",nativeQuery = true)
    List<Conversation> findByStudentId(Long teacherId);
}
