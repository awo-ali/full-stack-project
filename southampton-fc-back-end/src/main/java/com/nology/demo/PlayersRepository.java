package com.nology.demo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayersRepository extends JpaRepository<Player, String> {

Player findByid(String id);


    Player findByName(String name);



}
