function $(id) {
				return document.getElementById(id);
			}
var index=0;
var imgW=664;
var box=$('box');
var imgs=$('imgs');
var seven=$('seven').getElementsByTagName('span');
imgs.style.left=-imgW*index-516+'px'; // 指定第index个图像显示出来
seven[index].className='abc';
var btnLen=seven.length;
var zuo=$('zuo');
var you=$('you');
for(var i=0;i<btnLen;i++) {
		seven[i].i=i; //每个按钮设置js属性，保存序号
		seven[i].onclick=function(){ // 设置每个按钮的点击事件
			index<7;
			imgs.style.left=-imgW*index-516+'px';
			// 设置轮播图向指定方向移动指定距离
			// 距离计算：一幅图片宽度x按钮的序号
			seven[index].className=''; // 清除掉上一个act状态的按钮
			index=this.i; // 正在显示的图片的序号设置为被点击的按钮的序号
			this.className='abc'; // 被点击的按钮设置为act状态
		}
	}

function move(dir) {
		var oldIndex=index; // 保存上一个图片的序号
		index=index+dir; // 变化图片的序号
		// 过界处理
		if(index<0){ // 如果小于最小序号
			index=btnLen-1; // 设置为最大序号
		}
		if(index>btnLen-1){ // 如果大于最大序号
			index=0; // 设置为最小序号
		}
		imgs.style.left=-imgW*index-516+'px'; // 指定第index个图像显示出来
		seven[oldIndex].className=''; // 清除掉上一个act状态的按钮
		seven[index].className='abc'; // 指定第index个按钮为active状态（class="abc"）
	}

	zuo.onclick=function(){
		move(-1);
		// 此时 dir=-1
		// index=index+dir
		// 等同于
		// index=index-1
		// 等同于index--
	}
	you.onclick=function(){
		move(1);
		// 此时 dir=1
		// index=index+dir
		// 等同于
		// index=index+1
		// 等同于index++
	}
	
