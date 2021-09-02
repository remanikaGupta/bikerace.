class Game {
          constructor(){
        
          }
        
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }
        
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
        
            player1 = createSprite(100,200);
            player1.addImage("player1",player1_img);
            player2 = createSprite(300,200);
            player2.addImage("player2",player2_img);
            players = [player1, player2]
          }
        
          play(){
            form.hide();
            
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              //var display_position = 100;
              background("black")
              image(bg_image, 0,-displayHeight*9,displayWidth, displayHeight*10);
              
              //index of the array
              var index =0;
        
              //x and y position of the cars
              var x =200;
              var y;
        
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
                x = 200 + (index * 500) + allPlayers[plr].xPos;
                y = displayHeight - allPlayers[plr].distance ;
                //position the cars a little away from each other in x direction
               // x = x + 200;
                //use data form the database to display the cars in y direction
              // y = displayHeight - allPlayers[plr].distance;
              
              players[index-1].x = x;
                players[index-1].y = y;
                textAlign(CENTER);
                textSize(20);
                text(allPlayers[plr].name, players[index - 1].x, players[index - 1].y + 75);
                              
                if (index === player.index){
                 
                  camera.position.x = displayWidth/2;
                  camera.position.y = players[index-1].y
                
                }
                if(players[index-1].isTouching(obstaclesG)){
                  yVel = 0
                  obstaclesG.setVelocityYEach(0)
                  gameState = 2
                  //players.splice(index-1,1)
      
                
              }
               
                
              }
        
            }
        
            
            if(player.distance < 4200 && gameState === 1){
              if(keyIsDown(38) && player.index !== null){
                  bike_sound.play();
                  yVel += 0.9;
                  if(keyIsDown(37)){
                      xVel -= 0.2;
                  }
                  if(keyIsDown(39)){
                      xVel += 0.2;
                  }
              }
            }else{
              xVel = 0
              yVel = 0
              gameState = 2
            }
        
          //move the car
          player.distance += yVel;
          yVel *= 0.98;
          player.xPos += xVel;
          xVel *= 0.985;
          player.update();
          //display sprites
          drawSprites();
        }
           
      end(){
        //background("yellow")
//console.log("running")
        camera.position.x = 0
        camera.position.y = 0
        bike_sound.stop()
        textAlign("center")
        fill('red')
        textSize(30)
        text("Better luck next time!!",0, 0)


      }



        }

