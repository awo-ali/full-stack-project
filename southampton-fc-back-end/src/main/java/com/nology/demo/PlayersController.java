package com.nology.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin
public class PlayersController {

@Autowired
    PlayersRepository playersRepository;
@Autowired
    PlayersService playersService;
@ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }



@GetMapping("/players")
    public List<Player> getPlayers(){
    return playersRepository.findAll();
}

    @GetMapping("/player/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable String id) {
        Player player = playersService.findPlayerById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(player);

    }

    @GetMapping("/player/card/{name}")
    public ResponseEntity<Player> getPlayerByName(@PathVariable String name) {
        Player player = playersService.findPlayerByName(name);
        return ResponseEntity.status(HttpStatus.FOUND).body(player);

    }

//    @GetMapping("/player/card")
//    public String getPlayerByName(@RequestParam String name) {
//        Player player = playersService.findPlayerByName(name);
//      return  ResponseEntity.status(HttpStatus.FOUND).body(player);

//    @RequestMapping("/player/card/{id}")
//        public ResponseEntity<Player> getPlayerByName(@PathVariable(value="id") String id, @RequestParam String name) {
//        Player player = playersService.findPlayerByName(name);
//        return ResponseEntity.status(HttpStatus.FOUND).body(player);
//
//    }

    @GetMapping("/random")
    public ResponseEntity<Player> getRandomPlayer() {
        Player randomPlayer =  playersService.getRandomPlayer();
        return ResponseEntity.status(HttpStatus.FOUND).body(randomPlayer);
    }





}
