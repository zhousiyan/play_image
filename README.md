# play_image
简单轮播图
# 使用手册  
## 创建HTML的div元素  
** 创建完后，设置class
~~~html  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="viewbox"></div>
</body>
</html>
~~~  
  
## 引用js  
~~~js  
<script src="./index.js"></script>
~~~  

##  可改变参数  

~~~js
config = {
      //放入图片的数组
      content: arr,
      //装入图片组的容器的classname
      containerClassName: 'container',
      //左右按键的容器classname
      directionClassName: 'direction',
      //装入图片的盒子
      boxClassName: 'box',
      contentClassName: 'content',
      ldirectionClassName: 'ldirection',
      rdirectionClassName: 'rdirection',
      //控制自动播放时长
      timer : 1000,  
      
      //视图的主要样式
      viewPosition: 'relative',
      viewMargin: '0 auto',
      viewWidth: '300px',
      viewHeight: '400px',
      viewbackgroundColor: 'aqua',
      
      //容器的主要样式
      containerPosition: 'relative',
      containerWidth: '300000px',
      containerHeight: '400px',
      containerbackgroundColor: 'rgb(230, 14, 14)',
      
      //盒子的主要样式
      boxPosition: 'absolute',
      boxHeight: '300px',
      
      //图片的主要样式
      contentfloat: 'left',
      contentwidth: '300px',
      contentHeight: '300px',
      contentFontsize: '30px',
      contentTextAligen: 'cener',

      //左右按键盒子的主要样式
      directionPosition: 'absolute',
      directionDisplay: 'flex',
      directionJustifyContent: 'space-between',
      directionTop: '100px',
      directionFontsize: '40px',
      directionWidth: '300px',
    };
~~~
