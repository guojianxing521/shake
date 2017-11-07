(function(window){
	function Game(map){
				//把食物和蛇对象挂载到该对象的属性里
				this.food = new Food();
				this.snake = new Snake();
				//还有map
				this.map =map;
			}
			//给游戏原型挂载开始函数
			Game.prototype.start=function(){
				//执行食物和蛇的渲染函数
				this.food.render(this.map);
				this.snake.render(this.map);
				run(this);
				keydown(this);
				
			}
			function run(that){
				var timer = setInterval(function(){
				  
					that.snake.move(that.map,that.food);//换个位置
					//每次移动判断是否碰到墙
					//获取蛇头的坐标
					var headX = that.snake.body[0].x*that.snake.width;
					var headY = that.snake.body[0].y*that.snake.height;
					//获取地图map的位置
					var mapX = that.map.offsetWidth;
					var mapY = that.map.offsetHeight;
					if(headX<0||headX>=mapX||headY<0||headY>=mapY){
						clearInterval(timer);
						alert('游戏结束');
						return;//后面的语句不再执行
					}
					
					//位置改变了要把原来的蛇组移除
		           //并且重新渲染
	               that.snake.render(map);
				},100)
			}
			
			//添加键盘事件
			function keydown(that){
				
				document.onkeydown=function(e){
					e=e||event;
					switch(e.keyCode){
						case 37:
						that.snake.direction='left';
						break;
						case 39:
						that.snake.direction='right';
						break;
						case 38:
						that.snake.direction='up';
						break;
						case 40:
						that.snake.direction='down';
						break;	
					}
				}
				
			}
	window.Game =Game;
})(window)
