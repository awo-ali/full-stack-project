package com.nology.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayersService {
    @Autowired
    PlayersRepository playersRepository;

    Player findPlayerById(String id){
        Player player = playersRepository.findByid(id);
        if (player == null){
            throw new PlayerNotFoundException();
        }
        return player;
    }


    Player getRandomPlayer(){
        List<Player> players = playersRepository.findAll();
        return players.get((int) (Math.random()*players.size()));

    }


    Player findPlayerByName(String name){
        Player player = playersRepository.findByName(name);
        if (player == null){
            throw new PlayerNotFoundException();
        }
        return player;

    }
//Player findPlayerByName(String name){
//    List<Player> players = playersRepository.findBy(name);
//     if (player == null){
//            throw new PlayerNotFoundException();
//        }
//        return player;
//
//    }








}