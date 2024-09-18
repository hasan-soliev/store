export const loadImages = () => {
    const images = {
      block: new Image(),
      digits: new Image(),
      levelText: new Image(),
      spriteBlob: new Image(),
      spriteExit: new Image(),
      spritePlayer: new Image(),
      tiles: new Image(),
      timerDigits: new Image(),
      timerFrame: new Image(),
    };
  
    images.block.src = 'assets/images/block.bmp';
    images.digits.src = 'assets/images/digits.bmp';
    images.levelText.src = 'assets/images/level_text.bmp';
    images.spriteBlob.src = 'assets/images/sprite_blob.bmp';
    images.spriteExit.src = 'assets/images/sprite_exit.bmp';
    images.spritePlayer.src = 'assets/images/sprite_player.bmp';
    images.tiles.src = 'assets/images/tiles.bmp';
    images.timerDigits.src = 'assets/images/timer_digits.bmp';
    images.timerFrame.src = 'assets/images/timer_frame.bmp';
  
    return new Promise((resolve) => {
      let loadedImages = 0;
      const totalImages = Object.keys(images).length;
  
      Object.values(images).forEach((img) => {
        img.onload = () => {
          loadedImages += 1;
          if (loadedImages === totalImages) {
            resolve(images);
          }
        };
      });
    });
  };
  
  export const initializeGameData = (images) => {
    const gameData = {
      images,
      player: { x: 0, y: 0, width: 32, height: 32, sprite: images.spritePlayer },
      // Добавьте остальные игровые данные
    };
    return gameData;
  };
  
  export const updateGameData = (gameData) => {
    // Обновление игровых данных
    // Добавьте логику обновления состояния игры
  };
  
  export const renderGame = (context, gameData) => {
    // Рендеринг игрового состояния на canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(gameData.images.block, 0, 0);
    context.drawImage(gameData.images.spritePlayer, gameData.player.x, gameData.player.y);
    // Добавьте остальную логику рендеринга
  };
  