package com.backend.repository;

import com.backend.dto.UserDTO;
import com.backend.entity.User;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
    Optional<User> findByEmail(String email);

    @Query(value = "SELECT  t.last_name  FROM User t WHERE t.email = :email", nativeQuery = true)
    Tuple getUserInfoByEmail(String email);

    User findUserById(Long id);
}
