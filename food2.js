(function(window){
	var oldfood =[];
	//思路：先创建食物构造函数，定义各种函数
			//给构造函数挂载食物渲染函数，把食物放在map中  先创建，再写入（随机食物的位置）
			//最后实例化食物对象，调用渲染函数
			//注意单位，注意获取，注意调用和实例化，注意传参
			//构造函数
			//食物有宽高，颜色，位置
			function Food(width,height,color,x,y){
				this.width = width||20;
				this.height = height||20;
				this.color = color||'green';
				this.x = x ||0;
				this.y = y||0;
				
			}
			//给食物构造函数原型挂载函数
			Food.prototype.render=function(map){
				if(oldfood[0]){
					remove();
				}
			
				this.x =(parseInt(Math.random()*map.offsetWidth/this.width))*this.width;
				this.y =(parseInt(Math.random()*map.offsetHeight/this.height))*this.height;
				//给页面添加食物元素
				var oDiv = document.createElement('div');
				//把各种属性赋予食物的各种样式
				
				//宽高，位置，背景颜色，绝对定位
				oDiv.style.width = this.width+'px';
				oDiv.style.height = this.height+'px';
				oDiv.style.position = 'absolute';
				oDiv.style.left = this.x+'px';
				oDiv.style.top = this.y+'px';
				this.color = 'rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')'
				oDiv.style.backgroundColor=this.color;
				//把食物放入map中
				map.appendChild(oDiv);
                oldfood.push(oDiv);
				
			}
			function remove(){
				oldfood[0].parentNode.removeChild(oldfood[0]);
				
				//清空数组
				oldfood =[];
			}
window.Food = Food;
})(window)
