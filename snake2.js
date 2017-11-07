(function(window){
	
	//创建一个函数存储蛇组
	var oldsnake =[];
	//创建蛇构造函数
			//蛇有宽高(每一节的宽高)，朝向，三节（包括位置x和y，还有背景颜色，都不一样，所以写在一个对象数组中）
			function Snake(width,height,direction){
				this.width = width||20,
				this.height = height||20,
				this.direction = direction||'right',
				this.body=[
				{x:3,y:3,color:'blue'},
				{x:2,y:3,color:'red'},
				{x:1,y:3,color:'red'}
				]
			}
			
			//给蛇对象的原型添加渲染方法
			Snake.prototype.render= function(map){
				//第一次不能移除，数组为空
				if(oldsnake[0]){
					remove();
				}
				
				//创建蛇对象
//				通过for循环创建三节，也就是三个小盒子
           for(var i=0;i<this.body.length;i++){
           	
           	var oDiv = document.createElement('div');
           
//          console.log(oDiv);
            //
            oDiv.style.width = this.width+'px';
            oDiv.style.height = this.height+'px';
           	oDiv.style.position = 'absolute';
           	//此处是用他们的位置x和y乘以每节的宽度
           	oDiv.style.left = this.body[i].x*this.width+'px';
           	oDiv.style.top = this.body[i].y*this.height+'px';
           	oDiv.style.backgroundColor = this.body[i].color;
           	
           	map.appendChild(oDiv);
           	//存储到数组中
//         	oldsnake[oldsnake.length]=oDiv;
            oldsnake.push(oDiv);
           	
           }
	}
	Snake.prototype.move=function(map,food){
		//倒着变换位置
		for(var i=this.body.length-1;i>0;i--){
			this.body[i].x =this.body[i-1].x;
			this.body[i].y =this.body[i-1].y;
			
		}
		//蛇头的位置改变
		switch(this.direction){
			case 'right':
			this.body[0].x +=1;
			break;
			case 'left':
			this.body[0].x -=1;
			break;
			case 'up':
			this.body[0].y-=1;
			break;
			case 'down':
			this.body[0].y+=1;
			break;
		}
		//蛇头的位置
		var headX = this.body[0].x*this.width;
		var headY = this.body[0].y*this.height;
		//食物的位置
		var foodx = food.x;
		var foody = food.y;
		if(headX==foodx&&headY==foody){
			//碰到之后添加
			var last = this.body[this.body.length-1];
			
			var newjie={
			x:last.x,
			y:last.y,
			color:last.color
			};
			
			
			
			this.body.push(newjie);
			
			//重新渲染，移除旧事物，渲染新食物
			food.render(map);
			
			
		}
		
		
		
		
	}
	function remove(){
		for(var i=0;i<oldsnake.length;i++){
			//清除页面上的蛇组
			oldsnake[i].parentNode.removeChild(oldsnake[i]);   
		}
		//还要清空数组
		 oldsnake=[];
		
	}
	window.Snake =Snake;
})(window)
