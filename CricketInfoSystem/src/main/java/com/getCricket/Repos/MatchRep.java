package com.getCricket.Repos;

import com.getCricket.Entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRep extends JpaRepository<Match,Integer>{
    //match fetch --> provide team ka name

    Optional<Match> findByTeamHeading (String teamHeading);

}
